import{_ as a,W as s,X as d,Y as e,Z as t,a0 as l,a2 as n,C as r}from"./framework-5d92cd28.js";const u={},c=n(`<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 
any 任意类型  
unknown 未知类型
void 空值
never 没有任何值
| 或者 
*/
let a: number | string // 声明a为数字或字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 类型断言, 将b类型赋值时定义为number
let b: any
a = b as number
a = &lt;number&gt; b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 限制对象， 剩余属性key为字符串类型，val类型任意
let c: {name:string, [propName: string]: any}

c = {name: &quot;张三&quot;, age: 18} // 正确
c = {age: 18} // 错误，即c规定了一定要有name属性，其余任意扩展

https://cloud.tencent.com/developer/article/1610691
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 限制函数, 参数和返回值都是number
let d: (a: number, b: number) =&gt; number
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 数组
let e: string[]
let e: Array&lt;string&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 类型别名
type myType string | number | array
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 可当作类型声明 或者定义类属性
interface myInterface{
	name: string
	age: number
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有private public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3>`,13),v={href:"https://www.runoob.com/typescript/ts-function.html",target:"_blank",rel:"noopener noreferrer"},o=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>param?: string // 可选参数 需要注意的是，可选参数必须接在必需参数后面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Inter {
	length: number
}

// 继承了Inter接口 必须得有length属性
function fn&lt;T extends Inter&gt;(a: T) :number {
	return a.length
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.element = document.getElementById(&quot;food&quot;)! // !保证会有food这个值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><p>热加载js</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc test.ts -w
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全部编译监听</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>新建tsconfig.json, 执行tsc -w即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>tsconfig.json</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;inclued&quot;:[&quot;./src/**/*&quot;] // 包括这些目录
    &quot;exclued&quot;:[&quot;./src/hello&quot;] // 排除这些目录不编译
    “compilerOptions&quot;:{
    	&quot;target&quot;:&quot;ES6&quot; // 编译的ES版本
    	&quot;module&quot;:&quot;es2015&quot;  // 使用的模块化规范
    	&quot;outDir&quot;:&quot;./dist&quot; // 指定编译后文件所在目录
    	&quot;outFile&quot;:&quot;./dist/app.js&quot; // 编译后合并到同一个文件
    	&quot;allowJs&quot;:true // 是否对js文件编译,默认false
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue3使用tsconfig的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script lang=&quot;ts&quot;&gt;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h2><h4 id="ts2349-this-expression-is-not-callable-type-number-has-no-call-signatures" tabindex="-1"><a class="header-anchor" href="#ts2349-this-expression-is-not-callable-type-number-has-no-call-signatures" aria-hidden="true">#</a> TS2349: This expression is not callable.Type &#39;Number&#39; has no call signatures.</h4><p>需要在末尾补上分号，原因未知</p>`,17);function m(b,h){const i=r("ExternalLinkIcon");return s(),d("div",null,[c,e("p",null,[e("a",v,[t("https://www.runoob.com/typescript/ts-function.html"),l(i)])]),o])}const x=a(u,[["render",m],["__file","Ts 笔记.html.vue"]]);export{x as default};
