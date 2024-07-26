import{_ as p,W as i,X as o,Y as n,Z as s,a0 as e,a2 as t,C as l}from"./framework-5d92cd28.js";const c="/assets/image-20230221205128717-c63a2f3a.png",u={},r=t(`<h2 id="题解" tabindex="-1"><a class="header-anchor" href="#题解" aria-hidden="true">#</a> 题解</h2><h3 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在计算机科学中，数据结构是计算机中存储、组织数据的方式。

正确的数据结构选择可以提高算法的效率。在计算机程序设计的过程中，
选择适当的数据结构是一项重要工作。许多大型系统的编写经验显示，
程序设计的困难程度与最终成果的质量与表现，取决于是否选择了最适合的数据结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_136-只出现一次的数字" tabindex="-1"><a class="header-anchor" href="#_136-只出现一次的数字" aria-hidden="true">#</a> 136. 只出现一次的数字</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：给定一个非空整数数组，除了某个元素只出现一次以外，
	 其余每个元素均出现两次。找出那个只出现了一次的元素。
新思路：可以用异或查找单独项，前提是只存在唯一元素出现一次，其余元素出现两次。
原理：无论顺序，相同元素最终都会异或到，则结果为<span class="token number">000000</span>，而唯一存在的元素与<span class="token number">0</span>异或等于元素本身。
代码：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">singleNumber</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">for</span> num <span class="token keyword">in</span> nums<span class="token punctuation">:</span>
            a <span class="token operator">=</span> a <span class="token operator">^</span> num
        <span class="token keyword">return</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_169-多数元素" tabindex="-1"><a class="header-anchor" href="#_169-多数元素" aria-hidden="true">#</a> 169. 多数元素</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n<span class="token operator">/</span><span class="token number">2</span> ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
新思路：少用二级循环，此题用一重循环的摩尔投票法
原理：对拼消耗，遇到相同数计数加一，否则减一，若计数为零则换下一个元素继续对拼<span class="token punctuation">.</span>
由于多数元素大于一半，结果肯定计数不为零。
疑惑：计数变为负数怎么办？
解答：不会变为负数，更换下一元素后下一次遍历总会使计数加一
代码：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">majorityElement</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type nums: List[int]
        :rtype: int
        &quot;&quot;&quot;</span>
        num <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        count <span class="token operator">=</span> <span class="token number">1</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> num<span class="token punctuation">:</span>
                count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                count <span class="token operator">-=</span> <span class="token number">1</span>
                <span class="token keyword">if</span> count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                    num <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;count=&#39;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token keyword">return</span> num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d={id:"_15-三数之和",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#_15-三数之和","aria-hidden":"true"},"#",-1),v={href:"https://leetcode-cn.com/problems/3sum/",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>不通过：超出时间限制，还是<span class="token keyword">for</span>循环过多
本人代码<span class="token punctuation">(</span>写出了三种，可在letcode查看<span class="token punctuation">)</span>：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">threeSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type nums: List[int]
        :rtype: List[List[int]]
        &quot;&quot;&quot;</span>
        <span class="token comment"># 排序</span>
        nums<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment"># print(nums)</span>
        <span class="token comment"># 查找</span>
        lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token comment"># 去重</span>
            <span class="token keyword">if</span> <span class="token number">1</span> <span class="token operator">&lt;</span> i <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">2</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            <span class="token comment"># 大于零结束</span>
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                <span class="token comment"># 去重</span>
                <span class="token keyword">if</span> i <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">&lt;=</span> j <span class="token operator">&lt;</span> length <span class="token operator">-</span> <span class="token number">2</span> <span class="token keyword">and</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    <span class="token keyword">continue</span>
                res <span class="token operator">=</span> <span class="token operator">-</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token comment"># print(res, nums[j + 1:])</span>
                <span class="token keyword">if</span> res <span class="token keyword">in</span> nums<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
                    lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment"># print(lst)</span>
        <span class="token comment"># return lst</span>

        <span class="token comment"># 去重</span>
        new_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> lst<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">not</span> <span class="token keyword">in</span> new_lst<span class="token punctuation">:</span>
                new_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>lst<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token comment"># print(new_lst)</span>
        <span class="token keyword">return</span> new_lst
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b={id:"_70-爬楼梯",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_70-爬楼梯","aria-hidden":"true"},"#",-1),g={href:"https://leetcode-cn.com/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

本人思路：先遍历找出所有成功的一二阶阶数，在排列组合计算每一方法的组合数，最后汇总为结果（已成功）

新思路：仔细发现，第n个台阶只能从第n-1或者n-2个上来。
到第n-1个台阶的走法 + 第n-2个台阶的走法 = 到第n个台阶的走法，
已经知道了第1个和第2个台阶的走法，一路加上去。本质与斐波那契思路一致

摘抄案例和热评:
https://leetcode-cn.com/problems/climbing-stairs/comments/115749
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),_={id:"_56-合并区间",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#_56-合并区间","aria-hidden":"true"},"#",-1),y={href:"https://leetcode-cn.com/problems/merge-intervals/",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>描述：以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

原思路：碰壁了！

新思路：先排序，排序后能合并的区间一定连续。故之后就两种情况，能合并合并，不能合并则添加到数组末尾，
然后作为新的判断区间

题解：https://leetcode-cn.com/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode-solution/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),j={id:"_119-杨辉三角-ii",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#_119-杨辉三角-ii","aria-hidden":"true"},"#",-1),E={href:"https://leetcode-cn.com/problems/pascals-triangle-ii/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode-cn.com/problems/pascals-triangle-ii/solution/119-yang-hui-san-jiao-ii-python-by-sanct-zich/",target:"_blank",rel:"noopener noreferrer"},N=n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`题解中的r[j] = r[j] + r[j+1] ，后r[j]是i-1行的r[j]
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),L={id:"_59-螺旋矩阵-ii",tabindex:"-1"},z=n("a",{class:"header-anchor",href:"#_59-螺旋矩阵-ii","aria-hidden":"true"},"#",-1),S={href:"https://leetcode-cn.com/problems/spiral-matrix-ii/",target:"_blank",rel:"noopener noreferrer"},I=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>感受：简单的问题想复杂了，或者说想的不够透彻
一直按右下左上的顺序执行，故循环即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> 动态规划</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>动态规划常常适用于有重叠子问题和最优子结构性质的问题，并且记录所有子问题的结果，
因此动态规划方法所耗时间往往远少于朴素解法。

