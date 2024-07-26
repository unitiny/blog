import{_ as i,W as a,X as r,Y as e,Z as d,a0 as l,a2 as s,C as t}from"./framework-5d92cd28.js";const c="/assets/image-20220919104555343-72610f62.png",v={},u={href:"https://juejin.cn/post/7095581880200167432",target:"_blank",rel:"noopener noreferrer"},m=s(`<h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li><p>工厂，产品都看作对象，先抽象出各自的父级接口，即所有该对象都具备的功能</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Cache 抽象父类产品接口
type Cache interface {
	Set(key, value string)
	Get(key string) string
}

// Factory 抽象父类工厂接口
type Factory interface {
	Create() Cache
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>然后对每个工厂和每个产品具体实现，从而实现每个对象的特殊性</p></li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func TestFactory(t *testing.T) {
	var Factory Factory
	Factory = new(RedisFactory)

	redis := Factory.Create()
	redis.Set(&quot;abc&quot;, &quot;123&quot;)
	fmt.Println(redis.Get(&quot;abc&quot;))

	Factory = new(MemCacheFactory)
	memCache := Factory.Create()
	memCache.Set(&quot;efg&quot;, &quot;456&quot;)
	fmt.Println(memCache.Get(&quot;efg&quot;))
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>每个功能界限明了，对外用户只需暴露接口，使用方便</p><h2 id="装饰模式" tabindex="-1"><a class="header-anchor" href="#装饰模式" aria-hidden="true">#</a> 装饰模式</h2><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h3><ul><li><p>用一个结构体作总控制器，储存装饰器和核心业务，curMW为使用装饰器的索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type Engine struct {
   curMW int
   mw    []middleWare
   HandleFunc
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用递归结构，层层调用装饰器，装饰器完成功能后再返回控制器函数，直到调用核心业务函数。</p><p>这阶段属于业务前的装饰器功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func (e *Engine) Controller(w http.ResponseWriter, r *http.Request) error {
	if e.curMW == len(e.mw)-1 {
		defer func() {
			e.curMW = -1
		}()
		return e.HandleFunc(w, r)
	}

	e.curMW++
	err := e.mw[e.curMW](w, r)
	if err != nil {
		return err
	}

	return nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>业务后的功能则使用defer来处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func (e *Engine) useTime(w http.ResponseWriter, r *http.Request) error {
	log.Println(&quot;useTime start&quot;)
	startTime := time.Now()

	defer func() {
		log.Println(&quot;spend Time &quot;, time.Since(startTime))
	}()
	return e.Controller(w, r)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h3><p>多用于中间件的实现</p><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h3><p>根据不同的使用场景，使用不同的策略。用户主要使用父类管理</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><ul><li><p>抽象父类管理器，面向客户使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// LoggerManager 父类管理器
type LoggerManager struct {
	Logging
}

// Logging 抽象父类使用接口（功能）
type Logging interface {
	Info()
	Error()
}

func NewLoggerManager(l Logging) *LoggerManager {
	return &amp;LoggerManager{l}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现具体子类方法，然后父类获取具体方法给客户使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Logger 具体实现子类
type Logger struct {
}

func (l *Logger) Info() {
	fmt.Println(&quot;logger Info 日志&quot;)
}

func (l *Logger) Error() {
	fmt.Println(&quot;logger Error 日志&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>客户使用只需更换父类中的子类对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func TestLoggerManager(t *testing.T) {
	logger := &amp;Logger{}
	loggerManager := NewLoggerManager(logger)
	loggerManager.Info()
	loggerManager.Error()

	dba := &amp;DBA{}
	loggerManager.Logging = dba
	loggerManager.Info()
	loggerManager.Error()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2" aria-hidden="true">#</a> 总结</h3><figure><img src="`+c+'" alt="image-20220919104555343" tabindex="0" loading="lazy"><figcaption>image-20220919104555343</figcaption></figure>',19);function o(g,b){const n=t("ExternalLinkIcon");return a(),r("div",null,[e("p",null,[e("a",u,[d("学习网址"),l(n)])]),m])}const p=i(v,[["render",o],["__file","设计模式.html.vue"]]);export{p as default};
