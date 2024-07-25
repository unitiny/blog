---
icon: article
date: 2022-01-10
title: MySQL 笔记
category:
- 后端
- SQL

tag:
- MySQL
---

# MySQL 笔记





## 使用

[MySQL安装教程](https://www.cnblogs.com/winton-nfs/p/11524007.html)

[Sqlyog 安装教程](https://blog.csdn.net/lihua5419/article/details/73881837/)

[phpMyAdmin 安装教程]( https://www.php.cn/jishu/mysql/409664.html)



启动 mysql -u root -p  要有设置环境变量后

ctrl+c 强行终止进程



## 语法 	

### 表格相关

- show databases 展示数据

- show create table inventory; 展示创建表inventory的sql语句

- use school 使用学校这个表

- show tables 展示所有学校表里的表格名

- describe student 展示表格名为student 的数据

- create databases 名  创建表单

- drop 删除表格

- 修改字段格式(了解)

    ```mysql
    alter table goodstudent1 modify age varchar(10);
    ```

    

### 插入数据

插入表格goodstudent1的name和sex字段多个值

```
INSERT INTO `goodstudent1`(`name`,`sex`) VALUES('张山','男'),('阿瑟','女'),('kk','女');
```

### 更新数据

```mysql
UPDATE goodstudent SET name='张狂' WHERE id=2;
UPDATE goodstudent SET sex='男' WHERE id<15;
UPDATE student SET birthday=CURRENT DATE WHERE Id BETWEEN 1 AND 2
UPDATE student SET age=12 WHERE id!=3 AND hobby='dfsa';
```

### 删除数据

删除chat表中符合 from='小李' 和 to='小明'条件的字段

```mysql
DELETE FROM chat WHERE `from`='小李' AND `to`='小明'
```

### 查询数据

 格式： select 列名 as 改名 from 表

####  **模糊查询**

- like   两种写法  返回值为1或零

```mysql
// 查找subject表的subjectname字段其中是否含有’数学‘这一关键字
SELECT `subjectname` LIKE '%数学%' FROM `subject`  
SELECT `subjectname` FROM `subject` WHERE `subjectname` LIKE '%数学%'
// 对整型数据的模糊搜索
SELECT * FROM fix_info WHERE CAST(fix_id as VARCHAR(19)) LIKE '%{$name}%';  
```

- in 要全名

```mysql
SELECT `subjectname` FROM `subject` WHERE `subjectname` IN ('Java程序设计-1');
```

#### 联表查询

inner join 只要找到符合条件的都写上

#### 升降序

order by 字段名 DESC/ASC  降/升

#### 分页

limit 10，5； 从第十条数据开始，每页五条



#### if函数

```
IF(express, 1, 2) # 如果express为true，返回1，否则返回2.可嵌套使用if
```



#### when函数

```
case when employee_id%2=1 and name not like "M%" then salary
    else 0
end    
# 适用于多条件批量更新操作
```



#### mod函数

```
mod(num, 2) = 1 # 即num % 2 == 1
```



#### left函数

```
left(name, 1) != "M" # 判断name的第一个字母不为M
```



#### case函数

```
SELECT employee_id,
(CASE WHEN MOD(employee_id,2)!=0 AND LEFT(name,1)!='M' THEN salary
     WHEN MOD(employee_id,2)=0 OR LEFT(name,1)='M' THEN 0
END) bonus
FROM Employees
ORDER BY employee_id
```



#### regexp函数

```
regexp "^[^M]" # 正则，匹配首字母非M的元素
```



#### upper, lower函数

```
转换大小写
```



#### length函数

```
查询字符串长度
```



#### concat函数

```
连接两字符串
```



#### substring函数

```
SUBSTRING(str, begin, end) # 截取字符串 begin并不是下标
```



#### group_concat() 函数

```
# 拼接字符串
GROUP_CONCAT(DISTINCT score ORDER BY score DESC SEPARATOR ";")
```



#### datediff() 函数

```
SELECT DATEDIFF('2007-12-31 23:59:59','2007-12-30'); # 计算日期差值，结果为1
```



### 其他

#### explain 

explain + sql语句，解释sql的执行的详细数据



## 功能

### 设置日期格式

```
年月日        类型 date
年月日时分秒   类型 datetime
时分秒        类型 time
```



## 问题

- 1064：语法错误

观察,;``是否使用正确

- 1062：Duplicate entry '2' for key 'goodstudent1.PRIMARY' 

 id重复 把表格改为id自增，且不用插入id，系统自动配给。

- 登录报错

[看看别人怎么说](https://blog.csdn.net/lihua5419/article/details/80394716)

-  ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061)  无法连接数据库

[看看别人怎么做](https://blog.csdn.net/chen97_08/article/details/81484286)

- 执行sql语句但不更新数据库

[看看别人怎么办]( https://blog.csdn.net/qq_28602957/article/details/51019267)

- 错误：undefined function xxx()


修改php.ini相关扩展，一般是删除前面；分号

[看看别人怎么弄](https://zhidao.baidu.com/question/938079074590093492.html)

- You can't specify target table 'p1' for update in FROM clause

	```
	不能在select表后更新或删除表，可能导致select得到的表随着更新而改变了。
	可以再select外一层再加一层select，此时得到的是一张新的表，不用担心源表修改而引起查询表的变化
	```

	







## 知识点

[redis和MySQL区别](https://blog.csdn.net/qq_38311489/article/details/84255532)

预编译为什么能防止sql注入

```
预编译方式能防范sql注入的原理是:在sql参数未注入之前，提前对sql语句进行预编译，
后面注入的参数将不会再进行sql编译。即后面注入进来的参数系统将不会认为它会是一条SQL语句，
而默认其是一个参数。由此就知道为什么预编译可以防止sql注入了。
```



group by问题

```
使用 group by 分组后,查询的列表将按照主键的默认 asc 顺序排序,
使用 order by 只能对分组后的列表起作用,原因是 order by 的优先级低于 group by
```



## 注意

命令符所有的语句都要分号结尾