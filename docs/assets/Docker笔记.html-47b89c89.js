import{_ as s,W as r,X as t,Y as e,Z as a,a0 as i,a2 as d,C as l}from"./framework-5d92cd28.js";const c="/typora-user-images/image-20211229153729735.png",o="/typora-user-images/image-20211229154807282.png",u="/typora-user-images/image-20211231143632876.png",v="/typora-user-images/image-20220102222523227.png",m={},h=e("h1",{id:"使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),a(" 使用")],-1),b={href:"https://www.bilibili.com/video/BV1og4y1q7M4",target:"_blank",rel:"noopener noreferrer"},p={href:"https://blog.csdn.net/huangjhai/article/details/118854733",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://hub.docker.com/search?type=edition&offering=community",target:"_blank",rel:"noopener noreferrer"},f=e("h3",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),a(" 安装")],-1),_={href:"https://blog.csdn.net/bean_business/article/details/112278504",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.jianshu.com/p/8200a3a50806",target:"_blank",rel:"noopener noreferrer"},q=d(`<h1 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h1><h3 id="查看版本" tabindex="-1"><a class="header-anchor" href="#查看版本" aria-hidden="true">#</a> 查看版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看镜像信息" tabindex="-1"><a class="header-anchor" href="#查看镜像信息" aria-hidden="true">#</a> 查看镜像信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker info 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看命令帮助" tabindex="-1"><a class="header-anchor" href="#查看命令帮助" aria-hidden="true">#</a> 查看命令帮助</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker 命令 --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看容器信息" tabindex="-1"><a class="header-anchor" href="#查看容器信息" aria-hidden="true">#</a> 查看容器信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker inspect nginx
docker inspect -f {{.Config.Hostname}} nginx01 # 获取容器id
docker inspect -f {{.Name}} nginx01			   # 查看别名
docker inspect -f {{.NetworkSettings.Ports}} nginx01 # 查看端口号
docker inspect -f {{.NetworkSettings.IPAddress}} nginx01 # 查看IP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找镜像" tabindex="-1"><a class="header-anchor" href="#查找镜像" aria-hidden="true">#</a> 查找镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker search mysql 查找mysql镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="下载镜像" tabindex="-1"><a class="header-anchor" href="#下载镜像" aria-hidden="true">#</a> 下载镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull mysql:5.7 指定下载mysql 5.7版本，否则默认lastest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除镜像" tabindex="-1"><a class="header-anchor" href="#删除镜像" aria-hidden="true">#</a> 删除镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi -f $(docker image -aq)或docker rm -f $(docker ps -aq) 删除所有镜像
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h3>`,16),w={href:"https://blog.csdn.net/CSDN_duomaomao/article/details/78587103",target:"_blank",rel:"noopener noreferrer"},E=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#删除单个容器
docker rm 容器id

#显示所有的容器，过滤出Exited状态的容器，取出这些容器的ID，
docker ps -a|grep Exited|awk &#39;{print $1}&#39;

#查询所有的容器，过滤出Exited状态的容器，列出容器ID，删除这些容器
docker rm \`docker ps -a|grep Exited|awk &#39;{print $1}&#39;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行镜像" tabindex="-1"><a class="header-anchor" href="#运行镜像" aria-hidden="true">#</a> 运行镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it centos /bin/bash 运行centos镜像

-d 后台运行
--name 容器命名
-p 宿主机端口：容器内部端口(即把80端口暴露给3344端口，用户能通过3344端口访问80端口)
docker run -d --name nginx01 -p 3344:80 nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20211229153729735" tabindex="0" loading="lazy"><figcaption>image-20211229153729735</figcaption></figure><h3 id="列出运行的容器" tabindex="-1"><a class="header-anchor" href="#列出运行的容器" aria-hidden="true">#</a> 列出运行的容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps 列出所有正在运行的docker容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="image-20211229154807282" tabindex="0" loading="lazy"><figcaption>image-20211229154807282</figcaption></figure><h3 id="容器启动和停止" tabindex="-1"><a class="header-anchor" href="#容器启动和停止" aria-hidden="true">#</a> 容器启动和停止</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker start 容器id   # 启动容器
docker restart 容器id # 重启容器
docker stop 容器id 	# 停止正在运行的容器
docker kill 容器id 	# 停止正在运行的容器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重命名容器" tabindex="-1"><a class="header-anchor" href="#重命名容器" aria-hidden="true">#</a> 重命名容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rename 原来名称 要修改的名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="退出容器" tabindex="-1"><a class="header-anchor" href="#退出容器" aria-hidden="true">#</a> 退出容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exit 停止并退出容器
ctrl+p+q 按键 容器不停止退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示日志" tabindex="-1"><a class="header-anchor" href="#显示日志" aria-hidden="true">#</a> 显示日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker logs -f -t --tail 10 2a29f97d5734
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看进程信息" tabindex="-1"><a class="header-anchor" href="#查看进程信息" aria-hidden="true">#</a> 查看进程信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker top
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="进入当前正在运行的容器" tabindex="-1"><a class="header-anchor" href="#进入当前正在运行的容器" aria-hidden="true">#</a> 进入当前正在运行的容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it 2a29f97d5734  /bin/bash # 进入容器后新建一个终端
docker attach 容器id /bin/bash  # 进入容器当前执行的终端
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看cpu配额" tabindex="-1"><a class="header-anchor" href="#查看cpu配额" aria-hidden="true">#</a> 查看cpu配额</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交容器-快照" tabindex="-1"><a class="header-anchor" href="#提交容器-快照" aria-hidden="true">#</a> 提交容器（快照）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker commit -m=&quot;add webapps&quot; -a=&quot;unitiny&quot; 89b435364248 nginx02:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="挂载数据卷" tabindex="-1"><a class="header-anchor" href="#挂载数据卷" aria-hidden="true">#</a> 挂载数据卷</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /home/abc/Desktop/docker/data:/home centos /bin/bash <span class="token comment"># 指定路径挂载</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> /home centos /bin/bash	<span class="token comment"># 匿名挂载</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> abc:/home centos /bin/bash  <span class="token comment"># 具名挂载 -v 宿主机:容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-v</span> abc:/home:ro<span class="token punctuation">(</span>rw<span class="token punctuation">)</span> centos /bin/bash <span class="token comment"># ro:readonly 只能外部修改 只读 rw:读写 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看数据卷信息" tabindex="-1"><a class="header-anchor" href="#查看数据卷信息" aria-hidden="true">#</a> 查看数据卷信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker volume ls # 查看所有数据卷
docker volume inspect abc # 查看abc具体挂载路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩包" tabindex="-1"><a class="header-anchor" href="#压缩包" aria-hidden="true">#</a> 压缩包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker save
docker load
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看docker网络" tabindex="-1"><a class="header-anchor" href="#查看docker网络" aria-hidden="true">#</a> 查看docker网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network ls
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建network网络" tabindex="-1"><a class="header-anchor" href="#创建network网络" aria-hidden="true">#</a> 创建network网络</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="复制文件到docker中" tabindex="-1"><a class="header-anchor" href="#复制文件到docker中" aria-hidden="true">#</a> 复制文件到docker中</h3><p><strong>docker cp 宿主机的本地地址 容器名/容器ID：容器路径</strong></p><p>而与该容器挂载的外部文件夹也有了该文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker cp /root/666.txt 460b22f78261:/home/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h1><h3 id="拷贝镜像目录并快照" tabindex="-1"><a class="header-anchor" href="#拷贝镜像目录并快照" aria-hidden="true">#</a> 拷贝镜像目录并快照</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>mkdir webapps 		# 新建文件夹
cp -r bin/* webapps # 拷贝当前目录的bin目录下所有文件到webapps里
exit				# 退出容器
<span class="token comment"># docker commit -m=&quot;提交信息&quot; -a=&quot;作者&quot; 容器id 容器名称：版本号</span>
docker commit -m=&quot;add webapps&quot; -a=&quot;unitiny&quot; 89b435364248 nginx02:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复制镜像并修改名称和版本号" tabindex="-1"><a class="header-anchor" href="#复制镜像并修改名称和版本号" aria-hidden="true">#</a> 复制镜像并修改名称和版本号</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># docker tag 镜像id 要修改的镜像名：要修改的版本号
docker tag feb5d9fea6a5 helloworld:2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找所有容器" tabindex="-1"><a class="header-anchor" href="#查找所有容器" aria-hidden="true">#</a> 查找所有容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -a # 查找所有容器，不加-a默认为运行的容器
# 查找所有容器ip
docker inspect -f &#39;{{.Name}} - {{range .NetworkSettings.Networks}}
{{.IPAddress}}{{end}}&#39; $(docker ps -aq)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动并修改nginx" tabindex="-1"><a class="header-anchor" href="#启动并修改nginx" aria-hidden="true">#</a> 启动并修改nginx</h4>`,45),$={href:"https://www.cnblogs.com/hl15/p/13686515.html",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"使用mysql并用navicate连接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用mysql并用navicate连接","aria-hidden":"true"},"#"),a(" 使用mysql并用navicate连接")],-1),D={href:"https://www.runoob.com/docker/docker-install-mysql.html",target:"_blank",rel:"noopener noreferrer"},I={href:"https://jingyan.baidu.com/article/11c17a2caf37bab446e39de1.html",target:"_blank",rel:"noopener noreferrer"},P=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2 获取docker主机 IP
$ ifconfig | grep inet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行mysql" tabindex="-1"><a class="header-anchor" href="#运行mysql" aria-hidden="true">#</a> 运行MySQL</h3><figure><img src="`+u+`" alt="image-20211231143632876" tabindex="0" loading="lazy"><figcaption>image-20211231143632876</figcaption></figure><h3 id="挂载mysql" tabindex="-1"><a class="header-anchor" href="#挂载mysql" aria-hidden="true">#</a> 挂载MySQL</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d -p 3310:3306 -v /home/abc/Desktop/docker/mysql/conf:/etc/mysql/conf.d -v /home/abc/Desktop/docker/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改容器挂载位置" tabindex="-1"><a class="header-anchor" href="#修改容器挂载位置" aria-hidden="true">#</a> 修改容器挂载位置</h3>`,6),S={href:"https://blog.csdn.net/man_to_home/article/details/105564047",target:"_blank",rel:"noopener noreferrer"},M=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用commit即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义创建镜像" tabindex="-1"><a class="header-anchor" href="#自定义创建镜像" aria-hidden="true">#</a> 自定义创建镜像</h3><p>使用docker build运行dockerfile</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim dockerFile

