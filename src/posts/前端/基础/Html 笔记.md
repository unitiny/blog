---
icon: article
date: 2022-01-10
title: Html 笔记
category:
- 前端
- 基础

tag:
- Html
---

# Html 笔记





## 功能：

### !+tab 一键生成html模板

### ctrl shift r 或 ctrl+f5 强制刷新浏览器，使css立即生效



## 语法：

- p标签自动换行 white-space: normal;

- dl dt dd 直接竖着的排列

- Img src是引入，写路径，alt是当该图片显示不了时用文字代替来传递信息

-  list-sytle:none;   使ul的li无点 

- &nbsp 表示空格

- select 标签 配合option 可以选择男女之类的

- strong标签起强调效果

- value 属性规定在表单被提交时被发送到服务器的值。

- ```html
	<b>这是粗体文本</b>  b标签
	&gt  输出>符号
	```

- getContext('2d') 方法返回一个用于在画布上绘图的二维环境

- scrollHeight 等属性  [网址](https://baijiahao.baidu.com/s?id=1716515774541606312&wfr=spider&for=pc)



## 注意：

- 在a标签中添加图片需要display:block才能显示，没有此属性则width height设置无效
- 当某部分内容不显示时，要注意html里面放置的位置是否正确
- 图片不显示可能a li 之类标签没有处理 基本属性 width height没输入，更有可能是大小问题
- 犯错误很少在语法上，更多在于隐藏的逻辑，函数使用重复，js会默认使用最后一个而其他的不起作用
- 改变文本框大小要display,否则都是按文字大小定宽高
- label标签 当点击label里边元素时，使label指向的标签发生变化