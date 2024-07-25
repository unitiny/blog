---
icon: article
date: 2022-01-10
title: Python笔记
category:
- 后端
- Python

tag:
- Python
---



# Python笔记



## 使用：

[pycharm激活码](https://www.bilibili.com/read/cv9195219)

[激活码2](https://www.bilibili.com/read/cv10106292/)

```cmd
# 创建django项目 

django-admin.py startproject projectname
```

[教程](https://www.bilibili.com/video/BV1wD4y1o7AS)

## 语法：

### 输入输出：

```
print()
input()
```





### 运算：

```python
Python 3.4.1
3 / 2 = 1.5
3 // 2 = 1
3 / 2.0 = 1.5
3 // 2.0 = 1.0
```

I like pyI like pyautogui

I like python too

Good like pyautogui.



### 循环：

```
# 简便
for item in range(1, 10):
    sum += item
```

### 字符串：

三引号字符串可以换行书写

有居中，左右对齐处理函数

有判断是否全为数字或字母的函数

也可以进行切片操作

```python
str in name  关键字str是否在name中

#查询
str.index()
str.find()

#分割
lst2 = 'Python| Worl|d'
lst4 = lst2.split(sep='|', maxsplit=1)  #分割符，最大分割数
#结果 ['Python', ' Worl|d']

#替换和加入
lst2 = 'Python World'
lst3 = lst2.replace('Python', 'Java')
print(lst3, '|'.join(lst2))
#结果 Java World P|y|t|h|o|n| |W|o|r|l|d

#strip("/") 去除字符串的/
```

### 列表：

```python
extend([列表]) ，为数组添加多个元素

str.insert(1,variable),插入variable到数组1位置，

str.remove(variable)  删除元素

del str[1]  删除1位置的元素 

str.pop() 具体找百度

r = range(10) 生成[1, 3, 5, 7, 9]
print(list(r))

#查找索引值及切片
lst = list(['hello', 'world', 'abc', '456']) 
print(lst.index('world', 1, 5)) #1
print(lst[1:5:2]) #['world', '456'] 

#添加元素
lst = list(['hello', 'world', 'abc', '456'])
list1 = ['末尾至少增加', '一个元素']
lst.append('末尾增加')
lst.extend(list1)
lst.insert(1, '随意插入位置')
print(lst)	
#结果['hello', '随意插入位置', 'world', 'abc', '456', '末尾增加', '末尾至少增加', '一个元素']


#删除元素
lst = list(['hello', 'world', 'abc', '456'])
lst.remove('abc')
lst.pop(1) #删除指定索引位置，默认末尾
print(lst)
#结果 ['hello', '456']
list.clear() #清空列表
list.del() #删除后要重新定义

#排序
lst.sort()

#集合 去重复元素，结果无序输出
lst = [1, 2, 2, 3, 6] 
lst1 = set(lst)
lst2 = 'Python World'
lst3 = set(lst2)
print(lst1, lst3)
#结果 {1, 2, 3, 6} {'h', 'n', 'P', 'y', 'o', ' ', 'r', 'l', 't', 'W', 'd'}

# a[-1]表示数组中最后一位，a[:-1]表示从第0位开始直到最后一位，a[::-1]表示倒序，从最后一位到第0位。

# 定义长度列表    
p=[0]*n
```

[关于Python数组中-1的用法](https://blog.csdn.net/weixin_44457013/article/details/88097343)



### 字典

```python
Python json 模块dumps、dump、loads、load的使用
json.dumps将python对象格式化成json字符（将dict转化成str）
json.loads将json字符串解码成python对象（将str转化成dict）
json.dump()函数的使用，将json信息写进文件
json.load()函数的使用，将读取json信息

del self.dict[key] # 删除字典元素
```



### 函数：

```python
# 输入函数
var1=input('提示语')

# 类型转化
int(),str(),float() 


# 可变的位置参数	不确定实参数数量时使用
def fun(*arg):
    print(arg)
fun(10)
fun(10, 20, 30)
# 可变的关键字参数
def func(**arg):
    print(arg)
func(a=40)
func(a=40, b=60, c=80)
#结果 
(10,)
(10, 20, 30)
{'a': 40}
{'a': 40, 'b': 60, 'c': 80}


# 将实参解析分配到形参 如列表 字典
def fun(a, b, c):
    print('a=', a)
    print('b=', b)
    print('c=', c)
def func(a=10, b=20, c=30):
    print('a=', a)
    print('b=', b)
    print('c=', c)
lst = [10, 90, 8]
lst1 = {'a': 10, 'b': 20, 'c': 30}
fun(*lst)
func(**lst1)
#结果
a= 10
b= 90
c= 8
a= 10
b= 20
c= 30
```



### 类：

```python
# 创建
class Student:
    Sname = '大帅'

    # 初始化
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.__sex='男'  #私有属性

    # 实例方法
    def eat(self):
        print('实例方法')

    # 静态方法
    @staticmethod
    def learn():
        print('静态方法')

    # 类方法
    @classmethod
    def action(cls):
        print('类方法')

#使用
stu = Student('张三', 19)
stu.eat()
stu.learn()
stu.action()
print(stu.name, stu.age)
print(stu.__dict__) #类的属性
print(stu.__class__) #输出所属类
print(stu.__bases__) #实例对象的父类
#调用父类
super().father.info() #调用父类father的info方法 
#特殊方法
__len__() 通过重写__1en__()方法,让内置函数1en()的参数可以是自定义类型 
__add__() 通过重写__add__()方法,可使用自定义对象具有"+"功能 
__new__() 用于创建对象 
__init__() 对创建的对象进行初始化

```



### 模块：

```python
# 导入
import math #from math import pi,ceil
print(math.pi)
print(math.ceil(9.001))
```

![image-20210904094915194](/typora-user-images/image-20210904094915194.png)



### 文件：

![image-20210904100928772](/typora-user-images/image-20210904100928772.png)

```python
# os
import os

os.system('notepad.exe')
os.system('calc.exe')
os.startfile('C:\\Users\\20692\\Desktop\\QQ - 快捷方式.lnk')
```

![image-20210904110816079](/typora-user-images/image-20210904110816079.png)

![image-20210904111356407](/typora-user-images/image-20210904111356407.png)



### 其他：

```txt
type(variable) 输出变量类型 

isinstance(variable,int) 判断变量与右边数据类型是否匹配

a is b 判断标识符id是否一致,比较的是空间地址，更为严谨

not 相当于！,python中没有!

[]列表  {}字典	()元组 

encode() 编码		decode() 解码

Python异常处理机制：try ... except ... else ... finally ...

map() 会根据提供的函数对指定序列做映射。
第一个参数 function 以参数序列中的每一个元素调用 function 函数，
返回包含每次 function 函数返回值的新列表。
```



## 功能：

```python
d = dict(eval(item))  # 将字符串转化为字典
eval('pow(2,2)') 	#结果4，eval() 函数用来执行一个字符串表达式，并返回表达式的值。
dict()		#转化字符串为字典

#按学号降序排序
student_new.sort(key= lambda x:int(x['stu_id']),reverse=asc_or_desc_bool)
```

### 打包生成exe文件：

[教程](https://www.bilibili.com/video/BV1wD4y1o7AS?p=145&spm_id_from=pageDriver)

### pip升级包

```
pip install --upgrade package_name
```



## 问题：

### 解决cmd python -v 没有版本信息输出问题

[网址](https://blog.csdn.net/weixin_43983286/article/details/103988748)

### pip不存在：

[网址](https://jingyan.baidu.com/article/a3f121e486ff87fc9052bbe8.html)

### 编码错误：

报错 

SyntaxError: Non-UTF-8 code starting with ‘x/90’

解决  

1 文件首行添加\#coding=utf-8

2 更改文件名，不知原理但能有效

### 变量赋值：

报错

local variable 'a' referenced before assignment

解决

[网址](https://blog.csdn.net/qq_38161040/article/details/87918349)

### 输入问题：

报错

ValueError: invalid literal for int() with base 10: ''

代码：

```python
choose = int(input('请选择：'))
```

原因：

输入了非数字字符串，而int()只能转化数字字符串为整数

解决：

去掉int,或注意输入

### 字典使用问题：

报错：TypeError: string indices must be integers, not str

解决：

[网址](https://blog.csdn.net/outman_1921/article/details/109560307)

### 使用类方法报错self参数未填

报错：TypeError: delete_url() missing 1 required positional argument: 'self'

原因：使用类时漏了括号，于是不会默认传递参数self

```python
url_data.get_urls = DealData.delete_url(data=url_data.get_urls) #问题代码
url_data.get_urls = DealData().delete_url(data=url_data.get_urls) #需要加括号
```

### 文件操纵使用encoding报错

报错：ValueError: binary mode doesn't take an encoding argument

原因：https://blog.csdn.net/qq_41752647/article/details/99976720



## 注意：

 str=r”d:\ndfa\aa” 加上r可以对所有\转义

使用random 需要引入库 import random

元组和列表相似，只是里边元素不能修改

/ 整数除法  // 浮点数除法

函数返回值多个时，返回值类型是元组

 写入文件中要注意字符串化，提取后要记得转化为需要的格式

 判断== 是需要数据类型也相同的

 

 

 

 

 

 

 

 

错误：

项目区变黄块，把idea文件夹删了重启pycharm