写入
FROM centos

VOLUME [&quot;volume1&quot;,&quot;volume2&quot;] # 匿名挂载
 
CMD echo &quot;---end---&quot;
CMD &quot;/bin/bash&quot;

docker build -f dockerFile -t myDockerfile(前面不加/路径,名称要小写) .

#查看
docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="容器间挂载" tabindex="-1"><a class="header-anchor" href="#容器间挂载" aria-hidden="true">#</a> 容器间挂载</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it --name  docker02 --volumes-from docker01 mydockerfile /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义centos容器" tabindex="-1"><a class="header-anchor" href="#自定义centos容器" aria-hidden="true">#</a> 自定义centos容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vim mydockerfile-centos 创建镜像文件
FROM centos

MAINTAINER unitiny&lt;2069234934@qq.com&gt;
ENV MYPATH /user/local # 定义变量
WORKDIR $MYPATH # 进入后的目录，默认为/

# 下载所需镜像
RUN yum -y install  vim 
RUN yum -y install  net-tools

# 暴露端口
EXPOSE 80

CMD echo $MYPATH
CMD echo &quot;------end------&quot;
CMD /bin/bash


# 运行
docker build -f mydockerfile-centos -t mycentos:1.0 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看host配置" tabindex="-1"><a class="header-anchor" href="#查看host配置" aria-hidden="true">#</a> 查看host配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入容器后
cat /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建redis集群" tabindex="-1"><a class="header-anchor" href="#创建redis集群" aria-hidden="true">#</a> 创建redis集群</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 构建六个redis配置
for port in $(seq 1 6);\\
do \\
mkdir -p /mydata/redis/node-\${port}/conf
touch /mydata/redis/node-\${port}/conf/redis.conf
cat &lt;&lt; EOF&gt;/mydata/redis/node-\${port}/conf/redis.conf
port 6379
bind 0.0.0.0
cluster-enabled yes
cluster-node-timeout 5000
cluster-announce-ip 172.38.0.1\${port}
cluster-announce-port 6379
cluster-announce-bus-port 16379
appendonly yes
EOF
done

