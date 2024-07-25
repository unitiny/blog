---
icon: article
date: 2022-01-10
title: Window笔记
category:
- 运维

tag:
- Window
---



## cmd类

### 删除文件

[网址](https://jingyan.baidu.com/article/ab0b56304acf6fc15afa7dbf.html ) 

```
del a.txt 
```

### 切换管理员

[网址](https://blog.csdn.net/bobo_bc/article/details/103848790 ) 

### "ls"命令

```
dir
```

### 杀掉进程

```
taskkill /PID 19172
```



### 创建文件夹

```
mkdir test
```

### 创建文件

```
type nul>a.txt
```

### 请求网址

```
curl --data "users=abc,abcd" http://127.0.0.1:8080/import 
```

### 使用wrk

[网址](https://www.cnblogs.com/savorboard/p/wrk.html)

[网址2](https://segmentfault.com/a/1190000041216715)

```
问题：make后
echo LuaJIT-2.1
LuaJIT-2.1
make: unzip: Command not found
make: *** [Makefile:82: obj/LuaJIT-2.1] Error 127
解决：https://blog.csdn.net/GMCN__/article/details/119491365
```



### 使用apache bench

[网址](https://www.cnblogs.com/nananana/p/8748941.html)

```
若测试百度则 ab -n 100 -c 20 http://www.baidu.com/path ,后面要加个path

输入 ab -n 100 -c 20 http://localhost:8080/jsrWeb/index.html
（-n发出100个请求，-c模拟20并发，相当100人同时访问，后面是测试url）

输入 ab -n 100 -c 20 http://localhost:8080/jsrAdminWeb/test?str=AA 
（传入一个参数）

输入 ab -n 100 -c 20 -T "text/plain" -p test.txt http://localhost:8080/jsrAdminWeb/test 
（传入多个参数，test.txt文件与ab.exe在同目录下，test.txt文件里写str1=AA&str2=BB）

输入 ab -n 100 -c 20 -T "text/plain" -p E:\DOWNLOAD\httpd-2.4.33-Win64-VC15\Apache24\test.txt http://localhost:8080/jsrAdminWeb/test 
（传入多个参数，test.txt文件与ab.exe不在同目录下，写入test.txt文件的全路径）
```



### win10安装内置Ubuntu系统

[网址](https://blog.csdn.net/WU9797/article/details/79489328)

[问题：WslRegisterDistribution failed with error: 0x800701bc](https://blog.csdn.net/qq_18625805/article/details/109732122)



### 使用ubuntu

```
win+R 输入bash
或找到Ubuntu，点击启动
用户名及密码 unitiny abc12345
```



### 安装make

[网址](https://blog.csdn.net/qq_49641239/article/details/121517925)



### windows和linux系统下测试端口连通性的命令

[网址](https://www.cnblogs.com/hchengmx/p/12344817.html)



### 路由追踪

```
tracert www.baidu.com
```



#### wsl连接window方法

例如 ubuntu

```
explorer.exe .
```







## 常用类

win + x 可打开任务管理器



## 问题

Microsoft Store显示网络连接错误 代码: 0x80131500

[网址](https://blog.csdn.net/weixin_42505757/article/details/123228038)