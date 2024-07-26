import{_ as e,W as i,X as n,a2 as d}from"./framework-5d92cd28.js";const l={},s=d(`<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h2><p>官方示例是以linux作为系统的，window要更改其命令</p><p>Dockerfile改动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM golang:1.12.16-stretch // 会访问不到，需要设置docker代理

RUN mkdir -p $GOPATH/src/golang.org/x/
RUN cd $GOPATH/src/golang.org/x/
RUN git clone https://github.com/golang/net.git // 可能极慢
RUN cd $GOPATH/src/golang.org/x/
RUN git clone http://github.com/golang/sys.git // https无法clone,原因未知

ENV GO111MODULE=on
ENV GOPROXY https://goproxy.io // golang1.13以下版本的正确代理

RUN go get github.com/awesome-fc/golang-runtime
RUN go get github.com/gorilla/websocket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Makefile改动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>build-img:
	docker build -t fc-go-runtime  -f build-image/Dockerfile build-image

build:
	docker run --rm -it -v &quot;%cd%&quot;:/tmp fc-go-runtime bash -c &quot;GOARCH=amd64 go build -o /tmp/code/bootstrap /tmp/code/main.go&quot;

deploy: build
	s deploy -y
	
// $(pwd)是linux命令，改为&quot;%cd%&quot;,意思为当前目录
// 删除了chmod +x code/bootstrap Linux命令，给文件赋予权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),a=[s];function t(c,r){return i(),n("div",null,a)}const u=e(l,[["render",t],["__file","Serverless笔记.html.vue"]]);export{u as default};
