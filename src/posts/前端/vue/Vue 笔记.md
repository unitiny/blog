---
icon: article
date: 2022-01-10
title: Vue 笔记
category:
- 前端
- vue

tag:
- Vue
---

# Vue 笔记

## 上手：

### [安装vue 配置]( https://www.cnblogs.com/zhaomeizi/p/8483597.html)

### [安装devtool](https://blog.csdn.net/weixin_38654336/article/details/80790698) 

### vue创建项目流程

创建项目  必须 cd 到对应项目里面

```cmd
vue init webpack vue-demo01 / vue create vue-name  可以自定义名称
cd  vue-demo01 
cnpm install  /  npm install   
```

如果创建项目的时候没有报错，这一步可以省略。

如果报错了  cd到项目里面运行  

```cmd
cnpm install  /  npm install 
npm run dev/npm run start/npm run serve  启动项目
```

### 好用的工具

### bootstrap

css排版布局及ui，移动设备优先  

### vant

ui设计与bootstrap类似  

### less

css预编译处理

### nodemon

使用nodemon index.js 代替 node index.js 启动js终端 ，界面更优化

### axios

Ajax是MVC模式，且要引入整个jQuery,项目太大

axios是MVVM(modex---view---view-model模式)，轻量且提供多个请求接口

### Shortid

随机生成短id号

扩展安装 vue2全家桶17课 项目(总文件夹)终端打开

输入 npm i shortid --save 即可安装

### moment

介绍：处理时间戳，转化为正常时间

安装：npm install moment --save  

使用：moment(value).format(format1) 使value按format1的格式输出，format1为自定义，如：YYYY-MM-DD HH-MM-SS (此错误，月日与分秒字符相同，无法针对分秒或月日做出改变)

应为YYYY-MM-DD HH-mm-ss 一个时间格式

### animate.css

好看的动画效果

nmp install animate.css --save  

## 语法：

### 基础

- :和@

冒号：代表v-bind 绑定,单向绑定

@代表 v-on 监听

v-once 只使用一次传入数据 之后静态不会改变

​	  v-model ：数据双向绑定

- V-for

V-for 中的:key绑定key 是为了使该div是唯一标签，不会使用另一同名div

- v-html

v-html 可在vue中插入HTML标签，如变量a:<span>hello</span>,html中{{a}},则只把span当成字符串，加入v-html会自动识别

- computed和watch

computed 得到多个数据变化计算一个结果，watch 得到一个数据变化去影响多个结果

computed 属性有get() 得到数据， set() 得到结果并计算影响数据，数据双向绑定

watch监听的变量可看成一个方法，数据单向绑定

- this.$root 访问最顶层的父级组件

- 数组操作

	插入数组

	this.persons.unshift(this.newPerson)

	删除某一项数组 splice(index,len,[item]) 下标，删除长度(若为2，删除两个数组，item 替换内容)

	如：this.persons.splice(index,1)

### JSON

- JSON.stringfy(obj)

	将数据字符串化，如obj:3,则转化后’obj’： ‘3’ ，JSON.prase(obj) 将数据转换成对象

	常用于localStroge与前后端的数据交互，获取localStroge要JSON.prase(obj)解析，存放到localStroge时要JSON.stringfy(obj)格式化

- JSON.Stringify(value) 

	把对象的每一字段转变为字符串

- JSON.prase(value) 

	解析对象

### localStroge

localStroge.clear();清除本地缓冲

### 生命周期

