---
icon: article
date: 2022-01-10
title: Go 微服务
category:
- 后端
- Go
- 微服务

tag:
- Go 微服务
---

## 使用

### 安装micro

[教程](https://blog.csdn.net/github_38194421/article/details/104897865)

```
以后用go从源码安装二进制文件的时候记得不要加 -u flag，否则，可能怎么也装不上
```

```
安装go-micro
go get -u -v github.com/micro/go-micro
安装工具集
go get -v github.com/micro/micro
安装protobuf插件
go get -u github.com/golang/protobuf/proto
go get -u github.com/golang/protobuf/protoc-gen-go
go get -u github.com/micro/protoc-gen-micro
```

```
报错：panic: qtls.ConnectionState not compatible with tls.ConnectionState
解决：https://blog.csdn.net/Xiang_lhh/article/details/113814742
```

#### 用法

```
micro new [command options][arguments...]
#指定服务的命名空间
--namespace "go.micro"Namespace for the service e.g com.example
#服务类型，可以是微服务srv或者web项目，或者api等
--type srv Type of service e.g api,fnc,srv,web
#服务的正式完整定义
--fqdn FQDN of service e.g com.example.srv.service
(defaults to namespace.type.alias)
#别名是在指定时作为组合名的一部分使用的短名称 别名
--alias Alias is the short name used as part of combined name if specified15
```

#### 创建

```
micro new myMicro

然后很多main.go的pb包报错，需要.proto生成pb.go文件，输入make proto
报错：'make'不是内部或外部命令，也不是可运行的程序或批处理文件。
故快捷方式用不了就用原生命令吧，到MakeFile下找到make proto原生指令，复制运行即可
```



### 安装使用protobuf

[教程1](https://www.jianshu.com/p/ef946fc63160)

[教程2](https://www.jianshu.com/p/eaa1df6209b6)

#### 介绍

```
通用json化，根据.proto文件自动生成封装好的client和server的方法
```

#### 启动命令

```
protoc --go_out=./ *.proto
```

```
protoc-gen-go: unable to determine Go import path for "myproto.proto"

[解决](https://blog.csdn.net/bestzy6/article/details/118276674)
```

```
 myproto.pb.go 导入包无法解析符号'google.golang.org'

[解决](https://blog.csdn.net/dangqinghua/article/details/107097349)
```

```
'protoc-gen-g grpc' 不是内部或外部命令，也不是可运行的程序或批处理文件。

--g grpc_out: protoc-gen-g grpc: Plugin failed with status code 1.

[网址1](https://blog.csdn.net/qq_42031483/article/details/115208041?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-1-115208041.pc_agg_new_rank&utm_term=go+windows+%E5%AE%89%E8%A3%85protoc&spm=1000.2123.3001.4430)

[网址2](https://blog.csdn.net/qq_40330291/article/details/122215177)

```



### 安装使用consul

[网址](https://www.jianshu.com/p/d78fe734e0ef)

```
官网下载后是个exe文件，直接放到GOPATH/bin目录下即可
```

#### 介绍

```
client与server的中间层，负责监听每个服务的健康情况，以及用户端通过consul来调用服务端的方法。
以此保证client调用的都是正常的server
默认端口 8500
```

#### consul agent

-  bind=0.0.0.0 

	指定consul所在机器的IP地址。默认值:0.0.0.0 

-  http-port=8500consul

	自带一个web访问的默认端口:8500

-  client=127.0.0.1

	表明哪些机器可以访问consul。默认本机。0.0.0.0所有机器均可访问。

-  config-dir=foo 

	所有主动注册服务的描述信息 

-  data-dir=path 

	储存所有注册过来的srv机器的详细信息。 

-  dev 

	开发者模式，直接以默认配置启动consul 

-  node=hostname

	服务发现的名字。

-  rejoin consul

	启动的时候，加入到的consul集群 

- server 

	以服务方式开启consul，允许其他的consul连接到开启的consul上(形成 
	集群)。如果不加-server，表示以“客户端”的方式开启。不能被连接。

- ui 

	可以使用web页面来查看服务发现的详情

##### 测试上述命令:

```
在终端中，键入: 
consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=n1 -bind=127.0.0.1 -ui -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0

提示： ==> Consul agent running!
```



#### consul members

查看集群中有多少个成员。

#### consul info

查看当前consul的IP信息。

#### consul leave

优雅的关闭consul。--不优雅!Ctrl-C



## 知识

### rpc和grpc

```
RPC（Remote Procedure Call）远程过程调用
gRPC 是Google公司开发的一个高性能、开源和通用的 RPC 框架，面向移动和 HTTP/2 设计。
```

### fastdfs

```
高效存储
```



## 功能

### 创建远程函数并调用

```go
// server
package main

import (
	"fmt"
	"net"
	"net/rpc"
)

// World 定义类对象
type World struct {
	
}

/* tcp的类方法要具备
1 某类对象的方法
2 两个参数，一个传入一个传出，传出要用指针
3 返回值只有error
*/
// HelloWorld 定义类方法
func (w *World) HelloWorld(name string,resp* string) error {
	*resp=name+"你好"
	return nil
}
func main() {
	// 创建rpc
	_=rpc.RegisterName("hello",new(World))

	// 连接net
	listener,_:=net.Listen("tcp","127.0.0.1:8800")
	defer listener.Close()

	// 监听
	fmt.Println("开始监听中...")
	conn,_:=listener.Accept()
	defer conn.Close()

	// 绑定rpc
	rpc.ServeConn(conn)
    //jsonrpc.ServeConn(conn) json格式
}


// client端
package main

import (
	"fmt"
	"net/rpc"
)

func main() {
	conn, _ := rpc.Dial("tcp", "127.0.0.1:8800")
	//conn, _ :=jsonrpc.Dial("tcp", "127.0.0.1:8800") 通用json版

	var res string
	_ = conn.Call("hello.HelloWorld", "李白", &res) // 方法名 传入传出参数
	fmt.Println(res)
}

```



### 注册consul

[简书](https://blog.csdn.net/beatxgo/article/details/119210864?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-1-119210864.pc_agg_new_rank&utm_term=go-micro+v3&spm=1000.2123.3001.4430)



### 启动微服务

要先启动服务发现，再go run main.go 启动server，再go run main.go 启动client