---
icon: article
date: 2022-01-10
title: Docker笔记
category:
- 运维

tag:
- Docker
---

# 使用

[教程](https://www.bilibili.com/video/BV1og4y1q7M4)

[教程笔记](https://blog.csdn.net/huangjhai/article/details/118854733)

[官网](https://www.docker.com/)

[文档](https://docs.docker.com/)

[仓库地址](https://hub.docker.com/search?type=edition&offering=community)

### 安装

[成功解决gpg: 找不到有效的 OpenPGP 数据](https://blog.csdn.net/bean_business/article/details/112278504)

[安装docker](https://www.jianshu.com/p/8200a3a50806)



# 命令

### 查看版本

```
docker version
```

### 查看镜像信息

```
docker info 
```

### 查看命令帮助

```
docker 命令 --help
```

### 查看容器信息

```
docker inspect nginx
docker inspect -f {{.Config.Hostname}} nginx01 # 获取容器id
docker inspect -f {{.Name}} nginx01			   # 查看别名
docker inspect -f {{.NetworkSettings.Ports}} nginx01 # 查看端口号
docker inspect -f {{.NetworkSettings.IPAddress}} nginx01 # 查看IP
```

### 查找镜像

```
docker search mysql 查找mysql镜像
```

### 下载镜像

```
docker pull mysql:5.7 指定下载mysql 5.7版本，否则默认lastest
```

### 删除镜像

```
docker rmi -f $(docker image -aq)或docker rm -f $(docker ps -aq) 删除所有镜像
```

### 删除容器

[网址](https://blog.csdn.net/CSDN_duomaomao/article/details/78587103)

```
#删除单个容器
docker rm 容器id

#显示所有的容器，过滤出Exited状态的容器，取出这些容器的ID，
docker ps -a|grep Exited|awk '{print $1}'

#查询所有的容器，过滤出Exited状态的容器，列出容器ID，删除这些容器
docker rm `docker ps -a|grep Exited|awk '{print $1}'`
```



### 运行镜像

```
docker run -it centos /bin/bash 运行centos镜像

-d 后台运行
--name 容器命名
-p 宿主机端口：容器内部端口(即把80端口暴露给3344端口，用户能通过3344端口访问80端口)
docker run -d --name nginx01 -p 3344:80 nginx
```

![image-20211229153729735](/typora-user-images/image-20211229153729735.png)

### 列出运行的容器

```
docker ps 列出所有正在运行的docker容器
```

![image-20211229154807282](/typora-user-images/image-20211229154807282.png)

### 容器启动和停止

```dockerfile
docker start 容器id   # 启动容器
docker restart 容器id # 重启容器
docker stop 容器id 	# 停止正在运行的容器
docker kill 容器id 	# 停止正在运行的容器
```

### 重命名容器

```
docker rename 原来名称 要修改的名称
```



### 退出容器

```
exit 停止并退出容器
ctrl+p+q 按键 容器不停止退出
```

### 显示日志

```
docker logs -f -t --tail 10 2a29f97d5734
```

### 查看进程信息

```
docker top
```

### 进入当前正在运行的容器

```
docker exec -it 2a29f97d5734  /bin/bash # 进入容器后新建一个终端
docker attach 容器id /bin/bash  # 进入容器当前执行的终端
```

### 查看cpu配额

```
docker stats
```

### 提交容器（快照）

```
docker commit -m="add webapps" -a="unitiny" 89b435364248 nginx02:1.0
```

### 挂载数据卷

```shell
docker run -it -v /home/abc/Desktop/docker/data:/home centos /bin/bash # 指定路径挂载
docker run -it -v /home centos /bin/bash	# 匿名挂载
docker run -it -v abc:/home centos /bin/bash  # 具名挂载 -v 宿主机:容器
docker run -it -v abc:/home:ro(rw) centos /bin/bash # ro:readonly 只能外部修改 只读 rw:读写 
```



### 查看数据卷信息

```
docker volume ls # 查看所有数据卷
docker volume inspect abc # 查看abc具体挂载路径
```



### 压缩包

```
docker save
docker load
```



### 查看docker网络

```
docker network ls
```

### 创建network网络

```
docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet
```



### 复制文件到docker中

 **docker cp 宿主机的本地地址 容器名/容器ID：容器路径**

而与该容器挂载的外部文件夹也有了该文件

```
docker cp /root/666.txt 460b22f78261:/home/
```



# 功能

### 拷贝镜像目录并快照

```dockerfile
mkdir webapps 		# 新建文件夹
cp -r bin/* webapps # 拷贝当前目录的bin目录下所有文件到webapps里
exit				# 退出容器
# docker commit -m="提交信息" -a="作者" 容器id 容器名称：版本号
docker commit -m="add webapps" -a="unitiny" 89b435364248 nginx02:1.0
```

### 复制镜像并修改名称和版本号

```
# docker tag 镜像id 要修改的镜像名：要修改的版本号
docker tag feb5d9fea6a5 helloworld:2.0
```

### 查找所有容器

```
docker ps -a # 查找所有容器，不加-a默认为运行的容器
# 查找所有容器ip
docker inspect -f '{{.Name}} - {{range .NetworkSettings.Networks}}
{{.IPAddress}}{{end}}' $(docker ps -aq)
```

#### 启动并修改nginx

[网址](https://www.cnblogs.com/hl15/p/13686515.html)

### 使用mysql并用navicate连接

[网址](https://www.runoob.com/docker/docker-install-mysql.html)

[navicate连接](https://jingyan.baidu.com/article/11c17a2caf37bab446e39de1.html)

```
2 获取docker主机 IP
$ ifconfig | grep inet
```



### 运行MySQL

![image-20211231143632876](/typora-user-images/image-20211231143632876.png)

### 挂载MySQL

```
docker run -d -p 3310:3306 -v /home/abc/Desktop/docker/mysql/conf:/etc/mysql/conf.d -v /home/abc/Desktop/docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql
```

### 修改容器挂载位置

[网址](https://blog.csdn.net/man_to_home/article/details/105564047)

```
用commit即可
```

### 自定义创建镜像

使用docker build运行dockerfile

```
vim dockerFile

写入
FROM centos

VOLUME ["volume1","volume2"] # 匿名挂载
 
CMD echo "---end---"
CMD "/bin/bash"

docker build -f dockerFile -t myDockerfile(前面不加/路径,名称要小写) .

#查看
docker images
```

### 容器间挂载

```
docker run -it --name  docker02 --volumes-from docker01 mydockerfile /bin/bash
```

### 自定义centos容器

```
# vim mydockerfile-centos 创建镜像文件
FROM centos

MAINTAINER unitiny<2069234934@qq.com>
ENV MYPATH /user/local # 定义变量
WORKDIR $MYPATH # 进入后的目录，默认为/

# 下载所需镜像
RUN yum -y install  vim 
RUN yum -y install  net-tools

# 暴露端口
EXPOSE 80

CMD echo $MYPATH
CMD echo "------end------"
CMD /bin/bash


# 运行
docker build -f mydockerfile-centos -t mycentos:1.0 .
```

### 查看host配置

```
进入容器后
cat /etc/hosts
```



### 创建redis集群

```
1 构建六个redis配置
for port in $(seq 1 6);\
do \
mkdir -p /mydata/redis/node-${port}/conf
touch /mydata/redis/node-${port}/conf/redis.conf
cat << EOF>/mydata/redis/node-${port}/conf/redis.conf
port 6379
bind 0.0.0.0
cluster-enabled yes
cluster-node-timeout 5000
cluster-announce-ip 172.38.0.1${port}
cluster-announce-port 6379
cluster-announce-bus-port 16379
appendonly yes
EOF
done

2 运行六个redis容器(此脚本能运行但容器会自动退出，未解决，只能分批一个个运行)
要先挂载才能使用redis-server /etc/redis/redis.conf
(要加这个不然redis不运行)
#!/bin/bash 
for port in $(seq 1 6); \
do \
docker run -p 637${port}:6379 -p 1637${port}:16379 --name redis-${port} \
-v /mydata/redis/node-${port}/data:/data \
-v /mydata/redis/node-${port}/conf/redis.conf:/etc/redis/redis.conf \
-d --net redis --ip 172.38.0.1${port} redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf \ 
done

3 创建集群
redis-cli --cluster create 172.38.0.11:6379 172.38.0.12:6379 172.38.0.13:6379 172.38.0.14:6379 \
--cluster-replicas 1

4 查看信息
先redis-cli -c
cluster info
cluster nodes

5 测试
在redis中
set a b
get a
之后docker停掉为master的容器
再get a仍有结果，因为有后备redis替换上了，此为集群
再cluster nodes 发现之前master的变fail了，后备的变master了
```



### 本地文件上传到docker

```
docker cp 本地文件路径 ID全称:容器路径
```



# 知识点

### 数据卷容器

```
在容器中存放数据卷，可与多个容器间同步（双向拷贝）
```

### cmd和entrypoint

```
cmd 是固定参数的命令
entrypoint 用户使用时可在命令后追加参数
如：docker run 容器id -l
cmd若无这命令会报错
entrypoint则会把参数-l追加到原设置的run命令后
```

### docker网络

启动时会开一个docker0 IP，为所有运行的容器提供一个公共的服务器地址，不同容器之间可通过该桥梁连接，实现互相通信。

每开一个容器会出现成对的ip，如图的11和10

![image-20220102222523227](/typora-user-images/image-20220102222523227.png)



### workdir

启动容器后所在的目录，默认是/



### dockerfile

每次run 命令默认在workdir执行，无论前面是否cd，可以用&&来连续cd目录执行下一步动作

```
EXPOSE仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射
使用docker run -P 时，会自动随机映射 EXPOSE 的端口
要建立端口映射，使用docker run -p 8080:80
```



# 问题

### 没有运行的容器，无法查看日志

```
"docker logs" requires exactly 1 argument.
See 'docker logs --help'.

Usage:  docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

```

### 无法发布镜像

```
abc@abc-PC:~$ docker push firstimages/mycentos:1.0
The push refers to repository [docker.io/firstimages/mycentos]
An image does not exist locally with the tag: firstimages/mycentos

解决：重命名镜像tag，增加firstimages/mycentos这个别名
docker tag 镜像id firstimages/mycentos:1.0
docker push 镜像id firstimages/mycentos:1.0
```



error during connect: This error may indicate that the docker daemon is not running.: Get "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/containers/json": open //./pipe/docker_engine: The system cannot find the file specified.

[网址](https://blog.csdn.net/tangcv/article/details/112238084?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-112238084-blog-125177509.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-112238084-blog-125177509.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=1)



### docker desktop 一直starting

登录下即可