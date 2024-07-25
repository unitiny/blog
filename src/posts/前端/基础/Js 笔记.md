---
icon: article
date: 2022-01-10
title: Js 笔记
category:
- 前端
- 基础

tag:
- Js
---

# js 笔记

## 学习：

[网址](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)



## 语法：

### 闭包：

[闭包详解](https://zhuanlan.zhihu.com/p/22486908)

返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

### 字符串：

charAt() 指定字符串位置的字母

split() 分割字符

arrayObject.slice(start,end) 截取字符

去掉最后一个字符

```
basic = basic.substr(0, basic.length - 1);  
basic = basic.substring(0, basic.lastIndexOf(','));  
```

替换字符串

```
str.replace("需要替换的字符串"，"新字符串")　

str.replace(/需要替换的字符串/g，"新字符串")

比如：

"yyyy-MM-dd-hh-mm-ss".replace("-","/")

结果如下： "yyyy/MM-dd-hh-mm-ss"

"yyyy-MM-dd-hh-mm-ss".replace(/-/g,"/")

结果如下：
"yyyy/MM/dd/hh/mm/ss"

过滤字符：
str.replace(/[a-zA-Z0-9]/g,"")

综上：

常规的替换只会替换第一次匹配的字符，正则可替换全部
```



### 数组：

arr.length 获取长度

arr.slice(0,3) 截取0到第三个元素

arr.push 添加元素 arr.pop 删除元素

arr.reserve 倒序元素

arr.concat() 连接两个数组

定义数组  var arr2 = new Array(2);//规定了数组的长度为2，不传2可看作切片

从索引2开始删除3个元素,然后再添加两个元素:

```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr.splice(2, 3, 'Google', 'Facebook'); 
// 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
```

- join()添加连接元素 


```js
var arr = ['A', 'B', 'C', 1, 2, 3];
arr.join('-'); // 'A-B-C-1-2-3'
```

- 查找数组是否存在元素

	```
	if(arr.indexOf(index)>-1){}  // 没有返回-1
	```

	

- map和set

var m = new Map(); // 空Map

m.set('Adam', 67); // 添加新的key-value

map()每个元素都调用一次

格式：arr.map(pow)

```
var array1 = [1,4,9,16];
const map1 = array1.map(x => x *2); // 里面是个回调函数
console.log(map1);
```



- reduce

把结果继续和序列的下一个元素做累积计算，其效果就是：

[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)

```js
var arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);

打印结果：
1 2 1
3 3 2
6 4 3
[1, 2, 3, 4] 10 // 从第二个元素开始遍历


var  arr = [1, 2, 3, 4];
var sum = arr.reduce(function(prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
}，0) //注意这里设置了初始值
console.log(arr, sum);

打印结果：
0 1 0
1 2 1
3 3 2
6 4 3
[1, 2, 3, 4] 10 // 从第一个元素开始遍历
```

[详解](https://www.jianshu.com/p/e375ba1cfc47)

- filter 

筛选元素 加上indexOf去除重复元素 

将原数组筛选，获得新数组

```
this.delArr = this.delArr.filter(function (item) {
    return item != index
  }) // lia
```



- trim

x.trim()去除首尾空格

- sort

x.sort() 不传参数默认ASCII升序 传函数 a<b,返回-1，位置a在b前面;  a>b,返回1，a在b后面；返回0，位置不变。

[具体内部排序方法](https://blog.csdn.net/ws9029/article/details/106734256)

- from

	Array.from(obj,methods) 将数组浅拷贝，后面可加方法，使obj里的每一个元素都执行该方法

- map

	对原数组遍历改造，得到操作后的原数组

- some

	数组中有至少一个元素通过回调函数的测试就会返回**`true`**；所有元素都没有通过回调函数的测试返回值才会为false。

	

#### 数组去重

[网址](https://www.cnblogs.com/zsp-1064239893/p/11196501.html)



#### 表达式学习

```js
app.dataset.state.allAnswers.User_Flight_City !== "" ? [...app.dataset.state.Flight_Master?.filter((v) => {
    return v.Dept_City === app.dataset.state.allAnswers.User_Flight_City && v.Cancel_LR == null
})?.map(x => {
    return {
        label: x.Flight_No + " " + x.Arrv_City.replace(/[a-zA-Z0-9]/g, "") + (x.Quar_City ? "(" + x.Quar_City + ")" : ""),
        value: x.Flight_No
    }
})?.reduce((pre, cur) => {
    console.log(pre, cur)
    if (pre.length == 0) {
        return [cur]
    }
    return pre.some(item => {
        return item.label === cur.label
    }) ? pre : [...pre, cur]
}, []), {
    label: "我的航班未被列出",
    value: "我的航班未被列出"
}] : [{
    label: "我的航班未被列出",
    value: "我的航班未被列出"
}]
```



#### 数组判断相等

一般先转化为字符串判断

```
arr.toString()
arr.join()
arr + ""
String(arr)
```





### 对象：

#### generator

generator可保存对象状态 可以用yield返回多次

#### test

RegExp对象的test()方法用于测试给定的字符串是否符合条件。

#### JSON.parse

var user =JSON.parse(this.responseText); 将变量转化为对象，以便读取里边数组

#### 对象转数组

[网址](https://www.jianshu.com/p/3d823b9d632b)

```js
data = Object.values(data); 
data = Object.keys(data);
```

#### 对象遍历

[网址](https://www.cnblogs.com/chenyablog/p/6477866.html)

```js
for(let i in this.list){
  console.log(i,list[i]);
};
```

#### 对象转字符串

```
JSON.stringify(object) // 或者json封装
```



#### 判定对象是否为空

```
JSON.stringify(option)=="{}"
```

### 删除对象某属性

```
delete this.checkBox[v.TripId]
```

### 判断属性是否存在

```
if("name" in obj)
```



### 字典：

https://blog.csdn.net/ganyingxie123456/article/details/78163154

https://www.cnblogs.com/yuer20180726/p/11387699.html

```js
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined
```



### 正则表达式：

[学习](https://www.runoob.com/regexp/regexp-syntax.html)

- ?表示懒惰模式，即匹配一次成功后就截止，默认是非懒惰，即匹配成功后仍继续匹配，直到末尾。

+ +表示可以多匹配一个任意字符，
+ .点则匹配除“\n”和"\r"之外的任何单个字符，
+ *匹配前面的子表达式任意次，\转义字符 

```
/\{\{(.*?)\}\}/   表示匹配{{msg}}之类，.任意字符 *匹配任意次 ?匹配成功后即停止
```

### 事件：

```js
onblur 事件发生在对象失去焦点时。
```



### 定时函数：

```
setInterval(function(){ alert("Hello"); }, 3000);
```



### math：

```js
math.floor(x) 返回x的最大整数

math.random()*10+1;随机产生1到10的随机数

Math.round(Math.random() * 230)  取整
```



### 跳转:

```js
window.location = "./pcIndex";
location.reload(); // 重新加载当前网页
$(window).attr("location", "../login/pcExit");
```



### 双问号（空值合并运算符）

```
// 括号里面内容为空，则默认Guest
let firstName = null;
let lastName = undefined;
let username = (firstName || lastName) ?? "Guest"; // Error: Unexpected token '??'

console.log(username); // "Guest"
```



## 功能：



### 格式转换

http://c.biancheng.net/view/5477.html

```
int.toString()
parseInt(str)
arr.toString() // 数组转字符串
```

### 数据类型转换

https://www.cnblogs.com/PowellZhao/p/5542169.html

https://www.runoob.com/js/js-type-conversion.html

### 判断数据类型

https://www.cnblogs.com/onepixel/p/5126046.html

```
typeof num == int
```



### a标签跳转网页刷新时如何储存数据

[可使用本地储存数据](https://blog.csdn.net/julystroy/article/details/96493615)

### Cookie 用于存储 web 页面的用户信息

### js中改变style样式

allDoms[i].style.cssText="display:block;"; allDoms[i] 可更换

### 获取滚轮高度 

document.documentElement.scrollTop

### 获取span标签内容

document.getElementById("code").innerText 

### 添加点击事件

document.getElementById('text').addEventListener("click", get);

可用来代替onclik,get是一个函数

### 改变html

加引号说明要生成html文本，并用.innerhtml=`内容`可实现HTML 新增面板，内容中加入js变量 ${变量}

### 根据日期判断星期几

[链接](https://www.cnblogs.com/home-/p/12093809.html)

### 时间函数

https://www.cnblogs.com/ShanHeDiao/p/4445012.html

https://www.html.cn/qa/javascript/11162.html

```
var d = new Date();
var year = d.getFullYear();
var mouth = d.getMonth() + 1;
var day = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();

var h3 = hour + ":" + minute;
var p = year + "-" + mouth + "-" + day;
$("#now_time h3").val(h3);
$("#now_time p").val(p);
console.log(h3, p);

this.startDate=time.toLocaleDateString()
this.endDate=time.toLocaleTimeString()
console.log(this.startDate,this.endDate);
// 结果 2021/12/9 下午6:04:31

// 或者用插件
npm install moment --save
moment().format('YYYY-MM-DD')
```

```
// YYYY-mm-DD日期
let time = new Date()
let day = time.toLocaleDateString()
this.date = day.replace(/\//g, "-")
```

```
// HH:mm时间
var d = new Date(), str = ""
str += d.getHours() + ':';
str += d.getMinutes();
this.clock = str
```

#### 根据时间戳获取年龄

```
export function getAge(birthTime) {
  var birthDate=new Date(birthTime).getTime()
  var nowDate=new Date().getTime()
  var age=Math.ceil((nowDate-birthDate)/31536000000)
  console.log(age)
  return age
}
```



### 数组对象的某一字段去重

```
app.dataset.state.Flight_Master?.filter((v) => {
    return v.Country === app.dataset.state.allAnswers.User_Flight_Country
})?.map(x => {
    return x.Dept_City
})?.filter((y, k, arr) => {
    return arr.indexOf(y) === k
})?.map(res => {
    return {
        label: res,
        value: res
    }
})
```



### 异步变同步解决方法

[网址](https://zhuanlan.zhihu.com/p/392148949)

```
利用递归和在promise中使用settimeout，可一直轮询
```



## 可恨的bug:

- ### 问题：js改变className属性效果显示错误，如下图

<img src="/typora-user-images/image-20210524205308219.png" alt="image-20210524205308219" style="zoom: 25%;" />

原因：渲染时间不够，造成数据流失，要加setInterval()延迟函数给浏览器加载

- ### [Input 赋值不成功问题]( https://blog.csdn.net/weixin_41297324/article/details/107941929)

- ### [ChildNode空节点](https://www.cnblogs.com/zhangbao/p/5881769.html)

ChildNode[i].value 赋值了不显示问题，childNode会把空格当作一节点，所以赋值了也显示不了，因为赋值在空格

- ### 点击事件不响应

原因：可能函数名为某些关键字不得使用，如命名为scroll的函数点击无法生效，需更换名称

### js内容不响应

```
可能节点未渲染，js获取失败，常见
```

### 定义事件a，但onclick报错方法未定义

```
使用window.a=function(){},全局定义
```

### 数组或对象为\_\_ob\_\_属性无法遍历

[奇葩原因](https://blog.csdn.net/qq_42527726/article/details/108491401)



### 使用async函数返回值为空

```
由于用了await，故结果未赋值给变量前就return了，所以返回值为空
要在调用async函数后使用.then(res=>{})
```



### websocket 无法连接0.0.0.0

本地服务器监听0.0.0.0:9000地址，postman可以连接，js的websocket却无法连接

0.0.0.0地址被用于表示一个无效的，未知的或者不可用的目标。

所以postman输入任意地址都能连接上，如0.0.0.0:9000 或 127.0.0.8:9000

而js的websocket对于0.0.0.0地址是非法的，无法连接的。其他地址和postman一致



## 思考

### setTimeout和setInterval会引发多线程安全问题吗？

[网址](https://blog.csdn.net/fuhanghang/article/details/118516268)

```
js其实是单线程的，setTimeout和setInterval只是一个事件触发器
```



## 注意：

- 箭头函数 v=>{v-1}  ，加了{}则不能省略return

- js放头部问题，会出现节点未加载完吗，而无法使用js,可以用延时函数

- 全局变量可以不用往函数传参数，但函数要有返回值

- 字面量创建方式特殊含义的字符不需要转义，实例创建方式需要转义

- 只要函数return 全局变量即可保存