---
icon: article
date: 2022-01-10
title: Redis 进阶
category:
- 后端
- Redis

tag:
- Redis 进阶
---

## 知识

### 初识

![image-20221123212117483](D:\Typora\Markdown\后端\SQL\image-20221123212117483.png)

![image-20221123212940418](D:\Typora\Markdown\后端\SQL\image-20221123212940418.png)



### 通用命令

#### 获取配置

```
config get *
```



#### keys

![image-20221130105511581](D:\Typora\Markdown\后端\SQL\image-20221130105511581.png)



#### dbsize

![image-20221130105708566](D:\Typora\Markdown\后端\SQL\image-20221130105708566.png)



#### exists

![image-20221130105739123](D:\Typora\Markdown\后端\SQL\image-20221130105739123.png)



#### del

![image-20221130105803554](D:\Typora\Markdown\后端\SQL\image-20221130105803554.png)



#### 过期时间

![image-20221130105840647](D:\Typora\Markdown\后端\SQL\image-20221130105840647.png)



#### type

![image-20221130105905797](D:\Typora\Markdown\后端\SQL\image-20221130105905797.png)



#### 时间复杂度

![image-20221130105950833](D:\Typora\Markdown\后端\SQL\image-20221130105950833.png)



### 字符串命令

#### 自增类

可用于分布式id生成器

![image-20221130110813055](D:\Typora\Markdown\后端\SQL\image-20221130110813055.png)



#### set类

![image-20221130111401222](D:\Typora\Markdown\后端\SQL\image-20221130111401222.png)



#### mset类

![image-20221130111532777](D:\Typora\Markdown\后端\SQL\image-20221130111532777.png)



#### getset, append, strlen

![image-20221130111737965](D:\Typora\Markdown\后端\SQL\image-20221130111737965.png)



#### getrange

![image-20221130111903836](D:\Typora\Markdown\后端\SQL\image-20221130111903836.png)



### 哈希命令

储存对象

#### hget

![image-20221130164407329](D:\Typora\Markdown\后端\SQL\image-20221130164407329.png)



#### hexists,hlen

![image-20221130164540878](D:\Typora\Markdown\后端\SQL\image-20221130164540878.png)



#### hmset

![image-20221130164617023](D:\Typora\Markdown\后端\SQL\image-20221130164617023.png)



#### hgetall,hvals,hkeys

![image-20221130164831342](D:\Typora\Markdown\后端\SQL\image-20221130164831342.png)



#### hincrby

![image-20221130165319719](D:\Typora\Markdown\后端\SQL\image-20221130165319719.png)



### 列表命令

lpush,rpush,lpop,rpop,llen,lset

#### linsert

![image-20221130165611399](D:\Typora\Markdown\后端\SQL\image-20221130165611399.png)



#### lrem

等值删除

![image-20221130165726722](D:\Typora\Markdown\后端\SQL\image-20221130165726722.png)



#### ltrim

范围删除

![image-20221130165827313](D:\Typora\Markdown\后端\SQL\image-20221130165827313.png)



#### lrange

![image-20221130165927668](D:\Typora\Markdown\后端\SQL\image-20221130165927668.png)



#### lindex

![image-20221130165944675](D:\Typora\Markdown\后端\SQL\image-20221130165944675.png)



#### blpop

堵塞读取

![image-20221130170222259](D:\Typora\Markdown\后端\SQL\image-20221130170222259.png)



### 集合命令

元素不重复的数组

#### 交集

![image-20221201124120286](D:\Typora\Markdown\后端\SQL\image-20221201124120286.png)



#### sadd, srem

![image-20221201124200596](D:\Typora\Markdown\后端\SQL\image-20221201124200596.png)



#### scard,sismember,srandmember, spop,smembers

![image-20221201124239610](D:\Typora\Markdown\后端\SQL\image-20221201124239610.png)



### 有序集合

![image-20221201124740917](D:\Typora\Markdown\后端\SQL\image-20221201124740917.png)



#### zadd,zrem

![image-20221201124936896](D:\Typora\Markdown\后端\SQL\image-20221201124936896.png)



![image-20221201124951859](D:\Typora\Markdown\后端\SQL\image-20221201124951859.png)



#### zscore,zincrby,zcard

![image-20221201125036949](D:\Typora\Markdown\后端\SQL\image-20221201125036949.png)

![image-20221201125039750](D:\Typora\Markdown\后端\SQL\image-20221201125039750.png)

![image-20221201125110414](D:\Typora\Markdown\后端\SQL\image-20221201125110414.png)



zrange,zrangebyscore

