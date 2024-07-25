---
icon: article
date: 2022-01-10
title: Serverless笔记
category:
- 运维

tag:
- Serverless
---

## 注意：

官方示例是以linux作为系统的，window要更改其命令

Dockerfile改动

```
FROM golang:1.12.16-stretch // 会访问不到，需要设置docker代理

RUN mkdir -p $GOPATH/src/golang.org/x/
RUN cd $GOPATH/src/golang.org/x/
RUN git clone https://github.com/golang/net.git // 可能极慢
RUN cd $GOPATH/src/golang.org/x/
RUN git clone http://github.com/golang/sys.git // https无法clone,原因未知

ENV GO111MODULE=on
ENV GOPROXY https://goproxy.io // golang1.13以下版本的正确代理

RUN go get github.com/awesome-fc/golang-runtime
RUN go get github.com/gorilla/websocket
```

Makefile改动

```
build-img:
	docker build -t fc-go-runtime  -f build-image/Dockerfile build-image

build:
	docker run --rm -it -v "%cd%":/tmp fc-go-runtime bash -c "GOARCH=amd64 go build -o /tmp/code/bootstrap /tmp/code/main.go"

deploy: build
	s deploy -y
	
// $(pwd)是linux命令，改为"%cd%",意思为当前目录
// 删除了chmod +x code/bootstrap Linux命令，给文件赋予权限
```