import{_ as s,W as r,X as l,Y as e,Z as i,a0 as a,a2 as d,C as t}from"./framework-5d92cd28.js";const c={},v=d(`<h1 id="linux-笔记" tabindex="-1"><a class="header-anchor" href="#linux-笔记" aria-hidden="true">#</a> Linux 笔记</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法：</h2><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>touch /tmp/aa abc
在/tmp/aa创建文件abc

cat etc/issue
查看文件信息

more etc/services 
查看更多信息，空格翻页

chmod u+x,o+w,g-r aa 
为aa文件user添加执行权限，other添加写入权限，group减少读取权限

chmod -R 777 /tmp/a 
/tmp/a目录下所有文件都开放全部权限

mv dockerFile docker-volume-text
重命名dockerFile为docker-volume-text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录" tabindex="-1"><a class="header-anchor" href="#目录" aria-hidden="true">#</a> 目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ls(list) -lh  /tmp

查看tmp目录下文件信息

mkdir -p /tmp/bb/aa /tmp/bb/bb

同时创建多文件

pwd(print working directories)

打印当前目录

rmdir(remove directories) /tmp/bb

删除/tmp/bb的目录，此目录要无文件为空才可

cp(copy) -r /tmp/aa/dd /tmp/bb

复制/tmp/aa/dd 目录到/tmp/bb下

mv /tmp/aa/dd /tmp/bb

剪切/tmp/aa/dd 目录到/tmp/bb下

rm -rf(remove -rf强制删除目录 )

从删库到跑路

rmdir 删除目录

unzip abc.zip 解压文件

netstat -tunlp 查看端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="信息" tabindex="-1"><a class="header-anchor" href="#信息" aria-hidden="true">#</a> 信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ifconfig

查询配置网络信息

df

查看分区使用情况

clear   /  ctrl+l

清屏
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点：</h2><h3 id="分区" tabindex="-1"><a class="header-anchor" href="#分区" aria-hidden="true">#</a> 分区</h3><p>最多建四个主分区，不管主分区多少，子分区编号都是从5开始</p><h3 id="格式化" tabindex="-1"><a class="header-anchor" href="#格式化" aria-hidden="true">#</a> 格式化</h3><p>将分区空间分成一个个格子，每格4kb内存，利于数据存放有序</p><h3 id="进入root" tabindex="-1"><a class="header-anchor" href="#进入root" aria-hidden="true">#</a> 进入root</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>su root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="强制退出" tabindex="-1"><a class="header-anchor" href="#强制退出" aria-hidden="true">#</a> 强制退出</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>:q!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改只读文件" tabindex="-1"><a class="header-anchor" href="#修改只读文件" aria-hidden="true">#</a> 修改只读文件</h3>`,18),u={href:"https://blog.csdn.net/weixin_33868027/article/details/93154032?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1.no_search_link&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"},o=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>su root #进入管理者模式
vi a.txt #进入编辑
# 按i进入编辑模式，写好后按ESC退出进入命令模式，输入:wq保存并退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看本地网络" tabindex="-1"><a class="header-anchor" href="#查看本地网络" aria-hidden="true">#</a> 查看本地网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl 127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h2>`,4),m={href:"https://www.bubaijun.com/page.php?id=222",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.javashuo.com/article/p-rinineno-ne.html",target:"_blank",rel:"noopener noreferrer"},h=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jobs 查看所有进程
bg 1  后台运行1程序
fg 1  前台运行1程序，之后可CTRL c 终止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),p={href:"https://blog.csdn.net/weixin_43102784/article/details/122696078",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.csdn.net/tags/NtTacgysMTk0NTgtYmxvZwO0O0OO0O0O.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/fengsheng5210/article/details/79802866",target:"_blank",rel:"noopener noreferrer"},_=d(`<h4 id="wsl连接window方法" tabindex="-1"><a class="header-anchor" href="#wsl连接window方法" aria-hidden="true">#</a> wsl连接window方法</h4><p>例如 ubuntu</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>explorer.exe .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项：</h2><p>命令行更改的配置都是临时生效的</p>`,5);function f(w,k){const n=t("ExternalLinkIcon");return r(),l("div",null,[v,e("p",null,[e("a",u,[i("网址"),a(n)])]),o,e("p",null,[e("a",m,[i("修改nginx指向端口"),a(n)])]),e("p",null,[e("a",b,[i("后台运行程序"),a(n)])]),h,e("p",null,[e("a",p,[i("卸载mysql"),a(n)])]),e("p",null,[e("a",x,[i("Nginx开放端口"),a(n)])]),e("p",null,[e("a",g,[i("关闭端口正在运行的进程"),a(n)])]),_])}const T=s(c,[["render",f],["__file","Linux笔记.html.vue"]]);export{T as default};
