---
icon: article
date: 2022-01-10
title: Gin 笔记
category:
- 后端
- Go
- web框架

tag:
- Gin
---

## 学习

[网址](https://www.bilibili.com/video/BV1s24y1k7pv/?spm_id_from=333.337.search-card.all.click&vd_source=3ec975651088fba288a277c53f0bcc77)

[练习项目网址](https://www.bilibili.com/video/BV17R4y1c7Td?p=2&vd_source=3ec975651088fba288a277c53f0bcc77)

## 语法

### 返回前端数据

```
ctx.JSON(http.StatusOK, resp)
```

###  中间件

#### 作用

可以对路由参数进行过滤操作

对session进行校验，如有无userId。使得之后路由都不需做session校验了

```
router.Use(Text()) // 使用Text中间件

ctx.Next()  // 跳过剩余内容，执行下一个中间件，所有执行完后再以出栈形式输出剩余内容
return // 不执行剩余内容
ctx.Abort() // 只执行当前中间件，终止之后中间件执行，之后出栈顺序返回中间件
```



## 功能

### 保存上传文件

```
func PostAvatar(ctx *gin.Context)  {
	file,_:=ctx.FormFile("avatar")
	err:=ctx.SaveUploadedFile(file,"text/"+file.Filename)
}
```

### 上传视频

![image-20220211223310964](/typora-user-images/image-20220211223310964.png)



## 问题