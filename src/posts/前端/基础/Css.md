---
icon: article
date: 2022-01-10
title: Css
category:
- 前端
- 基础

tag:
- Css
---

## 语法：

### flex:

[flex 布局](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 

flex:1 使子元素均匀分布

justify-content: space-between; 元素放置两边

 flex-shrink: 0; 取消被flex；

### float:

 clear:both; 清除浮动样式

### border-radius

border-radius: 50%;

### 字体：

 font-style: italic;	字体倾斜

margin-right: auto;  设置右边距 margin 边缘

text-align:justify;	改变字与字之间的间距使得每行对齐：

word-wrap: break-word; 换行

Currentcolor	继承当前文字颜色，类似一个变量

text-indent: 15px 字体行首缩进



### padding  margin：

padding: 8px; 文本与背景上下左右间隔

margin-left是该元素与其他元素的间隔，而不是里面的子元素间隔，float同理

### z-index：

z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

z-index改变页面不改变 ，受上层css影响

[z-index不起作用问题]( https://blog.csdn.net/apple_01150525/article/details/76546367)

### position：

[position详解](https://www.runoob.com/w3cnote/css-position-static-relative-absolute-fixed.html)

[了解 position:relative](https://www.cnblogs.com/chinafine/articles/1765967.html)

position:inline会影响margin:0 auto居中

### box:

box-shadow: 0 6px 12px rgb(0 0 0 /18%); 阴影效果

### 选择子元素：

 :nth-child(n) 选择器匹配父元素中的第 n 个子元素，元素类型没有限制。

### background:

Background-image:url()括号中路径反斜杠不是\，要成/才能显示，改变背景图片大小用background-size

Background-color 填充的是整个页面的大小，background-size height width无法改变大小

background-size 放前放后都能改变Background-image的大小，但后面优先，会覆盖前面的。

background: linear-gradient(#E53E49,#D43636); 渐变 

Opacity属性设置一个元素的透明度级别。

div background-size:cover 背景覆盖

### 图片：

background-size:150%/50%   图片放大缩小 
filter: blur(20px);	滤镜效果

[背景图片铺满整个屏幕](https://blog.csdn.net/julystroy/article/details/96493615)

### icon图标：

font-size 改变图标大小

### 伪元素：

设置元素的首字母、首行的样式

在元素的内容之前或之后插入内容

::before 伪元素可用于在元素内容之前插入一些内容。

::selection 伪元素匹配用户选择的元素部分,对用户选中的文	字部分添加样式，

### 对齐方法：

margin:0 auto;   让元素相对父元素居中

verticla-align 垂直居中

top:50%与margin-top：height/2   配合

 margin-bottom: 5px;  行间距



元素自身居中

```
left: 50%;
top:50%;
transform: translate(-50%, -50%);  元素相对自身偏移
```



对里面元素整体横着居中

```css
//对ul标签设置，可让里面元素li标签水平对齐
display: flex;
flex-direction: row;
justify-content: center;
```

元素正中间

```css
display: flex;
justify-content: center;
align-items: center;
```

 [各种居中](https://blog.csdn.net/julystroy/article/details/96493615)



## 功能：

### 处理标题 

```css
white-space: nowrap;  //只输出一行
text-overflow: ellipsis;  //溢出用...表示
overflow: hidden;  	//多出隐藏
```

### 元素摆放

让子div置于父div下方：

父级相对定位，子级绝对定位，再bottom=0

vertical-align 属性设置一个元素的垂直对齐方式。

### 改变图片颜色（前提图片黑色背景白色）：

在background的url后加上,linear-gradient(#f00, #f00) no-repeat;

或者用opacity改透明度变灰

### 图片缩放

```css
width: 100%;
height: 0;
padding-top: 100%;
overflow: hidden;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
-webkit-background-size: cover;
-moz-background-size: cover;
```

### 更改鼠标样式

cursor 规则是设定网页浏览时用户鼠标指针的样式，也就是鼠标的图形形状

cursor：pointer设定鼠标的形状为一只伸出食指的手

### 内容溢出使用省略号：

```css
//以下为第二行多出的文本内容省略号代替
display: -webkit-box;
overflow: hidden;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
```

### 弹窗功能

[网址](https://v3.bootcss.com/javascript/#modals)

### 制作泡泡效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style8.css">
</head>
<body>
    <section>
        <h2>Bubbles</h2>
    </section>
    <script type="text/javascript">
        function createBubble(){
            // 指定一个或多个匹配元素的 CSS 选择器。 可以使用它们的 id, 类, 类型, 属性, 属性值等来选取元素。
            const section =document.querySelector('section')
            
            // document.createElement()是在对象中创建一个对象，
            // 要与appendChild() 或insertBefore()方法联合使用。
            // 其中，appendChild()方法在节点的子节点列表末添加新的子节点。
            // insertBefore() 方法在节点的子节点列表任意位置插入新的节点。
            const createElement =document.createElement('span')
            
            var size =Math.random() * 60;

            createElement.style.width = 20 + size +'px';
            createElement.style.height = 20 + size +'px';
            createElement.style.left = Math.random() *innerWidth + "px";
            section.appendChild(createElement);

            setTimeout(() => {
                createElement.remove()
            },4000)
        }
		
        // setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
        // 由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。
        setInterval(createBubble,50)
        
        
        // setInterval()会按给定时间间隔一直执行，而setTimeout()只会执行一次
    </script> 
</body>
</html>
```

### 球类动画

https://www.w3cplus.com/css3/spheres.html

### 波浪动画

[网址](https://www.jianshu.com/p/53ba44457b1a?utm_source=desktop&utm_medium=timeline)



## 知识点：

css样式优先级高于标签属性





## 注意：

### hover不起作用

1 要放置在visited之后，没有visited不用理 

2 被z-index：-1的背景遮挡住，把-1改成大于等于零就行

### [修改js的display但没反应问题](https://blog.csdn.net/julystroy/article/details/96493615)

### margin:0 auto仍不居中

margin:0 auto 是上下界边距零，左右自适应，因此要设置宽度才能自适应。同时position为absolute也不行，要relative

### transition,transform对子元素的影响

transition,transform会默认给div加上position：relative;从而导致子元素绝对定位出现问题