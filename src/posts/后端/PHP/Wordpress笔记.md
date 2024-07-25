---
icon: article
date: 2022-01-10
title: Wordpress笔记
category:
- 后端
- PHP

tag:
- Wordpress
---

## 上手：

### [安装](https://wordpress.org/support/article/how-to-install-wordpress/)

```
imitateweb网址账号：Mr.h  密码：111111

abc 网址账号：abc  密码：111111
```

### 资源

[教程1](https://www.jianshu.com/u/199fee2e0fd9)

[教程2](https://blog.wpjam.com/m/wp-theme-lesson-3-starting-indexphp/)

### [高级样式](https://www.kancloud.cn/gitcafe/yunluo_wp_code/1316529)

### 创建网站准备

 1 根目录下要有新的wordpress

 2 创建一个数据库，在phpstudy中创建

 3 phpstudy的mysql,Nginx/apache要运行起来





## 语法：

### 链接

the_permalink() 日志的链接

bloginfo(‘url’) 首页链接

screenshot.png 该图片为主题预览图

#### home_url

介绍：首页地址

作用：更改成你希望访问的网址esc_url 主要用于URL过滤

例子：

```php
$url = home_url（'/'）;
echo esc_url（$url）;
//输出：http://www.xuxiaoke.com/
$url = home_url（'example'，'relative'）;
echo esc_url（$url）;
//输出：/example
```

### 分类相关

[只展示指定分类内容](http://www.thefox.cn/the-wordpress-topic-sidebar-adds-a-cla.shtml)

友情链接函数和获取链接函数

```php
$bookmarks = get_bookmarks('category_name=wgrzfs');
wp_list_bookmarks('title_li=0&categorize=0&category_name=wgrzfs&orderby=rating&limit=5');
```

获取分类页标题和链接

```php
<?php
$category_id = get_cat_ID('外国人在佛山');
$category_link = get_category_link($category_id);
?>
```

### 文章相关

显示上下篇文章

```php
previous_post_link('%link', '%title', true);
next_post_link('%link', '%title', true);
```

### 模板文件

header.php: 通常用于描述网站标题和导航栏，可以在不同页面中多次使用

index.php:核心索引文件，包含日志标题、内容、元数据

single.php:通常包含页面列表、友情链接列表、存档列表、类别列表和其他一些列表

footer.php:用于注释版权信息，通常不会因页面的改变而改变，和header.php一样可在多个页面使用

page.php:文章类型的详情页模板文件

archieve.php:默认存档页

search.php:搜索页

### 函数

- 在index中的应用


主循环: 以if while开始 endwhile endif 结束，用于遍历日志，可加else调用404模板

have_posts();置于if 中判断日志是否存在，没有则显示404

the_ID(); 赋予随机且各不相同的id，配合`id=”post- <?php the_ID ?>”`即可给每个日志赋予不同id

the_permalink();获取日志链接

the_title();显示日志标题

the_content;显示日志内容

the_exerpt();显示部分内容，可用于代替the_content

include:调用文件，例如

include(TEMPLATEPATH . ’/comments.php’)

comments_template(); 调用留言区

post_nav_link();  不同页面间添加关联

get_sidebar(), get_header()...调用模板文件

- 在header中的应用


如何调用css样式

`<link herf=”<?php bloginfo(‘stylesheet_url’) ?>`

bloginfo(‘url)、bloginfo(‘name’)、bloginfo(‘description’)

调用/显示主题链接、名字、描述

wp_nav_menu()调用菜单，要register_nav_menus()先注册菜单，方可使用

- 在function中的应用


add_action() 将函数连接到指定的动作

add_filter() 将函数连接到指定的过滤器动作，如可添加函数更改要显示的字体长度

```php
// 添加友情链接
add_filter('pre_option_link_manager_enabled', '__return_true');
```

wp_list_bookmarks()  友情链接  [如何使用](https://wordpress.org/support/article/how-to-install-wordpress/)

### 其他

body_class() 根据不同页面类型判断body的class选择器,便于灵活控制不同页面的各个元素

thumbnail 缩略图

global  全局变量

## 功能：

### 在一模板文件传参给另一模板文件

```php
set_query_var(‘i’,$i)//模板文件中设置参数
$i= get_query_var(‘i’)//另一模板文件接收
```

### 上传文件大小限制，在php.ini 中修改

 	upload_max_filesize = 64M
 	post_max_size = 64M
 	max_execution_time = 300

然后在nginx-配置-性能配置-请求大小-修改

## 问题;

### 无法显示菜单和小工具

原因:文件命名为function.php错误，应为	functions.php

解决方法：复制可以别的主题的function.php

### 无法出现仪表盘

网址后加上wp-login.php

### 文章页面found 404

 url 别名不能设置为中文

### 菜单和小工具点击不跳转页面

该网址的别名为中文

### 误删数据库且没备份怎么办

数据库里存放的都是文章和视频资源，没备份是无法恢复的。若只恢复数据库结构，可删除本地的

wp-config.php ,再登录localhost/wordpress（wp本地网址）可重建数据库，当然数据库要先在phpstudy

中创建好

## 注意：

要把分类目录的分类标题隐藏，可直接css中display：none

误把http改为https,打开数据库的wp-options文件，修改网址即可

the_title()是输出字符串，the_category()是输出链接，要获取里面的内容，可用变量承接再var_dump输出源内容，使用相应的数组元素

固定链接设置改变的不仅仅是网址名称，还会使该页面带上添加标签的内容，如添加了categories就会把所有该分类的内容都放进页面中