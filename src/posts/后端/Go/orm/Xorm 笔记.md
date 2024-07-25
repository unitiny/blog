---
icon: article
date: 2022-01-10
title: Xorm 笔记
category:
- 后端
- Go
- orm

tag:
- Xorm
---

## 使用

[文档](https://www.kancloud.cn/xormplus/xorm/167077)





## 功能

### xorm工具

```cmd
# 总之找到go-xorm/cmd/xorm位置
cd $GOPATH/src/github.com/go-xorm/cmd/xorm 
# mysql版
xorm reverse mysql root:111111@tcp(127.0.0.1:3306)/lottery?charset=utf8 templates/goxorm
# 会生成go文件在models目录
```