图解

 ![](file:///C:\Users\20692\AppData\Local\Temp\ksohtml18056\wps2.jpg)



### 解析 ...

let arr=[...persons]; 使arr接受persons的全部数据；arr=person也行



### 时间

new Date() 产生一个新的时间

### 异步

async异步的意思  异步函数也就意味着该函数的执行不会阻塞后面代码的执行，且会效果置于后面展示。

[async与await详解](https://www.cnblogs.com/zhoujuan/p/11692818.html)

### Router

跳转页面：this.$router.push('about')

### 单向数据流

由数据源（data）控制视图（thml部分），而视图有特定的动作（methods）触发，于是动作actions又改变数据源，数据源接着改变视图，形成一个循环

### 插槽

将子组件在父组件的<slot></slot>标签位置显示

[插槽详解](http://caibaojian.com/vue-slot.html)

uniapp 使用插槽

[父向子传参](https://blog.csdn.net/qq_31277409/article/details/108855534)

[子向父传值或直接修改父的值1](https://blog.csdn.net/lianwenxiu/article/details/87898688)

[子动态修改父值](https://www.cnblogs.com/xiaohuasan/p/12423753.html)

[父调用子组件方法](https://www.cnblogs.com/wangxiaoling/p/10250903.html)

[子组件调用父组件方法](https://www.cnblogs.com/makai/p/11117073.html)

```
目前仅支持解构插槽 ，如 v-slot="{ user }"，此为子向父传参，使用的是子组件的数据
```

```
子组件默认方法：created()
```



### 懒加载

```
例如 不下拉到图片位置时不加载图片，以达到性能优化效果
```



## 功能：

### 模板快捷键

输入vue

### 关闭ESLint强制语法规则

[1](https://www.cnblogs.com/fxwoniu/p/13851303.html)

[2](https://blog.csdn.net/festone000/article/details/99672307)

[3](https://blog.csdn.net/qq_36888550/article/details/79815195)

### 自定义全局或局部指令：

```vue
directive:{id(指令名),(el,binding)=>{
 el.textContent=binding.value.toUpperCase()}  
```

id为指令名，el为html标签，binding为绑定的标签的内容。全局在main.js里定义，局部在部件vue中定义



### 动画效果

```css
.fade-enter, .fade-leave-to{
opacity:0;  //刚进入和完全离开时透明度为零
transform:traslateX(200px) //移动200px
}
.fade-enter-active, .fade-leave-active{
trasition:all 2s ease;  //动画部分 时间 效果
}
```

### 正确打包配置

[网址](https://blog.csdn.net/josiecici/article/details/107950429)

[网址2](https://www.cnblogs.com/facefront/p/10954799.html)

### vue设置代理

[网址](https://www.jianshu.com/p/5ef2b17f9b25)

### 打包后devServer代理失效

[网址](https://segmentfault.com/q/1010000020548094?utm_source=tag-newest)

### axios改写为Vue的原型属性

[网址](https://www.jianshu.com/p/5924458133b4)



### click点击区分父和子元素事件

```
即阻止事件冒泡
子元素中@click.stop
```

### css中使用变量

https://blog.csdn.net/qq_41635167/article/details/103899769





## 冤家bug:

### animate 动画效果无法显示问题 

不能在transition里面添加div,div里面的标签可能会没反应，具体原因未知

### 已存在相同文件名

把文件夹，vscode，命令窗口都关闭再重开一下

### soket.io连接问题

- 使用socket.io准备

	服务端(后端)：

	要npm install --save socket.io ,还可npm install -g nodemon 全局下载nodemon替换node,

	客户端(前端)：

	要npm install --save socket.io-client,然后在html文件中引入

- 报错

	两端无法响应，并有status code 404警告，即客户端的client文件没有找到，无法引用。

- 解决

	本人错误在直接导入socket.io 而不是client包下的socket.io.dev.js,因此小细节而花费四天时间，┗|｀O′|┛ 嗷~~，来自程序猿的卑微怒吼

### socket.io无法跨域请求

```vue
socketio.io = require('socket.io')(server, {

    allowEIO3: true,

    cors: {

    origin:["http://localhost:8080","http://127.0.0.1:8080"], // 添加请求头即可

    methods: ["GET", "POST"],

	credentials: true}});
```

### 运行服务器时Mysql不使用一段时间会断开，且报错

![img](file:///C:\Users\20692\AppData\Local\Temp\ksohtml18056\wps1.jpg) 

 所以要写个自动重连的回调（递归）函数



### Property or method "item" is not defined on the instance but referenced during render.

```
item未定义却使用了，解决：data中定义item，哪怕为空
```



## 知识点:

v-once 只渲染一次，之后插槽内容不会更新

v-html 解析字符串成html

默认事件e，传入形式为$event



## 注意:

- 主件要名称大写
- 箭头函数有花括号要写return
- computed中get方法每条语句后要加；而不是，  逗号会引起语法错误
- style里边要用分号隔开，逗号无效
- fade-enter-active,fade-leave-active{} 两个效果要加逗号，否则不生效
- This.element.filter 搜索符合的内容 .push 添加内容 .splice  删除内容
- vue中style的scoped会使组件私有化，从而使用ui渲染组件后，添加进来的、未在源html出现的div会因scoped的限制无法得到css的样式修改，因此要慎用scoped
- 引入函数要加{} 如：import { targetCate,addCate } from '@/utils/request.js'
- axios中参数data是用于post请求的，参数params是用于get请求的