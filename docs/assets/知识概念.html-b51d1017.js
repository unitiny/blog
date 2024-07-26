import{_ as s,W as r,X as l,Y as e,Z as n,a0 as a,a2 as d,C as t}from"./framework-5d92cd28.js";const c={},v=e("h3",{id:"编译性和解释性语言区别",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编译性和解释性语言区别","aria-hidden":"true"},"#"),n(" 编译性和解释性语言区别")],-1),u={href:"https://www.jianshu.com/p/54e2aeca013b",target:"_blank",rel:"noopener noreferrer"},h={href:"https://zhuanlan.zhihu.com/p/32673532",target:"_blank",rel:"noopener noreferrer"},o=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>编译性语言需要先编译程序，变为平台支持的机器码，之后才能运行。运行时脱离解释器。
解释性语言不编译程序，直接运行程序，运行时动态翻译为平台所支持的机器码。运行时需要解释器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正向代理和反向代理区别" tabindex="-1"><a class="header-anchor" href="#正向代理和反向代理区别" aria-hidden="true">#</a> 正向代理和反向代理区别</h3>`,2),b={href:"https://blog.csdn.net/qq_39429962/article/details/83618746",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.php.cn/nginx/422609.html",target:"_blank",rel:"noopener noreferrer"},p=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>正向代理：代理服务器在客户端与原始服务器的交流中横插一手，当个中介，代理客户端去访问原始服务器，
并放回数据给客户端。这样原始服务器不知道代理服务器的背后雇主是谁（不知道客户端来源），谁都能找代理
服务器，故安全性不保障，对未知的客户端没有信任感

反向代理：nginx服务器则代理的原始服务器，即充当原始服务器的中介，这下子客户端也不知道原始服务器
是谁，大家都戴着面具，安全有了保障。而且客户端访问nginx服务器用的是外网，能限制速度；nginx服务器
用的是内网访问原始服务器，效率提高
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步同步区别" tabindex="-1"><a class="header-anchor" href="#异步同步区别" aria-hidden="true">#</a> 异步同步区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同步:发送一个请求,等待返回,然后再发送下一个请求
异步:发送一个请求,不等待返回,随时可以再发送下一个请求

同步可以避免出现死锁，读脏数据的发生，一般共享某一资源的时候用，如果每个人都有修改权限，同时修改一个文件，
有可能使一个人读取另一个人已经删除的内容，就会出错，同步就会按顺序来修改。
异步则是可以提高效率了，现在cpu都是双核，四核，异步处理的话可以同时做多项工作，当然必须保证是可以并发处理的。

同步和异步最大的区别就在于：一个需要等待，一个不需要等待。
比如广播，就是一个异步例子。发起者不关心接收者的状态。不需要等待接收者的返回信息
电话，就是一个同步例子。发起者需要等待接收者，接通电话后，通信才开始。需要等待接收者的返回信息

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高并发" tabindex="-1"><a class="header-anchor" href="#高并发" aria-hidden="true">#</a> 高并发</h3>`,4),x={href:"https://my.oschina.net/u/4526289/blog/4500749?_from=gitee_search",target:"_blank",rel:"noopener noreferrer"},_={id:"多线程和协程区别",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#多线程和协程区别","aria-hidden":"true"},"#",-1),f={href:"https://zhuanlan.zhihu.com/p/337072647",target:"_blank",rel:"noopener noreferrer"},k=d(`<h3 id="转发和重定向区别" tabindex="-1"><a class="header-anchor" href="#转发和重定向区别" aria-hidden="true">#</a> 转发和重定向区别</h3><p>1、请求次数不同；</p><p>2、重定向时地址栏会发生变化，而转发时地址栏不会发生变化；</p><p>3、重定向两次请求不共享数据，转发一次请求共享数据。</p><h3 id="计算机中的负数" tabindex="-1"><a class="header-anchor" href="#计算机中的负数" aria-hidden="true">#</a> 计算机中的负数</h3><p>15和-15在计算机中如何表示呢，以8位机器数来看，了解几个概念</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一个8位二进制数的首位为符号位，后七位为数值位，用逗号隔开。
因此8位的有符号数范围是-128-127，后七位数值最多为1111111，即127

原码：
带符号的绝对值
+0原码为：0,0000000
-0原码为：1,0000000

反码：
若原码为正数时，和原码一样
若原码为负数时，符号位不变，其余位取反
+0的反码为：0,0000000
-0的反码为：1,1111111

补码：
正数的补码与其原码相同；负数的补码是在其反码的末位加1。
+0的补码为：0,0000000
-0的补码为：1,1111111 + 1 -&gt; 100000000,取后八位,为00000000

总结：
由于计算机只算加法，因此正数的原码，反码，补码都一样。
而对负数才有将原码变反码再变补码的操作。
计算机对负数得原码-&gt;反码-&gt;补码的换算后才使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>15
二进制：00001111
原码：00001111
反码：00001111
补码：00001111

-15
二进制：10001111
原码：10001111
反码：11110000
补码：11110001

而15-15，计算机会看成15+(-15)，得把-15经过原码-&gt;反码-&gt;补码换算，变为11110001
即00001111 + 11110001 = 100000000，取后八位00000000，即为0。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编码缩写" tabindex="-1"><a class="header-anchor" href="#编码缩写" aria-hidden="true">#</a> 编码缩写</h3><h4 id="dp" tabindex="-1"><a class="header-anchor" href="#dp" aria-hidden="true">#</a> dp</h4><p>动态规划 dynamic plan</p><h4 id="cnt" tabindex="-1"><a class="header-anchor" href="#cnt" aria-hidden="true">#</a> cnt</h4><p>count</p><h4 id="ans" tabindex="-1"><a class="header-anchor" href="#ans" aria-hidden="true">#</a> ans</h4><p>answer</p><h4 id="wsl" tabindex="-1"><a class="header-anchor" href="#wsl" aria-hidden="true">#</a> wsl</h4><p>（Windows下的Linux子系统）</p><h3 id="zobist散列表" tabindex="-1"><a class="header-anchor" href="#zobist散列表" aria-hidden="true">#</a> zobist散列表</h3><p>类似下棋这些排列的局面，要为每种局面生成唯一id，则可以用zobist哈希。</p><p>原理是zobist是一个多维数组，为棋盘每个格子上的所有状态储存一个随机数。那对当前局面来说，只需取出每个棋子对应随机数，然后一起异或一下，相当于排列组合了，即可以得到唯一的随机数。</p><p>不同局面得到随机数相同的概率很小，因此可以忽略。</p>`,21),w={href:"https://blog.csdn.net/weixin_33742618/article/details/93865904",target:"_blank",rel:"noopener noreferrer"},z=d(`<h3 id="crlf和lf的差异" tabindex="-1"><a class="header-anchor" href="#crlf和lf的差异" aria-hidden="true">#</a> CRLF和LF的差异</h3><p>\\r：光标移动到行开头，\\n：行结尾的标识</p><p>CRLF = \\r\\n, LF = \\n</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>历史起源于机械操作的时代，对于机械印字来说，\\r为水平移动，\\n为垂直移动，
因此要移动到下一行的开头就需要\\r\\n结合使用了。对于现代电子器械来说，
\\n可隐式的完成跳到下一行开头的作用，因此无需CRLF做行结尾符

linux用LF,window，Redis用CRLF，历史遗留问题罢了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),L={href:"https://zhuanlan.zhihu.com/p/380574688",target:"_blank",rel:"noopener noreferrer"},F=d(`<h3 id="取反位运算" tabindex="-1"><a class="header-anchor" href="#取反位运算" aria-hidden="true">#</a> 取反位运算</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>取反后转为十进制
~1 : -2  ~2 : -3

原因
1 原码和补码都为 0000 0001
对补码取反 0变1 1变0
1111 1110
此为补码，值为-2
变为原码，则减一后取反
1000 0010
即得到 -2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fnv哈希算法" tabindex="-1"><a class="header-anchor" href="#fnv哈希算法" aria-hidden="true">#</a> FNV哈希算法</h3><p>快速计算高度分散的hash值，比 n % m 好用多了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const prime32 = uint32(16777619)

func fnv32(key string) uint32 {
    hash := uint32(2166136261)
    for i := 0; i &lt; len(key); i++ {
        hash *= prime32
        hash ^= uint32(key[i])
    }
    return hash
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>`,6);function C(y,N){const i=t("ExternalLinkIcon");return r(),l("div",null,[v,e("p",null,[e("a",u,[n("简书"),a(i)])]),e("p",null,[e("a",h,[n("知乎"),a(i)])]),o,e("p",null,[e("a",b,[n("网址1"),a(i)])]),e("p",null,[e("a",m,[n("网址2"),a(i)])]),p,e("p",null,[e("a",x,[n("网址"),a(i)])]),e("h3",_,[g,n(),e("a",f,[n("多线程和协程区别"),a(i)])]),k,e("p",null,[e("a",w,[n("网址"),a(i)])]),z,e("p",null,[e("a",L,[n("网址"),a(i)])]),F])}const V=s(c,[["render",C],["__file","知识概念.html.vue"]]);export{V as default};
