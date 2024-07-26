import{_ as e,W as i,X as n,a2 as d}from"./framework-5d92cd28.js";const s={},l=d(`<h2 id="我与bug的奇妙之旅" tabindex="-1"><a class="header-anchor" href="#我与bug的奇妙之旅" aria-hidden="true">#</a> 我与bug的奇妙之旅</h2><h2 id="日志" tabindex="-1"><a class="header-anchor" href="#日志" aria-hidden="true">#</a> 日志</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>时间：2022-7-11
背景：帮师弟远程调试错误，代码是自己写过的
bug: vue3的watch和computed对store的监听无效
类型：环境问题
行动：一 用setInterval打印了store,发现确实变化了，但computed没反应
     二 测试了下data里的数据，发现是能触发computed的
     三 逐步排查了store和main.js以及其他代码发现没有问题
     四 与自己正确的代码做比较，没有问题。但自己的代码能运行
     五 粘贴自己代码进去，仍然没有效果
花费时间：三个小时，效率过低     
当时结论：结合第二点，觉得由于store的某些特殊导致computed失效。（但此结论错误，没有考虑到四五点）
最终解决：要求师弟把代码发过来，本地验证时忽然想到是不是包损坏问题，当重新安装包后发现可以运行了

总结：第三点是反反复复查看了，浪费大量时间。整体解决是靠着轮询法，把所有可能都想一遍和测试，
	 最终总能在某次思考下碰巧发现问题，效率低下。一直卡在深入根本原因这一步，没做出更多的有效的验证。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>时间：2022-8-6
背景：使用serverless,redis开发
bug: HaveRoom接口一会可用，一会超时不可用
类型：代理错误，导致url重定向
行动：一 查看了serverless的日志，说客户端断开连接
     二 查看前台，确实是由于请求超时，axios断开连接。但函数成功调用是不费多少时间的，
     	要思考为什么有时请求超时
     三 多次查看serverless普通或高级日志，依然没什么收获
     四 查看链路追踪，发现触发器耗时极长，但一直未知是何原因
     五 到官方群询问，没什么关键收获
     六 决定改用本地开发，竟然发现本地也不行。最终查到是路径问题
     七 上网查找axios代理用法，发现自身baseUrl使用了某根路径，而接口路径又重复出现该根路径，
        导致url错误，一直重定向。从而使得请求超时
花费时间：三四个小时，效率过低     
当时结论：对日志使用不熟悉，一直排查不到问题所在，所以有点怀疑是触发器或serverless某些配置有问题
最终解决：竟然还是碰巧用了本地才发现也有这个错误,从而才能逐步排查到代理问题

总结：一  一般没有头绪或排查不到的错误都是环境问题引起的，极少是代码语法错误之类。这里由于粗心或者对axios
		根目录作用不熟悉而忽略了。
	 二  有效排查bug的手段极为重要，在使用他人工具或服务器出现问题时，应尽可能排除其他外部因素。
	 	故而在本地测试，不仅熟悉，而且隔离了很多未知因素，更易排查问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>时间：2022-12-5
背景：开发中国象棋的人机算法
bug: 人机算法不合理
类型：函数实现多处漏洞
花费时间：几天，某些细节思考过多，浪费时间，而且分析不出原因 

解决思路：
1 场景复现
2 分析该得分缘由

行动合理部分：
1 开发了绘制棋局函数，使情况更形象具体，辅助debug更有效

2 测试分析尽量从外部测试，优先定位错误的范围。然后不得已才从内部测试，查找漏洞。

3 尽量少修改已写代码，容易出错。

4 可把不相关代码注释掉，尽量减少其它影响。

5 没头绪时多猜测各种错误情况，万一灵光一闪。


结果：

1 炮检索走法函数有缺失，未考虑到和敌人隔着两个己方棋子的情况

2 兵检索走法函数有缺失，未考虑兵在己方阵营时被己方挡住兵前进情况

3 撤销走法函数有漏洞，会把很早之前的棋子给复活，应该只复活上一步死掉的棋子才对。
于是在每个棋子死亡时赋值e.depth来记录死亡时刻，但e.depth时递归的上下文变量，受到了子递归的影响，
导致该实现出错，费了好大功夫才查出漏洞。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bug类型" tabindex="-1"><a class="header-anchor" href="#bug类型" aria-hidden="true">#</a> bug类型</h2><h3 id="环境问题" tabindex="-1"><a class="header-anchor" href="#环境问题" aria-hidden="true">#</a> 环境问题</h3><p>特征：</p><p>自己代码能运行，别人代码运行错误。或者反过来别人可以，自己不行，而代码近乎相同。</p><p>解决：</p><p>1 删除扩展包重新安装。</p><p>2 copy坏代码到能运行的环境里，看能否运行</p><h3 id="url重定向导致请求超时" tabindex="-1"><a class="header-anchor" href="#url重定向导致请求超时" aria-hidden="true">#</a> URL重定向导致请求超时</h3><p>特征：</p><p>请求超时，自动断开，却不知进一步为何超时</p><p>解决：</p><p>先api工具或浏览器测试代码功能是否正常，再打印url是否正确</p><h2 id="经验" tabindex="-1"><a class="header-anchor" href="#经验" aria-hidden="true">#</a> 经验</h2><h3 id="遇到bug两步走" tabindex="-1"><a class="header-anchor" href="#遇到bug两步走" aria-hidden="true">#</a> 遇到bug两步走</h3><p>为找到问题位置和解决问题。第一步尤为重要，分两个小步骤</p><h4 id="寻找直接原因" tabindex="-1"><a class="header-anchor" href="#寻找直接原因" aria-hidden="true">#</a> 寻找直接原因</h4><p>先定位bug出现位置。通常报错里能看到bug具体位置，需要理解触发报错的直观因素，比如变量未定义，语法错误之类。可以通过打印或断点来验证。</p><h4 id="深入根本原因" tabindex="-1"><a class="header-anchor" href="#深入根本原因" aria-hidden="true">#</a> 深入根本原因</h4><p>但是直接原因只知道因为什么而报错，却不理解为什么会报错。故要更深一步理解问题，此步最为重要，想清楚才能解决问题。</p><ol><li>可用测试验证</li></ol><ul><li><p>打印一些信息</p></li><li><p>可使用控制变量法，先把不确定因素写死，填写个固定的常量，然后排查可变的因素，直到发现不符合预期的异常或发现问题。</p></li><li><p>多用外部测试，不改变源代码，进行环境隔绝</p></li></ul><ol start="2"><li><p>可用对比法</p><ul><li>先通过百度查找正确的写法（别人写的一般都没问题），引入后看是否有效，然后再对比发现自身问题。当别人的也无效，那就得考虑环境问题之类了。</li></ul></li><li><p>缩小排查范围</p><ul><li>当功能过多时，出现的问题可能是几种功能都有问题，互相影响产生的。这时可逐个单功能测试，测试用例要全。保证每个小功能正确，则大功能才可靠。</li><li>逐渐排查单功能后，便能缩小bug可能发生的范围，一步步逼死，直至bug露出水面。</li></ul></li></ol><h3 id="简化排查手段-更有效的验证问题" tabindex="-1"><a class="header-anchor" href="#简化排查手段-更有效的验证问题" aria-hidden="true">#</a> 简化排查手段，更有效的验证问题</h3><p>要尽可能隔绝其他因素对排查bug的影响。只检验某个核心功能的状态。</p><p>对一些变量可以使用常量代替，以排除绝对不是这个变量问题的嫌疑</p>`,30),a=[l];function r(v,u){return i(),n("div",null,a)}const b=e(s,[["render",r],["__file","我与bug.html.vue"]]);export{b as default};
