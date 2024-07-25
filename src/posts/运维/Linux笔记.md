---
icon: article
date: 2022-01-10
title: Linux笔记
category:
- 运维

tag:
- Linux
---

# Linux 笔记

## 语法：

### 文件

```
touch /tmp/aa abc
在/tmp/aa创建文件abc

cat etc/issue
查看文件信息

more etc/services 
查看更多信息，空格翻页

chmod u+x,o+w,g-r aa 
为aa文件user添加执行权限，other添加写入权限，group减少读取权限

chmod -R 777 /tmp/a 
/tmp/a目录下所有文件都开放全部权限

mv dockerFile docker-volume-text
重命名dockerFile为docker-volume-text
```



### 目录

```
ls(list) -lh  /tmp

查看tmp目录下文件信息

mkdir -p /tmp/bb/aa /tmp/bb/bb

同时创建多文件

pwd(print working directories)

打印当前目录

rmdir(remove directories) /tmp/bb

删除/tmp/bb的目录，此目录要无文件为空才可

cp(copy) -r /tmp/aa/dd /tmp/bb

复制/tmp/aa/dd 目录到/tmp/bb下

mv /tmp/aa/dd /tmp/bb

剪切/tmp/aa/dd 目录到/tmp/bb下

rm -rf(remove -rf强制删除目录 )

从删库到跑路

rmdir 删除目录

unzip abc.zip 解压文件

netstat -tunlp 查看端口
```



### 信息

```
ifconfig

查询配置网络信息

df

查看分区使用情况

clear   /  ctrl+l

清屏
```





## 知识点：

### 分区

最多建四个主分区，不管主分区多少，子分区编号都是从5开始

### 格式化

将分区空间分成一个个格子，每格4kb内存，利于数据存放有序

### 进入root

```
su root
```

### 强制退出

```
:q!
```

### 修改只读文件

[网址](https://blog.csdn.net/weixin_33868027/article/details/93154032?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&utm_relevant_index=2)

```
su root #进入管理者模式
vi a.txt #进入编辑
# 按i进入编辑模式，写好后按ESC退出进入命令模式，输入:wq保存并退出
```



### 查看本地网络

```
curl 127.0.0.1
```



## 功能

[修改nginx指向端口](https://www.bubaijun.com/page.php?id=222)

[后台运行程序](http://www.javashuo.com/article/p-rinineno-ne.html)

```
jobs 查看所有进程
bg 1  后台运行1程序
fg 1  前台运行1程序，之后可CTRL c 终止
```

[卸载mysql](https://blog.csdn.net/weixin_43102784/article/details/122696078)

[Nginx开放端口](https://www.csdn.net/tags/NtTacgysMTk0NTgtYmxvZwO0O0OO0O0O.html)

[关闭端口正在运行的进程](https://blog.csdn.net/fengsheng5210/article/details/79802866)



#### wsl连接window方法

例如 ubuntu

```
explorer.exe .
```



## 注意事项：

命令行更改的配置都是临时生效的