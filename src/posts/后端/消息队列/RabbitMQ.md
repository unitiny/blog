---
icon: article
date: 2022-01-10
title: RabbitMQ
category:
- 后端
- 消息队列

tag:
- RabbitMQ
---

## 知识点

### 主流消息队列

rocketMQ：阿里开发，经受双十一的考验

kafka:多用于大数据，有低出错几率

![image-20230327163939689](./image-20230327163939689.png)



RabbitMQ：最主流

![image-20230327164211532](./image-20230327164211532.png)



### AMQP协议

- Broker：代表rabbitMQ中间件
- Host: 虚拟机，隔绝环境
- Connection: 与生产者消费者的TCP连接
- Channel: 每个线程都会创建一个管道

![image-20230327164330654](./image-20230327164330654.png)

![image-20230327164719176](./image-20230327164719176.png)

![image-20230327164809057](./image-20230327164809057.png)



### Exchange交换机

![image-20230327164918617](./image-20230327164918617.png)



#### Direct

直接交换机，只发到对应Key的队列

![image-20230327165034096](./image-20230327165034096.png)



#### Fanout

扇形展开，相当于广播

![image-20230327165233431](./image-20230327165233431.png)



#### Topic

有路由匹配

![image-20230327172102465](./image-20230327172102465.png)

![image-20230327172046520](./image-20230327172046520.png)



![image-20230327172024607](D:\Typora\Markdown\后端\消息队列\image-20230327172024607.png)