2 运行六个redis容器(此脚本能运行但容器会自动退出，未解决，只能分批一个个运行)
要先挂载才能使用redis-server /etc/redis/redis.conf
(要加这个不然redis不运行)
#!/bin/bash 
for port in $(seq 1 6); \\
do \\
docker run -p 637\${port}:6379 -p 1637\${port}:16379 --name redis-\${port} \\
-v /mydata/redis/node-\${port}/data:/data \\
-v /mydata/redis/node-\${port}/conf/redis.conf:/etc/redis/redis.conf \\
-d --net redis --ip 172.38.0.1\${port} redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf \\ 
done

3 创建集群
redis-cli --cluster create 172.38.0.11:6379 172.38.0.12:6379 172.38.0.13:6379 172.38.0.14:6379 \\
--cluster-replicas 1

4 查看信息
先redis-cli -c
cluster info
cluster nodes

5 测试
在redis中
set a b
get a
之后docker停掉为master的容器
再get a仍有结果，因为有后备redis替换上了，此为集群
再cluster nodes 发现之前master的变fail了，后备的变master了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地文件上传到docker" tabindex="-1"><a class="header-anchor" href="#本地文件上传到docker" aria-hidden="true">#</a> 本地文件上传到docker</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker cp 本地文件路径 ID全称:容器路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h1><h3 id="数据卷容器" tabindex="-1"><a class="header-anchor" href="#数据卷容器" aria-hidden="true">#</a> 数据卷容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在容器中存放数据卷，可与多个容器间同步（双向拷贝）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cmd和entrypoint" tabindex="-1"><a class="header-anchor" href="#cmd和entrypoint" aria-hidden="true">#</a> cmd和entrypoint</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cmd 是固定参数的命令
entrypoint 用户使用时可在命令后追加参数
如：docker run 容器id -l
cmd若无这命令会报错
entrypoint则会把参数-l追加到原设置的run命令后
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker网络" tabindex="-1"><a class="header-anchor" href="#docker网络" aria-hidden="true">#</a> docker网络</h3><p>启动时会开一个docker0 IP，为所有运行的容器提供一个公共的服务器地址，不同容器之间可通过该桥梁连接，实现互相通信。</p><p>每开一个容器会出现成对的ip，如图的11和10</p><figure><img src="`+v+`" alt="image-20220102222523227" tabindex="0" loading="lazy"><figcaption>image-20220102222523227</figcaption></figure><h3 id="workdir" tabindex="-1"><a class="header-anchor" href="#workdir" aria-hidden="true">#</a> workdir</h3><p>启动容器后所在的目录，默认是/</p><h3 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> dockerfile</h3><p>每次run 命令默认在workdir执行，无论前面是否cd，可以用&amp;&amp;来连续cd目录执行下一步动作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXPOSE仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射
使用docker run -P 时，会自动随机映射 EXPOSE 的端口
要建立端口映射，使用docker run -p 8080:80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1><h3 id="没有运行的容器-无法查看日志" tabindex="-1"><a class="header-anchor" href="#没有运行的容器-无法查看日志" aria-hidden="true">#</a> 没有运行的容器，无法查看日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;docker logs&quot; requires exactly 1 argument.
See &#39;docker logs --help&#39;.

