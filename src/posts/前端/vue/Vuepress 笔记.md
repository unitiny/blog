---
icon: article
date: 2022-01-10
title: Vuepress 笔记
category:
- 前端
- vue

tag:
- Vuepress
---

# Vuepress 笔记

## 使用：

```cmd
npm run dev #启动
```

```cmd
cnpm run build # 生成静态文件
```



### 学习网址：

[B站资源1](https://www.bilibili.com/video/BV17t41177cr?from=search&seid=13034590012674600858)  [1博客](https://book.hliedu.com/guide/notes/vuepress.html#%E5%AE%89%E8%A3%85%E5%88%9D%E5%A7%8B%E5%8C%96)

[B站资源2](https://www.bilibili.com/video/BV1Fz4y1d7GA?from=search&seid=13034590012674600858)  [2博客](https://www.lookroot.cn/views/article/vuepress.html)

[部署1](https://www.bilibili.com/video/BV1TZ4y1j7NU?p=6)  [部署2](https://blog.csdn.net/qwe435541908/article/details/98954996)  [部署3](https://blog.csdn.net/weixin_43742708/article/details/109559070)

[好看主题](http://vuepress-theme-reco.recoluan.com/)

## 注意：

```
md文件不可取中文且不得有空格，否则链接打不开
```

```
valine 无后端评论系统后台
LeanCloud密码
Abc12345
```



## 收获：

点击导航栏默认跳转到README.md

### 文章属性

```markdown
---
title: 笔记
date: 2021-08-09
sidebar: 'auto'
categories:
  - 前端
tags:    
  - CSS
  - 前端
---

::: tip

# 负责网页的皮肤制作  

:::
```

### 文章跳转的父级标题

此文件所处的文件夹名称，且默认首字母大写



## 问题：

### tip标题不显示

1. 不可给标题加#
2. 要有---上下包裹
3. 要在下方有<!-- more -->

### 文章不显示

markdown格式问题,如：

数组[] []会隐藏并错误

*+.符号与markdown冲突

### 文章keys属性

keys的密码要写入md5()加密后的数据，如e10adc3949ba59abbe56e057f20f883e，则正确密码为123456

目的防止他人通过仓库代码获取密码

### 在gitee部署资源路径错误

原因：仓库名与路径名不同时，更目录为路径名，故base要改为与/路径名/。

相同时，则是仓库首页下为根目录