动态规划有自底向上和自顶向下两种解决问题的方式。自顶向下即记忆化递归，自底向上就是递推。

使用动态规划解决的问题有个明显的特点，一旦一个子问题的求解得到结果，以后的计算过程就不会修改它，
这样的特点叫做无后效性，求解问题的过程形成了一张有向无环图。动态规划只解决每个子问题一次，
具有天然剪枝的功能，从而减少计算量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),V={id:"_746-使用最小花费爬楼梯",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#_746-使用最小花费爬楼梯","aria-hidden":"true"},"#",-1),C={href:"https://leetcode-cn.com/problems/min-cost-climbing-stairs/",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost<span class="token punctuation">[</span>i<span class="token punctuation">]</span>（下标从 <span class="token number">0</span> 开始）。
每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。
请你找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 <span class="token number">0</span> 或 <span class="token number">1</span> 的元素作为初始阶梯。

原思路：不通！

新思路：不大懂

代码：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">minCostClimbingStairs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> cost<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type cost: List[int]
        :rtype: int
        &quot;&quot;&quot;</span>
        p1 <span class="token operator">=</span> <span class="token number">0</span>
        p2 <span class="token operator">=</span> <span class="token number">0</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>cost<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            p1<span class="token punctuation">,</span> p2 <span class="token operator">=</span> p2<span class="token punctuation">,</span> <span class="token builtin">min</span><span class="token punctuation">(</span>p2 <span class="token operator">+</span> cost<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> p1 <span class="token operator">+</span> cost<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
        <span class="token keyword">return</span> p2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T={id:"_198-打家劫舍-经典",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#_198-打家劫舍-经典","aria-hidden":"true"},"#",-1),D={href:"https://leetcode-cn.com/problems/house-robber/",target:"_blank",rel:"noopener noreferrer"},W=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，
系统会自动报警。给定一个代表每个房屋存放金额的非负整数数组，
计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。<span class="token punctuation">(</span>与上题使用最小花费爬楼梯思路类似<span class="token punctuation">)</span>

原思路：最大值，结果列表lst尾部n<span class="token operator">-</span><span class="token number">1</span>为最大值（当前第一套方案），n<span class="token operator">-</span><span class="token number">2</span>为之前第二套方案。若第二套加上
当前元素大于lst<span class="token punctuation">[</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>则最大值（当前第一套方案）更新为第二套加上当前元素，否则继续执行第一套方案
（解释不够清晰）
（思路正确，但遇到数组索引超标问题。因避免nums<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span>之类写法，使用nums<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>确定元素存在的写法）

代码：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">rob</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type nums: List[int]
        :rtype: int
        &quot;&quot;&quot;</span>
        p <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">elif</span> n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        p<span class="token punctuation">.</span>append<span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            p<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>p<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> p<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> p<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),J={id:"_740-删除并获得点数",tabindex:"-1"},M=n("a",{class:"header-anchor",href:"#_740-删除并获得点数","aria-hidden":"true"},"#",-1),O={href:"https://leetcode-cn.com/problems/delete-and-earn/",target:"_blank",rel:"noopener noreferrer"},X=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>描述：给你一个整数数组 nums ，你可以对它进行一些操作。
每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。
开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

总结：本质仍是动态，可转化为打家劫舍问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Y={id:"_55-跳跃游戏",tabindex:"-1"},Z=n("a",{class:"header-anchor",href:"#_55-跳跃游戏","aria-hidden":"true"},"#",-1),G={href:"https://leetcode-cn.com/problems/jump-game/",target:"_blank",rel:"noopener noreferrer"},H=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
判断你是否能够到达最后一个下标。

原思路：从后往前遍历，遇零则执行判断，要前面的数大于零坐标减当前坐标才能继续遍历，否则当坐标减到<span class="token operator">-</span><span class="token number">1</span>时
走不通，返回<span class="token boolean">False</span>（成功）

代码：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">canJump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type nums: List[int]
        :rtype: bool
        &quot;&quot;&quot;</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">if</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> n <span class="token operator">!=</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">elif</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">and</span> n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            k <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i
            <span class="token keyword">if</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
                j <span class="token operator">=</span> k <span class="token operator">-</span> <span class="token number">1</span>
                <span class="token keyword">while</span> <span class="token number">1</span><span class="token punctuation">:</span>
                    <span class="token keyword">if</span> j <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token boolean">False</span>
                    <span class="token keyword">if</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">+</span> k <span class="token operator">-</span> j<span class="token punctuation">:</span>
                        <span class="token keyword">break</span>
                    <span class="token keyword">else</span><span class="token punctuation">:</span>
                        j <span class="token operator">-=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K={id:"_45-跳跃游戏-ii",tabindex:"-1"},P=n("a",{class:"header-anchor",href:"#_45-跳跃游戏-ii","aria-hidden":"true"},"#",-1),Q={href:"https://leetcode-cn.com/problems/jump-game-ii/",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
数组中的每个元素代表你在该位置可以跳跃的最大长度。
你的目标是使用最少的跳跃次数到达数组的最后一个位置。
假设你总是可以到达数组的最后一个位置。

思路：每一元素都遍历，只要考虑每一跳所能达到的最远位置就行了，也就是每次都选择最远可达的点

总结：也是要求动态规划，有两套方案对比，谁优选谁，之后又更新两套方案。使结果总在最优中变化

代码：
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">jump</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type nums: List[int]
        :rtype: int
        &quot;&quot;&quot;</span>
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">0</span>
        step <span class="token operator">=</span> <span class="token number">0</span>
        reach <span class="token operator">=</span> <span class="token number">0</span>
        nextReach <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            nextReach <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>i <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> nextReach<span class="token punctuation">)</span>
            <span class="token keyword">if</span> nextReach <span class="token operator">&gt;=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span>
                step <span class="token operator">+=</span> <span class="token number">1</span>
                <span class="token keyword">return</span> step
            <span class="token keyword">if</span> i <span class="token operator">==</span> reach<span class="token punctuation">:</span>
                reach <span class="token operator">=</span> nextReach
                step <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),$={id:"_53-最大子序和",tabindex:"-1"},nn=n("a",{class:"header-anchor",href:"#_53-最大子序和","aria-hidden":"true"},"#",-1),sn={href:"https://leetcode-cn.com/problems/maximum-subarray/",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode-cn.com/problems/maximum-subarray/solution/zui-da-zi-xu-he-by-leetcode-solution/",target:"_blank",rel:"noopener noreferrer"},en=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>描述：给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

原思路：没想出

解题思路：
<span class="token number">1</span> 贪心算法  只要前面总和大于零就相加到当前元素，否则不加
<span class="token number">2</span> 动态规划  要前一元素大于零才相加到当前元素

代码：
贪心算法和动态规划定义都符合
<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">maxSubArray</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type nums: List[int]
        :rtype: int
        &quot;&quot;&quot;</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),tn={id:"_152-乘积最大子数组",tabindex:"-1"},pn=n("a",{class:"header-anchor",href:"#_152-乘积最大子数组","aria-hidden":"true"},"#",-1),on={href:"https://leetcode-cn.com/problems/maximum-product-subarray/",target:"_blank",rel:"noopener noreferrer"},ln=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>描述：给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），
并返回该子数组所对应的乘积。

思路：三个变量，一个记录最大数，一个记录最小数，一个记录结果。当前元素为负数时，最大最小数交换。
每一次都用max(结果变量，最大数)来更新结果变量
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),cn={id:"_19-正则表达式匹配",tabindex:"-1"},un=n("a",{class:"header-anchor",href:"#_19-正则表达式匹配","aria-hidden":"true"},"#",-1),rn={href:"https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/9a1ypc/",target:"_blank",rel:"noopener noreferrer"},dn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>状态定义： 设动态规划矩阵 dp ， dp[i][j] 代表字符串 s 的前 i 个字符和 p 的前 j 个字符能否匹配。

转移方程:  需要注意，由于 dp[0][0] 代表的是空字符的状态， 
		  因此 dp[i][j] 对应的添加字符是 s[i - 1] 和 p[j - 1] 。
          当 p[j - 1] = &#39;*&#39; 时， dp[i][j] 在当以下任一情况为 truetrue 时等于 truetrue ：

dp[i][j - 2]： 即将字符组合 p[j - 2] * 看作出现 0 次时，能否匹配；
dp[i - 1][j] 且 s[i - 1] = p[j - 2]: 即让字符 p[j - 2] 多出现 1 次时，能否匹配；
dp[i - 1][j] 且 p[j - 2] = &#39;.&#39;: 即让字符 &#39;.&#39; 多出现 1 次时，能否匹配；
当 p[j - 1] != &#39;*&#39; 时， dp[i][j] 在当以下任一情况为 true 时等于 true ：

dp[i - 1][j - 1] 且 s[i - 1] = p[j - 1]： 即让字符 p[j - 1] 多出现一次时，能否匹配；
dp[i - 1][j - 1] 且 p[j - 1] = &#39;.&#39;： 即将字符 . 看作字符 s[i - 1] 时，能否匹配；
初始化： 需要先初始化 dp 矩阵首行，以避免状态转移时索引越界。

dp[0][0] = true： 代表两个空字符串能够匹配。
dp[0][j] = dp[0][j - 2] 且 p[j - 1] = &#39;*&#39;： 
首行 s 为空字符串，因此当 p 的偶数位为 * 时才能够匹配（即让 p 的奇数位出现 0 次，保持 p 是空字符串）。因此，循环遍历字符串 p ，步长为 2（即只看偶数位）。
返回值： dp 矩阵右下角字符，代表字符串 s 和 p 能否匹配

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剑指offer" tabindex="-1"><a class="header-anchor" href="#剑指offer" aria-hidden="true">#</a> 剑指offer</h3>`,2),kn={id:"_09-用两个栈实现队列",tabindex:"-1"},vn=n("a",{class:"header-anchor",href:"#_09-用两个栈实现队列","aria-hidden":"true"},"#",-1),mn={href:"https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/",target:"_blank",rel:"noopener noreferrer"},bn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如何用两个栈模拟队列的先进先出的增删特性？
一个栈模拟添加
第二个栈模拟删除，当要删除时，若第二个栈为空，则将第一个栈全部弹出到第二个栈，则第二个栈顶为队列的
队头元素，故可以用栈特性来删除对头元素。若第二个栈不为空，则省去弹出操作，直接删除栈顶元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h2><h3 id="特征" tabindex="-1"><a class="header-anchor" href="#特征" aria-hidden="true">#</a> 特征</h3><p>在升序数组中查找目标数</p><p>或者查找目标数在升序数组中的边界</p><h2 id="动态规划-1" tabindex="-1"><a class="header-anchor" href="#动态规划-1" aria-hidden="true">#</a> 动态规划</h2><h3 id="特征-1" tabindex="-1"><a class="header-anchor" href="#特征-1" aria-hidden="true">#</a> 特征</h3><p>需要找最优解</p><p>原问题可分割成若干个子问题，每个子问题都得出最优解，汇总起来得到最终结果</p><p>使用回溯时间复杂度为O(2^n),为指数级别，容易超时，可使用字典记忆化搜索来减少时间</p><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><p>先找好dp的最小安全区，然后每个子问题都基于上一个安全区做出最优选择</p><h3 id="五步走" tabindex="-1"><a class="header-anchor" href="#五步走" aria-hidden="true">#</a> 五步走</h3>`,13),hn={href:"https://programmercarl.com/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%9A%84%E8%A7%A3%E9%A2%98%E6%AD%A5%E9%AA%A4",target:"_blank",rel:"noopener noreferrer"},gn=t(`<ol><li>确定dp数组（dp table）以及下标的含义</li><li>确定递推公式</li><li>dp数组如何初始化</li><li>确定遍历顺序</li><li>举例推导dp数组</li></ol><h2 id="背包问题" tabindex="-1"><a class="header-anchor" href="#背包问题" aria-hidden="true">#</a> 背包问题</h2><h3 id="_01背包问题" tabindex="-1"><a class="header-anchor" href="#_01背包问题" aria-hidden="true">#</a> 01背包问题</h3><h4 id="特征-2" tabindex="-1"><a class="header-anchor" href="#特征-2" aria-hidden="true">#</a> 特征</h4><p>从数组中选某些数，其和接近数组中剩余数,每个数只能用一次</p><h4 id="思路-1" tabindex="-1"><a class="header-anchor" href="#思路-1" aria-hidden="true">#</a> 思路</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>找出dp的容量后，最外层遍历扩容的n就是和容量相关的数，使得遍历完就能得到dp[n]作为结果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 找出目标和target，一般是总数除2，target同时作为dp数组容量，即背包的最大容量

2 每添加一个元素到要规划的数组中，那么dp就根据之前规划包装好的背包，来规划当前元素能放进哪些背包

3 每个元素放进某足够容量背包时，有两个选择，
  一 不放入背包，则当前dp背包继承之前位置的背包值。
  二 放入背包，则当前dp背包等于上次规划的符合的背包值  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>要运用背包特性做题，比如背包容量为n时最多能装多少物品或者
容量为n时装满物品有多少种方法，
然后想想能否运用这个特性解题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h4>`,10),fn={href:"https://leetcode-cn.com/problems/target-sum/",target:"_blank",rel:"noopener noreferrer"},_n=t(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">findTargetSumWays1</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> target <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// 计算总和和添加特殊条件</span>
	sum <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> v
	<span class="token punctuation">}</span>
	diff<span class="token punctuation">,</span> n <span class="token operator">:=</span> sum<span class="token operator">-</span>target<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
	<span class="token keyword">if</span> diff <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> diff<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 初始化，边界条件</span>
	neg <span class="token operator">:=</span> diff <span class="token operator">/</span> <span class="token number">2</span>
	dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token comment">// 外层代表每次加入的数，逐渐扩容的作用；内层代表因这个数的加入而重新规划背包</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> neg<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> j<span class="token operator">--</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+=</span> dp<span class="token punctuation">[</span>j<span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>neg<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="完全背包" tabindex="-1"><a class="header-anchor" href="#完全背包" aria-hidden="true">#</a> 完全背包</h3><h4 id="特征-3" tabindex="-1"><a class="header-anchor" href="#特征-3" aria-hidden="true">#</a> 特征</h4><p>从数组中选某些数，使其结果等于目标数，每个数可以无数次</p><h4 id="思路-2" tabindex="-1"><a class="header-anchor" href="#思路-2" aria-hidden="true">#</a> 思路</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>循环顺序要根据结果是组合还是要求排列
若为组合，则先遍历物品，再从前往后遍历容量。
遍历物品是为了将物品均摊到所有解中，从前往后遍历是为了重复放入该物品得出更多解

若为排列，则先遍历容量，再遍历物品
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="架构-1" tabindex="-1"><a class="header-anchor" href="#架构-1" aria-hidden="true">#</a> 架构</h4>`,7),xn={href:"https://leetcode-cn.com/problems/coin-change-2/",target:"_blank",rel:"noopener noreferrer"},yn=t(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">coinChange2</span><span class="token punctuation">(</span>coins <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> amount <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token comment">// dp初始化</span>
	dp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> amount<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> amount<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> amount <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token comment">// 外层为dp的扩容，每次容量加1，直至目标容量；里层为从要选的数中挑选出最优的解赋值到dp的最新容量</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> amount<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> j <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>coins<span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> i <span class="token operator">&gt;=</span> coins<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Min</span><span class="token punctuation">(</span><span class="token function">float64</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">float64</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">-</span>coins<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span> <span class="token operator">&gt;</span> amount <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>amount<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口" aria-hidden="true">#</a> 滑动窗口</h2><h3 id="特征-4" tabindex="-1"><a class="header-anchor" href="#特征-4" aria-hidden="true">#</a> 特征</h3><p>从数组中找最优的连续子数组</p><h3 id="思路-3" tabindex="-1"><a class="header-anchor" href="#思路-3" aria-hidden="true">#</a> 思路</h3><p>l, r 为窗口边界，开区间[l, r)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>l, r, res, sum := 0, -1, len(nums)+1, 0

// 循环开始
for l &lt; len(nums) {
	// 优先窗口能扩张的条件，移动右边框。否则就移动左边框了
    if r &lt; len(nums)-1 &amp;&amp; sum &lt; target {
        r++
        sum += nums[r]
    } else {
        sum -= nums[l]
        l++
    }

	// 每次窗口改变完判断下当前窗口是否符合条件并得出更优的结果
    if sum &gt;= target {
        res = min(res, r-l+1)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表问题" tabindex="-1"><a class="header-anchor" href="#链表问题" aria-hidden="true">#</a> 链表问题</h2><h3 id="思路-4" tabindex="-1"><a class="header-anchor" href="#思路-4" aria-hidden="true">#</a> 思路</h3><p>对于要改变头结点的题目，最好添加dummyNode哑节点来连接头结点，使头结点失去特殊性，统一了链表的操作。最后返回dummyNode.Next即可</p><p>pre区间为[dummy, end], cur区间为[head, end.Next], dummy为哑节点，end是链表最后一个节点。故end.Next为nil。保证了cur对每个节点得操作，又使得pre保存了每个结果，最终返回</p><p>对于两条链表共同得操作，可以放一块循环,如下。然后分别对两链表不为空情况下判断</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for l1 != nil || l2 != nil {
    n1, n2 := 0, 0
    if l1 != nil {
        n1 = l1.Val
        l1 = l1.Next
    }

    if l2 != nil {
        n2 = l2.Val
        l2 = l2.Next
    }

    sum := n1 + n2 + carry
    sum, carry = sum%10, sum/10

    if head == nil {
        head = &amp;ListNode{sum, nil}
        tail = head
    } else {
        tail.Next = &amp;ListNode{sum, nil}
        tail = tail.Next
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要逆序操作的链表，可以使用栈来辅助</p><p>链表递归，带入最后和倒数第二个函数的情况更容易解题。在倒数第二个函数中能获得当前节点和下一个节点</p><h2 id="树问题" tabindex="-1"><a class="header-anchor" href="#树问题" aria-hidden="true">#</a> 树问题</h2><h3 id="思路-5" tabindex="-1"><a class="header-anchor" href="#思路-5" aria-hidden="true">#</a> 思路</h3><p>水平遍历使用队列无法计算结点所处层数时，可以重构结点，添加个level属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type treeNode struct {
    node  *TreeNode
    level int
}
q := []*treeNode{{root, 0}}
q = append(q, &amp;treeNode{n.node.Left, n.level + 1}) // 之后结点level赋值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>树的后序遍历可以从子结点出发，自底向上，常用于动态规划，dfs遍历</p><p>节点无法判断自身为左节点还是右节点，需要父节点来判断</p><p>常用用递归做，阅读题目后得先总结下题目要求和结果有什么特性。</p><p>编代码前先构想下图形化流程，先假想一颗最简单的二叉树试验构想。然后思考用什么方式遍历二叉树。一般单层递归只需考虑当前节点如何操作。</p><p>叶子节点有特殊性，可以判断出来，根节点和普通节点类似，无法判断。</p><p>写在递归后面的操作一般是<strong>回溯</strong>或者<strong>用于记录已经递归之后该节点状态</strong></p><h3 id="二分搜索树" tabindex="-1"><a class="header-anchor" href="#二分搜索树" aria-hidden="true">#</a> 二分搜索树</h3><h4 id="特征-5" tabindex="-1"><a class="header-anchor" href="#特征-5" aria-hidden="true">#</a> 特征</h4><ul><li>节点的左子树只包含 <strong>小于</strong> 当前节点的数。</li><li>节点的右子树只包含 <strong>大于</strong> 当前节点的数。</li><li>所有左子树和右子树自身必须也是二叉搜索树。</li><li>有序数组生成，中序遍历后即遍历出原有序数组</li></ul><h4 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧" aria-hidden="true">#</a> 技巧</h4><p>有时候将搜索树问题想象成有序数组更容易想出思路</p><p>需要用两个指针来得到三个结点信息，最好用循环</p><p>删除结点只能从头结点开始重构</p><p>可以用parent储存每个结点的父亲结点，key为结点值</p><p>对祖先类题目很好用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>parent := make(map[int]*TreeNode, 0)
parent[node.Left.Val] = node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于要跨多个结点情况，应该用递归</p><h3 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树" aria-hidden="true">#</a> 完全二叉树</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><figure><img src="`+c+`" alt="image-20230221205128717" tabindex="0" loading="lazy"><figcaption>image-20230221205128717</figcaption></figure><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h4><p>一颗完全二叉树，要么是满二叉树，要么不是满二叉树。是满二叉树则可以直接公式计算总节点数。</p><p>那如何快速判断一棵树是否为满二叉树呢，满二叉树的左侧节点数一定等于右侧节点数，所以通过循环</p><p>分别统计左右侧的节点数即可。</p><h2 id="图问题" tabindex="-1"><a class="header-anchor" href="#图问题" aria-hidden="true">#</a> 图问题</h2><h3 id="特征-6" tabindex="-1"><a class="header-anchor" href="#特征-6" aria-hidden="true">#</a> 特征</h3><p>需要将每个元素串联起来，子节点数量不限，可能有闭环，要求找出最小路径</p><h3 id="思路-6" tabindex="-1"><a class="header-anchor" href="#思路-6" aria-hidden="true">#</a> 思路</h3><p>定义一个图的结点类型,如下，每个结点step表示寻找的次数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type vertex struct {
    num  int
    step int
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过队列和visited，广度搜索,从目标逐层向下，知道符合要求返回。最先返回的即为最优结果</p><h2 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> 栈和队列</h2><h3 id="单调队列" tabindex="-1"><a class="header-anchor" href="#单调队列" aria-hidden="true">#</a> 单调队列</h3><p>特点：里面元素都是单调递减或递增排序，要实现三个方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pop(x int): 若队列不为空且x等于队头元素，则出队
push(x int): 若队列不为空且x大于队尾元素，则队尾元素出队，重复此过程。最后在队尾入队x
front():返回队头元素，即最大或最小值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排列组合问题" tabindex="-1"><a class="header-anchor" href="#排列组合问题" aria-hidden="true">#</a> 排列组合问题</h2><h3 id="特征-7" tabindex="-1"><a class="header-anchor" href="#特征-7" aria-hidden="true">#</a> 特征</h3><p>分两类，组合区分顺序排列 ，组合不区分顺序排列</p><h4 id="a-组合区分顺序排列" tabindex="-1"><a class="header-anchor" href="#a-组合区分顺序排列" aria-hidden="true">#</a> A (组合区分顺序排列)</h4><p>子结点的选择范围和数量都是固定的。选择范围只随着父节点的不同而变化</p><h4 id="c-组合不区分顺序排列" tabindex="-1"><a class="header-anchor" href="#c-组合不区分顺序排列" aria-hidden="true">#</a> C(组合不区分顺序排列)</h4><p>子节点的选择范围会根据兄弟结点的情况而变化，故通常用for循环的start到end的循环次数来限制选择范围</p><h3 id="技巧-1" tabindex="-1"><a class="header-anchor" href="#技巧-1" aria-hidden="true">#</a> 技巧</h3><p>用简单例子画出一棵树，再分析树的广度和深度上的特点</p><p>在for循环中用if来限制进入递归。只有子串符合情况才允许下一层递归</p><p>当前层循环递归完后，为了不影响当前层的剩余的循环，记得把变量visit复原</p><p>为提高回溯效率，可以记忆化字典辅助</p><p>若集合中有重复元素，且要求结果不能重复，则同一树枝上的节点是可以重复的，但同一层级的节点是不能重复的。因为这样会得到和相同节点同样的结果。</p><p>若当前层的元素选择会影响到当前层剩余循环的选择范围，则应定义一个局部字典来辅助（组合问题）</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>use <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>candidates<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 循环中使用，循环数组要先排序</span>
<span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> use<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> candidates<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    use<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">continue</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分割问题主要看当前层循环进行多种方式分割，取字符串s[start: i+1]部分</p><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>使用切片当递归的参数时，要注意指针引用问题，使用copy拷贝一份新数据传入即可 。或者在传入结果时结构的传入</p><h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">permute</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
	ans <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 全局储存结果</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> ans
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dfs</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> part <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 结果储存并返回</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ans <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>ans<span class="token punctuation">,</span> part<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        part <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>part<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 添加当前选择</span>

        <span class="token function">dfs</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> part<span class="token punctuation">)</span> <span class="token comment">// 深度递归</span>

        part <span class="token operator">=</span> part<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token function">len</span><span class="token punctuation">(</span>part<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 撤销选择</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二维平面问题" tabindex="-1"><a class="header-anchor" href="#二维平面问题" aria-hidden="true">#</a> 二维平面问题</h2><h3 id="技巧-2" tabindex="-1"><a class="header-anchor" href="#技巧-2" aria-hidden="true">#</a> 技巧</h3><p>可以改变矩阵的值来代表是否访问过，就不用visit</p><h2 id="递归与回溯问题" tabindex="-1"><a class="header-anchor" href="#递归与回溯问题" aria-hidden="true">#</a> 递归与回溯问题</h2><h3 id="特征-8" tabindex="-1"><a class="header-anchor" href="#特征-8" aria-hidden="true">#</a> 特征</h3><p>给定数据，要求找出所有组合时。</p><p>明显暴力循环可以解决部分，但被超时限制。因此需要递归回溯优化</p><p>递归回溯模型大部分是一个树形</p><h3 id="技巧-3" tabindex="-1"><a class="header-anchor" href="#技巧-3" aria-hidden="true">#</a> 技巧</h3><p>由于需要递归时额外参数，因此得定义一个递归函数。函数的终止条件为当前组合长度等于最大长度时</p><p>否则递归函数中继续<strong>循环</strong>的调用递归函数。</p><p>回溯一般是由很多个线性递归组合起来的大递归，因此通常循环调用</p><p>递归中若元素使用有冲突，即用过了后面递归就不能使用，则可以用visited来跟踪递归元素的状态。</p><p>当然递归完该元素后得将visited恢复状态，即回溯</p><h2 id="零散算法" tabindex="-1"><a class="header-anchor" href="#零散算法" aria-hidden="true">#</a> 零散算法</h2><h3 id="常用的排序算法总结" tabindex="-1"><a class="header-anchor" href="#常用的排序算法总结" aria-hidden="true">#</a> 常用的排序算法总结</h3>`,90),wn={href:"https://zhuanlan.zhihu.com/p/40695917",target:"_blank",rel:"noopener noreferrer"},jn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>冒泡，选择，快速，归并要了解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="二分查找-1" tabindex="-1"><a class="header-anchor" href="#二分查找-1" aria-hidden="true">#</a> 二分查找</h3>`,2),qn={href:"https://zhuanlan.zhihu.com/p/73051709",target:"_blank",rel:"noopener noreferrer"},En=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在有序表中实现快速搜索
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="前缀和-差分数组" tabindex="-1"><a class="header-anchor" href="#前缀和-差分数组" aria-hidden="true">#</a> 前缀和/差分数组</h3>`,2),An={href:"https://zhuanlan.zhihu.com/p/301509170",target:"_blank",rel:"noopener noreferrer"},Nn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在原数组不变下，频繁需要计算累加或者元素增减时可用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h3>`,2),Ln={href:"https://zhuanlan.zhihu.com/p/102277869",target:"_blank",rel:"noopener noreferrer"},zn=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>了解二进制的基本运算
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="搜索思想——dfs-bfs" tabindex="-1"><a class="header-anchor" href="#搜索思想——dfs-bfs" aria-hidden="true">#</a> 搜索思想——DFS &amp; BFS</h3>`,2),Sn={href:"https://zhuanlan.zhihu.com/p/24986203",target:"_blank",rel:"noopener noreferrer"},In=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>广度搜索和深度搜索
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="刷题经验" tabindex="-1"><a class="header-anchor" href="#刷题经验" aria-hidden="true">#</a> 刷题经验</h2><p>思路要活跃起来，把问题和规律想到一定深度。前几步思维不要回溯看是否思考正确，而是尽可能逐渐深入解决一个个问题。先想清楚实现过程，再想编码问题。</p><p>已按思路写出代码，但未符合预期.</p><p>先审视下思路是否正确，代码是否有问题。但一般没作用，此时得通过打印，让机器告诉自己哪里错了</p><p>每个变量有自己的定义，违反变量定义的编码不写。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,7);function Vn(Bn,Cn){const a=l("ExternalLinkIcon");return i(),o("div",null,[r,n("h4",d,[k,s(),n("a",v,[s("15. 三数之和"),e(a)])]),m,n("h4",b,[h,s(),n("a",g,[s("70. 爬楼梯"),e(a)])]),f,n("h4",_,[x,s(),n("a",y,[s("56. 合并区间"),e(a)])]),w,n("h4",j,[q,s(),n("a",E,[s("119. 杨辉三角 II"),e(a)])]),n("p",null,[n("a",A,[s("题解"),e(a)])]),N,n("h4",L,[z,s(),n("a",S,[s("59. 螺旋矩阵 II"),e(a)])]),I,n("h4",V,[B,s(),n("a",C,[s("746. 使用最小花费爬楼梯"),e(a)])]),F,n("h4",T,[R,s(),n("a",D,[s("198. 打家劫舍"),e(a)]),s("（经典）")]),W,n("h4",J,[M,s(),n("a",O,[s("740. 删除并获得点数"),e(a)])]),X,n("h4",Y,[Z,s(),n("a",G,[s("55. 跳跃游戏"),e(a)])]),H,n("h4",K,[P,s(),n("a",Q,[s("45. 跳跃游戏 II"),e(a)])]),U,n("h4",$,[nn,s(),n("a",sn,[s("53. 最大子序和"),e(a)])]),n("p",null,[s("题解："),n("a",an,[s("最大子序和"),e(a)])]),en,n("h4",tn,[pn,s(),n("a",on,[s("152. 乘积最大子数组"),e(a)])]),ln,n("h4",cn,[un,s(),n("a",rn,[s("19.正则表达式匹配"),e(a)])]),dn,n("h4",kn,[vn,s(),n("a",mn,[s("09. 用两个栈实现队列"),e(a)])]),bn,n("p",null,[n("a",hn,[s("网址"),e(a)])]),gn,n("p",null,[n("a",fn,[s("494目标和"),e(a)])]),_n,n("p",null,[n("a",xn,[s("518. 零钱兑换 II"),e(a)])]),yn,n("p",null,[n("a",wn,[s("网址"),e(a)])]),jn,n("p",null,[n("a",qn,[s("网址"),e(a)])]),En,n("p",null,[n("a",An,[s("网址"),e(a)])]),Nn,n("p",null,[n("a",Ln,[s("网址"),e(a)])]),zn,n("p",null,[n("a",Sn,[s("网址"),e(a)])]),In])}const Tn=p(u,[["render",Vn],["__file","Letcode刷题总结.html.vue"]]);export{Tn as default};
