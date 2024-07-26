import{_ as e,W as a,X as i,a2 as d}from"./framework-5d92cd28.js";const n={},s=d(`<h2 id="geecache" tabindex="-1"><a class="header-anchor" href="#geecache" aria-hidden="true">#</a> GeeCache</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍：</h3><p>分布式缓存</p><h3 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点：</h3><p>LRU 缓存淘汰策略</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>最近最少使用，相对于仅考虑时间因素的 FIFO 和仅考虑访问频率的 LFU，LRU 算法可以认为是相对平衡的
一种淘汰算法。LRU 认为，如果数据最近被访问过，那么将来被访问的概率也会更高。LRU 算法的实现非常
简单，维护一个队列，如果某条记录被访问了，则移动到队尾，那么队首则是最近最少访问的数据，淘汰该条记录即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一致性哈希</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一致性哈希算法将 key 映射到 2^32 的空间中，将这个数字首尾相连，形成一个环。

计算节点/机器(通常使用节点的名称、编号和 IP 地址)的哈希值，放置在环上。
计算 key 的哈希值，放置在环上，顺时针寻找到的第一个节点，就是应选取的节点/机器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存雪崩、缓存击穿与缓存穿透</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>缓存雪崩：缓存在同一时刻全部失效，造成瞬时DB请求量大、压力骤增，引起雪崩。
		缓存雪崩通常因为缓存服务器宕机、缓存的 key 设置了相同的过期时间等引起。

缓存击穿：一个存在的key，在缓存过期的一刻，同时有大量的请求，这些请求都会击穿到 DB ，
		造成瞬时DB请求量大、压力骤增。

缓存穿透：查询一个不存在的数据，因为不存在则不会写到缓存中，所以每次都会去请求 DB，
		如果瞬间流量过大，穿透到 DB，导致宕机。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="难点" tabindex="-1"><a class="header-anchor" href="#难点" aria-hidden="true">#</a> 难点：</h3><h4 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h4><p>在总容量一定下，如何进行内存管理？</p><p>有先入先出策略、访问次数优先策略、最近最少使用策略。</p><p>每种策略的优缺点？</p><p>。。。</p><h4 id="远程连接" tabindex="-1"><a class="header-anchor" href="#远程连接" aria-hidden="true">#</a> 远程连接</h4><p>为什么要远程连接？</p><p>与从其他服务器中获取缓存，即分布式缓存的特点。若远程库中也无值，才从redis中取值。添加了中间服务器的缓存，使唯一的redis服务器使用压力减少</p><p>如何选择要连接的远程节点？</p><p>可以根据key值转化为ASKII码定位对应的远程节点，根据key的ASKII对总keys的库存（分布式缓存服务器总数量）长度取余，如此当遇到相同key时，便保证了连接相同的远程节点。但若分布式缓存服务器有宕机或添加，导致keys的长度改变，那么取余对应的结果都将改变，不稳定。故得使用一致性哈希</p><h4 id="并发缓存安全" tabindex="-1"><a class="header-anchor" href="#并发缓存安全" aria-hidden="true">#</a> 并发缓存安全</h4><p>缓存雪崩、缓存击穿与缓存穿透时怎么办？</p><p>加一个中间件，使用WaitGroup锁。第一次访问则新建锁，并存入map，之后再访问，由于map中有值则等待。</p><p>保证了对相同请求的数量限制</p>`,25),r=[s];function t(c,l){return a(),i("div",null,r)}const v=e(n,[["render",t],["__file","GeeCache.html.vue"]]);export{v as default};
