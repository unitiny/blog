---
icon: article
date: 2022-01-10
title: Python爬虫
category:
- 后端
- Python

tag:
- Python爬虫
---

# Python 爬虫

## 使用：

[教程](https://www.bilibili.com/video/BV1wD4y1o7AS)



## 语法：

### 正则表达式

```python
# findall匹配所有的字符
lst = re.findall(rep, str1)
print(lst)

# finditer迭代器
lst1 = re.finditer(rep, str1)
for i in lst1:
    print(i.group())
    
# compile预加载
obj = re.compile(r"\d+")
```

### 三种爬虫方式：

正则表达式，BeautifulSoup，Xpath

### 字符串处理：

#### 字符串拼接：

```python
title = div.xpath("div/div/a[2]/div[2]/div[2]/p/text()")
title = "sass".join(div.xpath("div/div/a[2]/div[2]/div[2]/p/text()"))
#['软件开发定制', '移动UI设计仓储物流软件数据抓取IT运维'] 
#软件开发定制sass移动UI设计仓储物流软件数据抓取IT运维
```

#### 字符串从右边开始分割：

```python
src.rsplit('.',1)[1]  #注意是rsplit
```

#### 字符串筛选排除开头为#的：

```python
startswith() 
方法用于检查字符串是否是以指定子字符串开头，如果是则返回 True，否则返回 False。
如果参数 beg 和 end 指定值，则在指定范围内检查。
```



### 代理：

担心同一ip地址多次访问会被禁止，因此通过多次借用不同的ip去访问即解决。这些不同的ip即为代理

### 多线程：

程序本为单线程模式，多线程相当于开辟多个单线程同时执行

### 协程：

程序遇到IO模式（输入输出）时CPU会暂缓工作，导致运行效率降低。为提高效率，当有线程遇到IO时，使用异步操作，可以让CPU本要罢工的时间里去执行下一个操作。等IO时间结束则回到原线程继续工作。即牢牢的压榨CPU的摸鱼时间

### Selenium自动化：

```
可以处理登录\验证码\拖拽条\点击事件\切换窗口
缺点：运行慢
```



## 功能:

### 获取页面源代码

```python
filename = 'baidu.html'
from urllib.request import urlopen
url = "http://www.baidu.com"
res = urlopen(url)
with open(filename, mode='w', encoding='utf-8') as f:
    f.write(res.read().decode('utf-8'))
```

### 爬取豆瓣电影资料

[豆瓣网址](https://movie.douban.com/top250)

功能实现文件：D:\Python\python crawler\getMovie.py

```python
item.group('year').strip()  #group 获取迭代器中的内容 strip()去除空格
dic = item.groupdict()		#转化为字典
```

### 爬取电影天堂电影下载网址

[电影天堂](https://www.dy2018.com/)

功能实现文件：D:\Python\python crawler\getMovie2.py

难点：首页电影链接只有部分，需要拼接。需要三次re筛选才能获得完整地址

### 使用bs4爬取北京新发地的菜价

[新发地](http://www.xinfadi.com.cn/index.html)

[教程链接](https://www.bilibili.com/video/BV1i54y1h75W?p=30&spm_id_from=pageDriver)

功能实现文件：D:\Python\python crawler\bsTest.py   (没写完整)

特色：使用bs4能够快速的获取html元素,不需要正则的冗长

### 爬取网易云评论（解析加密，难）：

[教程](https://www.bilibili.com/video/BV1i54y1h75W?p=46)

难点：有自己的加密密钥，要解析并配置个生成静态的密钥。因此要去解读js的加密过程

功能实现文件：D:\Python\python crawler\WangYiComment.py

## 问题：

### 导入re却使用不了findall

报错：

AttributeError: partially initialized module 're' has no attribute 'findall' (most likely due to a circular import)

原因和解决：

可能文件名也取名为re.py,所以导入的import re中确实没有findall这个属性

### 遇到防盗链爬取不了：

处理下user-agent以及refer（溯源网址，即上一层页面必须为refer指定的页面允许数据）

### selenium点击事件不生效：

报错：selenium.common.exceptions.ElementClickInterceptedException: Message: element click intercepted: Element <h3 style="max-width: 180px;">...</h3> is not clickable at point (83, 654). 

原因：应该是元素定位相互覆盖。

解决：https://www.cnblogs.com/PMXGG/p/13321280.html

## 注意：

要登录才有信息获取的可以使用requerst的session()，得到cookie用于request登录