![image-20221201125209830](D:\Typora\Markdown\后端\SQL\image-20221201125209830.png)

![image-20221201125232566](D:\Typora\Markdown\后端\SQL\image-20221201125232566.png)



#### zremrangebyrank

![image-20221201125257947](D:\Typora\Markdown\后端\SQL\image-20221201125257947.png)



### 慢查询

记录命令的执行时间

![image-20221201130147774](D:\Typora\Markdown\后端\SQL\image-20221201130147774.png)

![image-20221201130218293](D:\Typora\Markdown\后端\SQL\image-20221201130218293.png)



![image-20221201130335322](D:\Typora\Markdown\后端\SQL\image-20221201130335322.png)



### pipeline

流水线，携带多条命令，通过一次网络发送，让服务器执行多条命令，然后返回结果。减少网络多次请求的耗时。

非原子操作，会将多个命令拆解为子命令插入执行队列中。



### 发布订阅

![image-20221201133044164](D:\Typora\Markdown\后端\SQL\image-20221201133044164.png)



![image-20221201133058919](D:\Typora\Markdown\后端\SQL\image-20221201133058919.png)



![image-20221201133203006](D:\Typora\Markdown\后端\SQL\image-20221201133203006.png)



### 位图

更改比特

![image-20221201133614121](D:\Typora\Markdown\后端\SQL\image-20221201133614121.png)

![image-20221201133721902](D:\Typora\Markdown\后端\SQL\image-20221201133721902.png)



![image-20221201133745221](D:\Typora\Markdown\后端\SQL\image-20221201133745221.png)

![image-20221201133831305](D:\Typora\Markdown\后端\SQL\image-20221201133831305.png)

![image-20221201133909091](D:\Typora\Markdown\后端\SQL\image-20221201133909091.png)



### hyperloglog

极少内存去统计独立用户数

![image-20221201134432065](D:\Typora\Markdown\后端\SQL\image-20221201134432065.png)



### GEO

经纬度

![image-20221201135102534](D:\Typora\Markdown\后端\SQL\image-20221201135102534.png)



![image-20221201135110826](D:\Typora\Markdown\后端\SQL\image-20221201135110826.png)

![image-20221201135309142](D:\Typora\Markdown\后端\SQL\image-20221201135309142.png)

![image-20221201135330480](D:\Typora\Markdown\后端\SQL\image-20221201135330480.png)



### 持久化

#### RDB

![image-20221202171757866](D:\Typora\Markdown\后端\SQL\image-20221202171757866.png)



![image-20221202171828036](D:\Typora\Markdown\后端\SQL\image-20221202171828036.png)



用子线程去备份，异步

![image-20221202172242857](D:\Typora\Markdown\后端\SQL\image-20221202172242857.png)

  

#### RDB问题

![image-20221202174108729](D:\Typora\Markdown\后端\SQL\image-20221202174108729.png)



没备份就宕机会丢失数据

![image-20221202174148056](D:\Typora\Markdown\后端\SQL\image-20221202174148056.png)



#### AOF

每执行一条命令写入aof文件中

##### always, everysec,no

![image-20221202174646462](D:\Typora\Markdown\后端\SQL\image-20221202174646462.png)

![image-20221202174743014](D:\Typora\Markdown\后端\SQL\image-20221202174743014.png)



根据操作系统来决定是否要刷新缓冲

![image-20221202174813420](D:\Typora\Markdown\后端\SQL\image-20221202174813420.png)



#### AOF重写

将写入的命令优化

![image-20221202175133404](D:\Typora\Markdown\后端\SQL\image-20221202175133404.png)

![image-20221202175159635](D:\Typora\Markdown\后端\SQL\image-20221202175159635.png)



主动重写，异步fork进程 

![image-20221202175255980](D:\Typora\Markdown\后端\SQL\image-20221202175255980.png)



aof_buf,aof_rewrite_buf用于在重写期间缓冲新的命令，然后写入aof中

![image-20221202175446484](D:\Typora\Markdown\后端\SQL\image-20221202175446484.png)



#### RDB和AOF策略

![image-20221202195321179](D:\Typora\Markdown\后端\SQL\image-20221202195321179.png)

![image-20221202195434394](D:\Typora\Markdown\后端\SQL\image-20221202195434394.png)

![image-20221202195526124](D:\Typora\Markdown\后端\SQL\image-20221202195526124.png)



### 子进程开销和优化

![image-20221202201215834](D:\Typora\Markdown\后端\SQL\image-20221202201215834.png)

![image-20221202201301479](D:\Typora\Markdown\后端\SQL\image-20221202201301479.png)



### 主从复制

变为从节点会清除本地数据

