import{_ as t,W as l,X as o,Y as n,Z as s,a0 as a,a2 as i,C as c}from"./framework-5d92cd28.js";const r={},d=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),s(" 使用")],-1),p=n("h3",{id:"安装micro",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装micro","aria-hidden":"true"},"#"),s(" 安装micro")],-1),u={href:"https://blog.csdn.net/github_38194421/article/details/104897865",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以后用go从源码安装二进制文件的时候记得不要加 -u flag，否则，可能怎么也装不上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装go-micro
go get -u -v github.com/micro/go-micro
安装工具集
go get -v github.com/micro/micro
安装protobuf插件
go get -u github.com/golang/protobuf/proto
go get -u github.com/golang/protobuf/protoc-gen-go
go get -u github.com/micro/protoc-gen-micro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>报错：panic: qtls.ConnectionState not compatible with tls.ConnectionState
解决：https://blog.csdn.net/Xiang_lhh/article/details/113814742
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>micro new [command options][arguments...]
#指定服务的命名空间
--namespace &quot;go.micro&quot;Namespace for the service e.g com.example
#服务类型，可以是微服务srv或者web项目，或者api等
--type srv Type of service e.g api,fnc,srv,web
#服务的正式完整定义
--fqdn FQDN of service e.g com.example.srv.service
(defaults to namespace.type.alias)
#别名是在指定时作为组合名的一部分使用的短名称 别名
--alias Alias is the short name used as part of combined name if specified15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建" tabindex="-1"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>micro new myMicro

然后很多main.go的pb包报错，需要.proto生成pb.go文件，输入make proto
报错：&#39;make&#39;不是内部或外部命令，也不是可运行的程序或批处理文件。
故快捷方式用不了就用原生命令吧，到MakeFile下找到make proto原生指令，复制运行即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装使用protobuf" tabindex="-1"><a class="header-anchor" href="#安装使用protobuf" aria-hidden="true">#</a> 安装使用protobuf</h3>`,8),m={href:"https://www.jianshu.com/p/ef946fc63160",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.jianshu.com/p/eaa1df6209b6",target:"_blank",rel:"noopener noreferrer"},g=i(`<h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通用json化，根据.proto文件自动生成封装好的client和server的方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动命令" tabindex="-1"><a class="header-anchor" href="#启动命令" aria-hidden="true">#</a> 启动命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc --go_out=./ *.proto
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protoc-gen-go: unable to determine Go import path for &quot;myproto.proto&quot;

[解决](https://blog.csdn.net/bestzy6/article/details/118276674)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> myproto.pb.go 导入包无法解析符号&#39;google.golang.org&#39;

[解决](https://blog.csdn.net/dangqinghua/article/details/107097349)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;protoc-gen-g grpc&#39; 不是内部或外部命令，也不是可运行的程序或批处理文件。

--g grpc_out: protoc-gen-g grpc: Plugin failed with status code 1.

[网址1](https://blog.csdn.net/qq_42031483/article/details/115208041?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-1-115208041.pc_agg_new_rank&amp;utm_term=go+windows+%E5%AE%89%E8%A3%85protoc&amp;spm=1000.2123.3001.4430)

[网址2](https://blog.csdn.net/qq_40330291/article/details/122215177)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装使用consul" tabindex="-1"><a class="header-anchor" href="#安装使用consul" aria-hidden="true">#</a> 安装使用consul</h3>`,8),h={href:"https://www.jianshu.com/p/d78fe734e0ef",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>官网下载后是个exe文件，直接放到GOPATH/bin目录下即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="介绍-1" tabindex="-1"><a class="header-anchor" href="#介绍-1" aria-hidden="true">#</a> 介绍</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>client与server的中间层，负责监听每个服务的健康情况，以及用户端通过consul来调用服务端的方法。
以此保证client调用的都是正常的server
默认端口 8500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="consul-agent" tabindex="-1"><a class="header-anchor" href="#consul-agent" aria-hidden="true">#</a> consul agent</h4><ul><li><p>bind=0.0.0.0</p><p>指定consul所在机器的IP地址。默认值:0.0.0.0</p></li><li><p>http-port=8500consul</p><p>自带一个web访问的默认端口:8500</p></li><li><p>client=127.0.0.1</p><p>表明哪些机器可以访问consul。默认本机。0.0.0.0所有机器均可访问。</p></li><li><p>config-dir=foo</p><p>所有主动注册服务的描述信息</p></li><li><p>data-dir=path</p><p>储存所有注册过来的srv机器的详细信息。</p></li><li><p>dev</p><p>开发者模式，直接以默认配置启动consul</p></li><li><p>node=hostname</p><p>服务发现的名字。</p></li><li><p>rejoin consul</p><p>启动的时候，加入到的consul集群</p></li><li><p>server</p><p>以服务方式开启consul，允许其他的consul连接到开启的consul上(形成 集群)。如果不加-server，表示以“客户端”的方式开启。不能被连接。</p></li><li><p>ui</p><p>可以使用web页面来查看服务发现的详情</p></li></ul><h5 id="测试上述命令" tabindex="-1"><a class="header-anchor" href="#测试上述命令" aria-hidden="true">#</a> 测试上述命令:</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在终端中，键入: 
consul agent -server -bootstrap-expect 1 -data-dir /tmp/consul -node=n1 -bind=127.0.0.1 -ui -rejoin -config-dir=/etc/consul.d/ -client 0.0.0.0

提示： ==&gt; Consul agent running!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="consul-members" tabindex="-1"><a class="header-anchor" href="#consul-members" aria-hidden="true">#</a> consul members</h4><p>查看集群中有多少个成员。</p><h4 id="consul-info" tabindex="-1"><a class="header-anchor" href="#consul-info" aria-hidden="true">#</a> consul info</h4><p>查看当前consul的IP信息。</p><h4 id="consul-leave" tabindex="-1"><a class="header-anchor" href="#consul-leave" aria-hidden="true">#</a> consul leave</h4><p>优雅的关闭consul。--不优雅!Ctrl-C</p><h2 id="知识" tabindex="-1"><a class="header-anchor" href="#知识" aria-hidden="true">#</a> 知识</h2><h3 id="rpc和grpc" tabindex="-1"><a class="header-anchor" href="#rpc和grpc" aria-hidden="true">#</a> rpc和grpc</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RPC（Remote Procedure Call）远程过程调用
gRPC 是Google公司开发的一个高性能、开源和通用的 RPC 框架，面向移动和 HTTP/2 设计。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fastdfs" tabindex="-1"><a class="header-anchor" href="#fastdfs" aria-hidden="true">#</a> fastdfs</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>高效存储
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><h3 id="创建远程函数并调用" tabindex="-1"><a class="header-anchor" href="#创建远程函数并调用" aria-hidden="true">#</a> 创建远程函数并调用</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// server</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net&quot;</span>
	<span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// World 定义类对象</span>
<span class="token keyword">type</span> World <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

<span class="token comment">/* tcp的类方法要具备
1 某类对象的方法
2 两个参数，一个传入一个传出，传出要用指针
3 返回值只有error
*/</span>
<span class="token comment">// HelloWorld 定义类方法</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>w <span class="token operator">*</span>World<span class="token punctuation">)</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">,</span>resp<span class="token operator">*</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>resp<span class="token operator">=</span>name<span class="token operator">+</span><span class="token string">&quot;你好&quot;</span>
	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建rpc</span>
	<span class="token boolean">_</span><span class="token operator">=</span>rpc<span class="token punctuation">.</span><span class="token function">RegisterName</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token function">new</span><span class="token punctuation">(</span>World<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// 连接net</span>
	listener<span class="token punctuation">,</span><span class="token boolean">_</span><span class="token operator">:=</span>net<span class="token punctuation">.</span><span class="token function">Listen</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;127.0.0.1:8800&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> listener<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 监听</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;开始监听中...&quot;</span><span class="token punctuation">)</span>
	conn<span class="token punctuation">,</span><span class="token boolean">_</span><span class="token operator">:=</span>listener<span class="token punctuation">.</span><span class="token function">Accept</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> conn<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 绑定rpc</span>
	rpc<span class="token punctuation">.</span><span class="token function">ServeConn</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span>
    <span class="token comment">//jsonrpc.ServeConn(conn) json格式</span>
<span class="token punctuation">}</span>


<span class="token comment">// client端</span>
<span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;net/rpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	conn<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> rpc<span class="token punctuation">.</span><span class="token function">Dial</span><span class="token punctuation">(</span><span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:8800&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">//conn, _ :=jsonrpc.Dial(&quot;tcp&quot;, &quot;127.0.0.1:8800&quot;) 通用json版</span>

	<span class="token keyword">var</span> res <span class="token builtin">string</span>
	<span class="token boolean">_</span> <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token string">&quot;hello.HelloWorld&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;李白&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>res<span class="token punctuation">)</span> <span class="token comment">// 方法名 传入传出参数</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册consul" tabindex="-1"><a class="header-anchor" href="#注册consul" aria-hidden="true">#</a> 注册consul</h3>`,22),f={href:"https://blog.csdn.net/beatxgo/article/details/119210864?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-1-119210864.pc_agg_new_rank&utm_term=go-micro+v3&spm=1000.2123.3001.4430",target:"_blank",rel:"noopener noreferrer"},x=n("h3",{id:"启动微服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#启动微服务","aria-hidden":"true"},"#"),s(" 启动微服务")],-1),_=n("p",null,"要先启动服务发现，再go run main.go 启动server，再go run main.go 启动client",-1);function q(w,y){const e=c("ExternalLinkIcon");return l(),o("div",null,[d,p,n("p",null,[n("a",u,[s("教程"),a(e)])]),v,n("p",null,[n("a",m,[s("教程1"),a(e)])]),n("p",null,[n("a",b,[s("教程2"),a(e)])]),g,n("p",null,[n("a",h,[s("网址"),a(e)])]),k,n("p",null,[n("a",f,[s("简书"),a(e)])]),x,_])}const P=t(r,[["render",q],["__file","Go 微服务.html.vue"]]);export{P as default};
