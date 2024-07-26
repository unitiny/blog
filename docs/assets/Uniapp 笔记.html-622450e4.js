import{_ as i,W as l,X as o,Y as n,Z as a,a0 as e,a2 as t,C as c}from"./framework-5d92cd28.js";const p={},r=t(`<h1 id="uniapp-笔记" tabindex="-1"><a class="header-anchor" href="#uniapp-笔记" aria-hidden="true">#</a> Uniapp 笔记</h1><h2 id="创建和导入" tabindex="-1"><a class="header-anchor" href="#创建和导入" aria-hidden="true">#</a> 创建和导入：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli

vue create <span class="token parameter variable">-p</span> dcloudio/uni-preset-vue my-project
或
npx degit dcloudio/uni-preset-vue<span class="token comment">#vite my-vue3-project</span>

cd到目录后
<span class="token function">npm</span> run dev:mp-weixin

在微信小程序导入路径：

<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">\\</span>my-project<span class="token punctuation">\\</span>dist<span class="token punctuation">\\</span>dev<span class="token punctuation">\\</span>mp-weixin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建vue3项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 安装vue-cli
npm install -g @vue/cli@4

// 创建以 javascript 开发的工程
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
// 创建以 typescript 开发的工程
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

// 初始化，安装依赖
npm i

// 运行
npm run dev:h5 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d={href:"https://blog.csdn.net/xiaoxia188/article/details/122161329",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="全局储存变量" tabindex="-1"><a class="header-anchor" href="#全局储存变量" aria-hidden="true">#</a> 全局储存变量：</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">.</span>imgList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="scroll-view-flex布局不生效" tabindex="-1"><a class="header-anchor" href="#scroll-view-flex布局不生效" aria-hidden="true">#</a> scroll-view flex布局不生效</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scroll-view</span> <span class="token attr-name">enable-flex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scroll-view</span><span class="token punctuation">&gt;</span></span>
	// 要加入enable-flex 另外可能scroll-view没设置高度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typeerror-this-getoptions-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#typeerror-this-getoptions-is-not-a-function" aria-hidden="true">#</a> TypeError: this.getOptions is not a function</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>原因：sass版本过高，不兼容
<span class="token literal-property property">解决：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>jianshu<span class="token punctuation">.</span>com<span class="token operator">/</span>p<span class="token operator">/</span>fd38d024b35a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用vant-weapp组件库" tabindex="-1"><a class="header-anchor" href="#使用vant-weapp组件库" aria-hidden="true">#</a> 使用Vant Weapp组件库</h2>`,7),v={href:"https://www.jianshu.com/p/5dcada1d8f8d?from=timeline",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"uview-ui",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uview-ui","aria-hidden":"true"},"#"),a(" uview-ui")],-1),m=n("h4",{id:"usingcomponents-u-tag-未找到",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usingcomponents-u-tag-未找到","aria-hidden":"true"},"#"),a(' ["usingComponents"]["u-tag"] 未找到')],-1),b={href:"https://ask.dcloud.net.cn/question/118088",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>自己用了cnpm下载了uview，所以配置不对。用npm重新下载即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="接收uni-navigateto的参数" tabindex="-1"><a class="header-anchor" href="#接收uni-navigateto的参数" aria-hidden="true">#</a> 接收uni-navigateTo的参数</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">onLoad</span> <span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//this.id = &quot;5d5f8e45e7bce75ae7fb8278&quot;;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> option<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跳转页面并刷新" tabindex="-1"><a class="header-anchor" href="#跳转页面并刷新" aria-hidden="true">#</a> 跳转页面并刷新</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>uni.navigateTo({
    url: url,
    success() {
        let page = getCurrentPages().pop(); //跳转页面成功之后
        if (!page) return;
        page.onLoad(); //如果页面存在，则重新刷新页面
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画效果" tabindex="-1"><a class="header-anchor" href="#动画效果" aria-hidden="true">#</a> 动画效果</h2>`,6),g={href:"https://blog.csdn.net/qq_41279374/article/details/103134688",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"动画效果不显示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#动画效果不显示","aria-hidden":"true"},"#"),a(" 动画效果不显示")],-1),x={href:"https://www.cnblogs.com/haoming159/p/12423370.html",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"本地资源图片无法通过-wxss-获取-可以使用网络图片-或者-base64",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本地资源图片无法通过-wxss-获取-可以使用网络图片-或者-base64","aria-hidden":"true"},"#"),a(" 本地资源图片无法通过 WXSS 获取，可以使用网络图片，或者 base64")],-1),w={href:"https://www.pianshen.com/article/53501574084/",target:"_blank",rel:"noopener noreferrer"},q={href:"http://tool.chinaz.com/tools/imgtobase",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"插槽使用并父向子传参",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插槽使用并父向子传参","aria-hidden":"true"},"#"),a(" 插槽使用并父向子传参")],-1),j=n("p",null,"vue笔记中更详细",-1),L=n("p",null,"vue写完后由于组件未写入页面，所有不会更新，故看上去没效果，这时要重新编译（看错了）",-1),S={href:"http://caibaojian.com/vue-slot.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://blog.csdn.net/qq_31277409/article/details/108855534",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 子组件
&lt;template&gt;
  &lt;div class=&quot;target-category&quot;&gt;
    &lt;div class=&quot;category-container&quot;&gt;
      &lt;slot :categoryList=&quot;categoryList&quot;&gt;
        {{categoryList[0].Name}}
      &lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: {
    categoryList: Array
  },
}
&lt;/script&gt;

// 父组件
&lt;target-category :categoryList=&quot;categoryList&quot;&gt;&lt;/target-category&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期-完整版" tabindex="-1"><a class="header-anchor" href="#生命周期-完整版" aria-hidden="true">#</a> 生命周期(完整版)</h2>`,2),E={href:"https://blog.csdn.net/yanghongyan001/article/details/104690671",target:"_blank",rel:"noopener noreferrer"},V={href:"https://www.jianshu.com/p/b7cfb4a73a2f",target:"_blank",rel:"noopener noreferrer"},$=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打印的值改变了，但微信开发者工具的 AppData 的值没有改变

已解决：

原因：AppData 值的改变是基于值发生修改时才会被调用。对数组的某一元素更新时，可能工具并未识别到已更改，故没有调用 AppData 改变值方法。

解决：使用一个非数组变量实时改变值，就能调用 AppData 改变值方法，顺便修改了数组的值，已实践验证。若变量赋值常量时，则只有第一次修改变量及数组

补充：后在网上找到验证 https://blog.csdn.net/crxk_/article/details/107449261
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tap和click区别" tabindex="-1"><a class="header-anchor" href="#tap和click区别" aria-hidden="true">#</a> tap和click区别</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两者都会在点击时触发，但是在web手机端，clikc会有200-300ms的延时，所以要用tap代替click作为点击事件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数e事件可用-event代替" tabindex="-1"><a class="header-anchor" href="#参数e事件可用-event代替" aria-hidden="true">#</a> 参数e事件可用$event代替</h2><h2 id="复选框点击事件不触发" tabindex="-1"><a class="header-anchor" href="#复选框点击事件不触发" aria-hidden="true">#</a> 复选框点击事件不触发</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>发现：点击边角处能触发
原因：由于使用组件，子组件里定义了tap.stop事件，导致上层事件不冒泡触发，而由于加了padding样式，
边角处不是子组件范围，故可触发上层事件
解决：既然阻止了上层事件，那么定义个同层及事件即可同时触发.于是定义个div覆盖即可

代码：
 &lt;view class=&quot;checkbox&quot;
            v-show=&quot;showCheck&quot;&gt;
        &lt;fui-checkbox :value=&quot;index&quot;
                      :checked=&quot;item.isCheck&quot;&gt;&lt;/fui-checkbox&gt;
        &lt;div class=&quot;box&quot;
             @tap=&quot;select(index)&quot;&gt;&lt;/div&gt;
&lt;/view&gt;
// css
.checkbox {
  padding: 5px;
  position: relative;
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="movable-area置于顶层又不阻止下方点击事件" tabindex="-1"><a class="header-anchor" href="#movable-area置于顶层又不阻止下方点击事件" aria-hidden="true">#</a> movable-area置于顶层又不阻止下方点击事件</h2>`,7),D={href:"https://www.jianshu.com/p/6e74cdc8be3a",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.cnblogs.com/kunmomo/p/11752669.html",target:"_blank",rel:"noopener noreferrer"},T=t(`<h2 id="获取屏幕高度" tabindex="-1"><a class="header-anchor" href="#获取屏幕高度" aria-hidden="true">#</a> 获取屏幕高度</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取屏幕高度
uni.getSystemInfo({
  success: function (res) {
    console.log(res);
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue不推荐直接在子组件中修改父组件传来的props的值-会报错" tabindex="-1"><a class="header-anchor" href="#vue不推荐直接在子组件中修改父组件传来的props的值-会报错" aria-hidden="true">#</a> vue不推荐直接在子组件中修改父组件传来的props的值，会报错</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>报错：Avoid mutating a prop directly since the value will be overwritten 
whenever the parent component re-renders. Instead, use a data or computed 
property based on the prop&#39;s value. Prop being mutated: &quot;checked&quot;

原因：由于父组件中值修改了而子组件未修改，故影响到子组件，所以不推荐这样做
解决：子组件定义个变量，然后在created()中接收props的值，这样父组件的值就不影响到子组件值，
而是通过props修改子组件的值，两者关联的值一起改变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="父组件修改值-子组件仍是原始值" tabindex="-1"><a class="header-anchor" href="#父组件修改值-子组件仍是原始值" aria-hidden="true">#</a> 父组件修改值，子组件仍是原始值</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原因：子组件数据渲染时间太短，数据暂未更改
解决：调用方法时给个延时函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取节点信息" tabindex="-1"><a class="header-anchor" href="#获取节点信息" aria-hidden="true">#</a> 获取节点信息</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&#39;#page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  uni<span class="token punctuation">.</span><span class="token function">pageScrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">scrollTop</span><span class="token operator">:</span> data<span class="token punctuation">.</span>top<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 并滚动</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态修改按钮高度-并位置保持不变" tabindex="-1"><a class="header-anchor" href="#动态修改按钮高度-并位置保持不变" aria-hidden="true">#</a> 动态修改按钮高度，并位置保持不变</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">&#39;#page&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
  uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> top <span class="token operator">=</span> res<span class="token punctuation">.</span>safeArea<span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token number">0.75</span>
      that<span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>operate<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token string">&quot;top:&quot;</span> <span class="token operator">+</span> top<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;px;&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>operate<span class="token punctuation">.</span>high <span class="token operator">=</span> <span class="token string">&quot;height:&quot;</span> <span class="token operator">+</span> height<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;px;&quot;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>operate<span class="token punctuation">.</span>high<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>operate<span class="token punctuation">.</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usingcomponents-uni-calendar-未找到" tabindex="-1"><a class="header-anchor" href="#usingcomponents-uni-calendar-未找到" aria-hidden="true">#</a> [&quot;usingComponents&quot;][&quot;uni-calendar&quot;] 未找到</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原因：发现是路径问题，uni-ui在@dcloudio_uni-ui@1.4.11下而非@dcloudio下
解决：更改vue.config.js编译依赖为
module.exports = {
    transpileDependencies: [&#39;@dcloudio_uni-ui@1.4.11/uni-ui&#39;]
}
更改page.json的easycom为
&quot;^uni-(.*)&quot;: &quot;@dcloudio_uni-ui@1.4.11/uni-ui/lib/uni-$1/uni-$1.vue&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-uniapp-引用子组件防止事件冒泡失效" tabindex="-1"><a class="header-anchor" href="#vue-uniapp-引用子组件防止事件冒泡失效" aria-hidden="true">#</a> VUE/uniapp 引用子组件防止事件冒泡失效</h2>`,13),N={href:"https://blog.csdn.net/weixin_44816309/article/details/105946433",target:"_blank",rel:"noopener noreferrer"},U=t(`<h2 id="eresolve-could-not-resolve-版本不兼容" tabindex="-1"><a class="header-anchor" href="#eresolve-could-not-resolve-版本不兼容" aria-hidden="true">#</a> ERESOLVE could not resolve 版本不兼容</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install命令后边加上--legacy-peer-deps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function B(R,W){const s=c("ExternalLinkIcon");return l(),o("div",null,[r,n("p",null,[n("a",d,[a("vue3无法拉取"),e(s)])]),u,n("p",null,[n("a",v,[a("教程"),e(s)])]),h,m,n("p",null,[n("a",b,[a("https://ask.dcloud.net.cn/question/118088"),e(s)])]),k,n("p",null,[n("a",g,[a("https://blog.csdn.net/qq_41279374/article/details/103134688"),e(s)])]),f,n("p",null,[n("a",x,[a("https://www.cnblogs.com/haoming159/p/12423370.html"),e(s)])]),_,n("p",null,[n("a",w,[a("https://www.pianshen.com/article/53501574084/"),e(s)])]),n("p",null,[n("a",q,[a("http://tool.chinaz.com/tools/imgtobase"),e(s)])]),y,j,L,n("p",null,[n("a",S,[a("子向父"),e(s)]),a('，写法要解构如v-slot="{ user }"')]),n("p",null,[n("a",C,[a("父向子"),e(s)])]),A,n("p",null,[n("a",E,[a("完整详细"),e(s)])]),n("p",null,[n("a",V,[a("https://www.jianshu.com/p/b7cfb4a73a2f"),e(s)])]),$,n("p",null,[n("a",D,[a("网址"),e(s)])]),n("p",null,[n("a",I,[a("网址2"),e(s)])]),T,n("p",null,[n("a",N,[a("网址"),e(s)])]),U])}const O=i(p,[["render",B],["__file","Uniapp 笔记.html.vue"]]);export{O as default};
