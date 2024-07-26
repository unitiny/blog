import{_ as t,W as d,X as r,Y as e,Z as n,a0 as s,a2 as i,C as l}from"./framework-5d92cd28.js";const c="/typora-user-images/image-20211226164750513.png",o="/typora-user-images/image-20211226164811000.png",u={},p=i(`<h2 id="知识" tabindex="-1"><a class="header-anchor" href="#知识" aria-hidden="true">#</a> 知识</h2><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈" aria-hidden="true">#</a> 栈</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可顺序栈（单指针）或链式栈（可单双指针）
定义节点 出入栈函数 打印函数 判断空栈满栈（可选）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可顺序队列或链式队列（都为双指针）
定义节点 出入队列函数 打印函数 判断空队列满队列（可选）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何解决队列的假溢出问题" tabindex="-1"><a class="header-anchor" href="#如何解决队列的假溢出问题" aria-hidden="true">#</a> 如何解决队列的假溢出问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>描述：由于先进先出原理，头指针向后移后，前面空间会空出来。而尾指针后进后出要后移，当移到队列末尾时，
会溢出。但可能前面有多余空间，造成浪费。这种现象称为假溢出

方案：循环即可，尾指针p,队列最大空间Maxsize.  p=(p+1)%Maxsize , 即实现尾指针指向前面多余空间，但又)
遵循着后进后出的原理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h3>`,8),v={href:"https://zhuanlan.zhihu.com/p/110937962",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>定义节点 创建节点函数 遍历树函数 查找节点 求树高度（可选）

复制树：申请新空间，不能在原树上操作
https://blog.csdn.net/qq_36183935/article/details/80257891

树的使用，多种方法遍历树
D:\\GOPATH\\src\\Leetcode\\数据结构\\27二叉树使用.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先序加中序确定一棵树</p>`,2),m={href:"https://blog.csdn.net/m0_37149062/article/details/105141485",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#图","aria-hidden":"true"},"#"),n(" 图")],-1),g={href:"https://blog.csdn.net/weixin_34392843/article/details/88805569",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// 模型</span>
<span class="token comment">// GNode 图节点</span>
<span class="token keyword">type</span> GNode <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Val <span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Graph 图</span>
<span class="token keyword">type</span> Graph <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	GNodes <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>GNode
	Edges  <span class="token keyword">map</span><span class="token punctuation">[</span>GNode<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>GNode
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// BFS 广度遍历
1 需要辅助切片来判断是否遍历过
2 需要队列控制节点的遍历
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 图涉及函数
1 添加边
2 添加顶点
3 输出图
4 输出图节点（可选）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>`,4),x={href:"https://zhuanlan.zhihu.com/p/45725214",target:"_blank",rel:"noopener noreferrer"},k=i('<h2 id="程序思路" tabindex="-1"><a class="header-anchor" href="#程序思路" aria-hidden="true">#</a> 程序思路</h2><h4 id="已知长度为的线性表采用顺序存储结构。写一算法-删除线性表中所有值为的元素。" tabindex="-1"><a class="header-anchor" href="#已知长度为的线性表采用顺序存储结构。写一算法-删除线性表中所有值为的元素。" aria-hidden="true">#</a> 已知长度为的线性表采用顺序存储结构。写一算法，删除线性表中所有值为的元素。</h4><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>倒转数组</p><figure><img src="'+o+'" alt="image-20211226164811000" tabindex="0" loading="lazy"><figcaption>image-20211226164811000</figcaption></figure>',5);function f(y,z){const a=l("ExternalLinkIcon");return d(),r("div",null,[p,e("p",null,[e("a",v,[n("https://zhuanlan.zhihu.com/p/110937962"),s(a)])]),h,e("p",null,[e("a",m,[n("https://blog.csdn.net/m0_37149062/article/details/105141485"),s(a)])]),b,e("p",null,[e("a",g,[n("go 图"),s(a)])]),_,e("p",null,[e("a",x,[n("堆排序"),s(a)])]),k])}const G=t(u,[["render",f],["__file","数据结构笔记.html.vue"]]);export{G as default};