Usage:  docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无法发布镜像" tabindex="-1"><a class="header-anchor" href="#无法发布镜像" aria-hidden="true">#</a> 无法发布镜像</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abc@abc-PC:~$ docker push firstimages/mycentos:1.0
The push refers to repository [docker.io/firstimages/mycentos]
An image does not exist locally with the tag: firstimages/mycentos

解决：重命名镜像tag，增加firstimages/mycentos这个别名
docker tag 镜像id firstimages/mycentos:1.0
docker push 镜像id firstimages/mycentos:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error during connect: This error may indicate that the docker daemon is not running.: Get &quot;http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/containers/json&quot;: open //./pipe/docker_engine: The system cannot find the file specified.</p>`,34),O={href:"https://blog.csdn.net/tangcv/article/details/112238084?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-112238084-blog-125177509.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-1-112238084-blog-125177509.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=1",target:"_blank",rel:"noopener noreferrer"},T=e("h3",{id:"docker-desktop-一直starting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-desktop-一直starting","aria-hidden":"true"},"#"),a(" docker desktop 一直starting")],-1),C=e("p",null,"登录下即可",-1);function R(F,A){const n=l("ExternalLinkIcon");return r(),t("div",null,[h,e("p",null,[e("a",b,[a("教程"),i(n)])]),e("p",null,[e("a",p,[a("教程笔记"),i(n)])]),e("p",null,[e("a",g,[a("官网"),i(n)])]),e("p",null,[e("a",x,[a("文档"),i(n)])]),e("p",null,[e("a",k,[a("仓库地址"),i(n)])]),f,e("p",null,[e("a",_,[a("成功解决gpg: 找不到有效的 OpenPGP 数据"),i(n)])]),e("p",null,[e("a",y,[a("安装docker"),i(n)])]),q,e("p",null,[e("a",w,[a("网址"),i(n)])]),E,e("p",null,[e("a",$,[a("网址"),i(n)])]),N,e("p",null,[e("a",D,[a("网址"),i(n)])]),e("p",null,[e("a",I,[a("navicate连接"),i(n)])]),P,e("p",null,[e("a",S,[a("网址"),i(n)])]),M,e("p",null,[e("a",O,[a("网址"),i(n)])]),T,C])}const V=s(m,[["render",R],["__file","Docker笔记.html.vue"]]);export{V as default};
