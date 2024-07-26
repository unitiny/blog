import{_ as s,W as r,X as l,Y as e,Z as a,a0 as d,a2 as i,C as t}from"./framework-5d92cd28.js";const c={},u=e("h1",{id:"mysql-笔记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql-笔记","aria-hidden":"true"},"#"),a(" MySQL 笔记")],-1),h=e("h2",{id:"使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),a(" 使用")],-1),o={href:"https://www.cnblogs.com/winton-nfs/p/11524007.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://blog.csdn.net/lihua5419/article/details/73881837/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.php.cn/jishu/mysql/409664.html",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>启动 mysql -u root -p 要有设置环境变量后</p><p>ctrl+c 强行终止进程</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="表格相关" tabindex="-1"><a class="header-anchor" href="#表格相关" aria-hidden="true">#</a> 表格相关</h3><ul><li><p>show databases 展示数据</p></li><li><p>show create table inventory; 展示创建表inventory的sql语句</p></li><li><p>use school 使用学校这个表</p></li><li><p>show tables 展示所有学校表里的表格名</p></li><li><p>describe student 展示表格名为student 的数据</p></li><li><p>create databases 名 创建表单</p></li><li><p>drop 删除表格</p></li><li><p>修改字段格式(了解)</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alter table goodstudent1 modify age varchar(10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><p>插入表格goodstudent1的name和sex字段多个值</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>INSERT INTO \`goodstudent1\`(\`name\`,\`sex\`) VALUES(&#39;张山&#39;,&#39;男&#39;),(&#39;阿瑟&#39;,&#39;女&#39;),(&#39;kk&#39;,&#39;女&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>UPDATE goodstudent SET name=&#39;张狂&#39; WHERE id=2;
UPDATE goodstudent SET sex=&#39;男&#39; WHERE id&lt;15;
UPDATE student SET birthday=CURRENT DATE WHERE Id BETWEEN 1 AND 2
UPDATE student SET age=12 WHERE id!=3 AND hobby=&#39;dfsa&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3><p>删除chat表中符合 from=&#39;小李&#39; 和 to=&#39;小明&#39;条件的字段</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELETE FROM chat WHERE \`from\`=&#39;小李&#39; AND \`to\`=&#39;小明&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3><p>格式： select 列名 as 改名 from 表</p><h4 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> <strong>模糊查询</strong></h4><ul><li>like 两种写法 返回值为1或零</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>// 查找subject表的subjectname字段其中是否含有’数学‘这一关键字
SELECT \`subjectname\` LIKE &#39;%数学%&#39; FROM \`subject\`  
SELECT \`subjectname\` FROM \`subject\` WHERE \`subjectname\` LIKE &#39;%数学%&#39;
// 对整型数据的模糊搜索
SELECT * FROM fix_info WHERE CAST(fix_id as VARCHAR(19)) LIKE &#39;%{$name}%&#39;;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>in 要全名</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT \`subjectname\` FROM \`subject\` WHERE \`subjectname\` IN (&#39;Java程序设计-1&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="联表查询" tabindex="-1"><a class="header-anchor" href="#联表查询" aria-hidden="true">#</a> 联表查询</h4><p>inner join 只要找到符合条件的都写上</p><h4 id="升降序" tabindex="-1"><a class="header-anchor" href="#升降序" aria-hidden="true">#</a> 升降序</h4><p>order by 字段名 DESC/ASC 降/升</p><h4 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h4><p>limit 10，5； 从第十条数据开始，每页五条</p><h4 id="if函数" tabindex="-1"><a class="header-anchor" href="#if函数" aria-hidden="true">#</a> if函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IF(express, 1, 2) # 如果express为true，返回1，否则返回2.可嵌套使用if
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="when函数" tabindex="-1"><a class="header-anchor" href="#when函数" aria-hidden="true">#</a> when函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>case when employee_id%2=1 and name not like &quot;M%&quot; then salary
    else 0
end    
# 适用于多条件批量更新操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mod函数" tabindex="-1"><a class="header-anchor" href="#mod函数" aria-hidden="true">#</a> mod函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mod(num, 2) = 1 # 即num % 2 == 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="left函数" tabindex="-1"><a class="header-anchor" href="#left函数" aria-hidden="true">#</a> left函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>left(name, 1) != &quot;M&quot; # 判断name的第一个字母不为M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="case函数" tabindex="-1"><a class="header-anchor" href="#case函数" aria-hidden="true">#</a> case函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT employee_id,
(CASE WHEN MOD(employee_id,2)!=0 AND LEFT(name,1)!=&#39;M&#39; THEN salary
     WHEN MOD(employee_id,2)=0 OR LEFT(name,1)=&#39;M&#39; THEN 0
END) bonus
FROM Employees
ORDER BY employee_id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="regexp函数" tabindex="-1"><a class="header-anchor" href="#regexp函数" aria-hidden="true">#</a> regexp函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>regexp &quot;^[^M]&quot; # 正则，匹配首字母非M的元素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="upper-lower函数" tabindex="-1"><a class="header-anchor" href="#upper-lower函数" aria-hidden="true">#</a> upper, lower函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>转换大小写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="length函数" tabindex="-1"><a class="header-anchor" href="#length函数" aria-hidden="true">#</a> length函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查询字符串长度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="concat函数" tabindex="-1"><a class="header-anchor" href="#concat函数" aria-hidden="true">#</a> concat函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>连接两字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="substring函数" tabindex="-1"><a class="header-anchor" href="#substring函数" aria-hidden="true">#</a> substring函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SUBSTRING(str, begin, end) # 截取字符串 begin并不是下标
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="group-concat-函数" tabindex="-1"><a class="header-anchor" href="#group-concat-函数" aria-hidden="true">#</a> group_concat() 函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 拼接字符串
GROUP_CONCAT(DISTINCT score ORDER BY score DESC SEPARATOR &quot;;&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="datediff-函数" tabindex="-1"><a class="header-anchor" href="#datediff-函数" aria-hidden="true">#</a> datediff() 函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT DATEDIFF(&#39;2007-12-31 23:59:59&#39;,&#39;2007-12-30&#39;); # 计算日期差值，结果为1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3><h4 id="explain" tabindex="-1"><a class="header-anchor" href="#explain" aria-hidden="true">#</a> explain</h4><p>explain + sql语句，解释sql的执行的详细数据</p><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2><h3 id="设置日期格式" tabindex="-1"><a class="header-anchor" href="#设置日期格式" aria-hidden="true">#</a> 设置日期格式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>年月日        类型 date
年月日时分秒   类型 datetime
时分秒        类型 time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><ul><li>1064：语法错误</li></ul><p>观察,;\`\`是否使用正确</p><ul><li>1062：Duplicate entry &#39;2&#39; for key &#39;goodstudent1.PRIMARY&#39;</li></ul><p>id重复 把表格改为id自增，且不用插入id，系统自动配给。</p><ul><li>登录报错</li></ul>`,62),p={href:"https://blog.csdn.net/lihua5419/article/details/80394716",target:"_blank",rel:"noopener noreferrer"},g=e("ul",null,[e("li",null,"ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061) 无法连接数据库")],-1),x={href:"https://blog.csdn.net/chen97_08/article/details/81484286",target:"_blank",rel:"noopener noreferrer"},f=e("ul",null,[e("li",null,"执行sql语句但不更新数据库")],-1),_={href:"https://blog.csdn.net/qq_28602957/article/details/51019267",target:"_blank",rel:"noopener noreferrer"},E=e("ul",null,[e("li",null,"错误：undefined function xxx()")],-1),y=e("p",null,"修改php.ini相关扩展，一般是删除前面；分号",-1),q={href:"https://zhidao.baidu.com/question/938079074590093492.html",target:"_blank",rel:"noopener noreferrer"},R=i(`<ul><li><p>You can&#39;t specify target table &#39;p1&#39; for update in FROM clause</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不能在select表后更新或删除表，可能导致select得到的表随着更新而改变了。
可以再select外一层再加一层select，此时得到的是一张新的表，不用担心源表修改而引起查询表的变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h2>`,2),T={href:"https://blog.csdn.net/qq_38311489/article/details/84255532",target:"_blank",rel:"noopener noreferrer"},S=i(`<p>预编译为什么能防止sql注入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>预编译方式能防范sql注入的原理是:在sql参数未注入之前，提前对sql语句进行预编译，
后面注入的参数将不会再进行sql编译。即后面注入进来的参数系统将不会认为它会是一条SQL语句，
而默认其是一个参数。由此就知道为什么预编译可以防止sql注入了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>group by问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用 group by 分组后,查询的列表将按照主键的默认 asc 顺序排序,
使用 order by 只能对分组后的列表起作用,原因是 order by 的优先级低于 group by
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2><p>命令符所有的语句都要分号结尾</p>`,6);function M(L,A){const n=t("ExternalLinkIcon");return r(),l("div",null,[u,h,e("p",null,[e("a",o,[a("MySQL安装教程"),d(n)])]),e("p",null,[e("a",v,[a("Sqlyog 安装教程"),d(n)])]),e("p",null,[e("a",m,[a("phpMyAdmin 安装教程"),d(n)])]),b,e("p",null,[e("a",p,[a("看看别人怎么说"),d(n)])]),g,e("p",null,[e("a",x,[a("看看别人怎么做"),d(n)])]),f,e("p",null,[e("a",_,[a("看看别人怎么办"),d(n)])]),E,y,e("p",null,[e("a",q,[a("看看别人怎么弄"),d(n)])]),R,e("p",null,[e("a",T,[a("redis和MySQL区别"),d(n)])]),S])}const N=s(c,[["render",M],["__file","MySQL 笔记.html.vue"]]);export{N as default};