![image-20221202202159325](D:\Typora\Markdown\后端\SQL\image-20221202202159325.png)

 

#### 全量复制

1. 从通知主节点要全量复制
2. 主节点发送runId和偏移量
3. 从节点保存信息
4. 主节点bgsave异步保存RDB
5. 发送RDB给从节点
6. 发送最新命令的缓存给从节点
7. 从节点刷盘老的数据，加载RDB和缓存

 ![image-20221203151547958](D:\Typora\Markdown\后端\SQL\image-20221203151547958.png)

![image-20221203152402274](D:\Typora\Markdown\后端\SQL\image-20221203152402274.png)



#### 部分复制

网络抖动丢失会损失部分数据，部分复制可减少资源开销

1. 网络连接后，从节点发送自身偏移量和runId给主节点
2. 若主从偏移量差距较小，则主节点发送部分数据给从节点

![image-20221203152545389](D:\Typora\Markdown\后端\SQL\image-20221203152545389.png)



#### 常见故障

![image-20221203154116457](D:\Typora\Markdown\后端\SQL\image-20221203154116457.png)

![image-20221203154222100](D:\Typora\Markdown\后端\SQL\image-20221203154222100.png)

![image-20221203154327571](D:\Typora\Markdown\后端\SQL\image-20221203154327571.png)

![image-20221203154612144](D:\Typora\Markdown\后端\SQL\image-20221203154612144.png)



### sentinel

![image-20221204145617706](D:\Typora\Markdown\后端\SQL\image-20221204145617706.png)



#### 配置

monitor:监听的主节点，2个sentinel发现故障时开启故障转移

down..:3毫秒ping不通则故障

paraller-syncs:并发还是串行复制

failover-timeout:故障转移时间

![](D:\Typora\Markdown\后端\SQL\image-20221204150119516.png)



#### 客户端高可用

客户端通过发布订阅感知sentinel

![image-20221204155705719](D:\Typora\Markdown\后端\SQL\image-20221204155705719.png)

![image-20221204155713712](D:\Typora\Markdown\后端\SQL\image-20221204155713712.png)

客户端验证master节点

![image-20221204155727473](D:\Typora\Markdown\后端\SQL\image-20221204155727473.png)



master变化后通过订阅得知

![image-20221204155803940](D:\Typora\Markdown\后端\SQL\image-20221204155803940.png)



#### 工作流程 

master节点挂掉期间，会被sentinel感知到，当多个sentinel都发现后，便推选一位sentinel作为执行者，执行一系列修复操作，把旧master标识为下线，挑选某个slave节点为新的master，把其余slave指向新的master。让新的master节点复制旧master内容，然后代替旧master。而旧master复活后会更改为slave，指向新master,并复制新master内容。



#### 定时任务

1秒ping下其他sentinel和redis节点，作心跳检测

2秒通过主节点的发布订阅来与其它sentinel节点交流，交换信息

10秒通过sentinel对master和slave执行info，来发现slave节点和确定主从关系

![image-20221207160857886](D:\Typora\Markdown\后端\SQL\image-20221207160857886.png)



#### 主客观下线

单个sentinel感知有局限性，多数sentinel感知才客观

![image-20221207161438519](D:\Typora\Markdown\后端\SQL\image-20221207161438519.png)



#### 领导者选举

![image-20221207161757858](D:\Typora\Markdown\后端\SQL\image-20221207161757858.png)



#### 故障转移

![image-20221207162507605](D:\Typora\Markdown\后端\SQL\image-20221207162507605.png)

![image-20221207162846076](D:\Typora\Markdown\后端\SQL\image-20221207162846076.png)



### cluster

#### 虚拟槽

每个节点负责一个范围，当输入keys通过取余后，会发送给任意node节点。节点先查看是否为自己负责的槽，是则搜索返回结果，否则转发给对应槽的节点。

![image-20221211100811178](D:\Typora\Markdown\后端\SQL\image-20221211100811178.png)

![image-20221211101748153](D:\Typora\Markdown\后端\SQL\image-20221211101748153.png)



#### 配置和开启

![image-20221211101950283](D:\Typora\Markdown\后端\SQL\image-20221211101950283.png)

![image-20221211102037098](D:\Typora\Markdown\后端\SQL\image-20221211102037098.png)

![image-20221211102259099](D:\Typora\Markdown\后端\SQL\image-20221211102259099.png)

![image-20221211102323726](D:\Typora\Markdown\后端\SQL\image-20221211102323726.png)

![image-20221211102358702](D:\Typora\Markdown\后端\SQL\image-20221211102358702.png)

可通过ruby脚本trib命令式部署