---
icon: article
date: 2022-01-10
title: TP
category:
- 后端
- PHP

tag:
- TP
---

---
title: ThinkPHP5.1
date: 2021-08-10
sidebar: 'auto'
categories:
  - 后端
tags:
  - Think-PHP
---

::: tip

PHP 的大哥，不太好惹

:::

<!-- more -->

---

## 使用：

[搭建](https://www.kancloud.cn/manual/thinkphp5_1/353948)

在 www 目录 下 cmd 执行 composer 命令

PHPstudy 新建网址，要点同步 host 才能打开。只修改网址名和根目录仍会报错，提示网址找不到

## 语法：

### 数组

```
//查询长度
$length = count($res);
```



### model：

```php
//findOrEmpty()查询不到返回空数组 findOrFail()查询不到抛出错误 select同理

//select 查询多条数据   find 查询一条数据

$data2=\db('user')->value('username'); // 查询关键字，默认find()查询一条

removeOption('where')  // 移除上次查询保留的数据库对象信息

Db::table('tp_user')   // 不会加上前缀名
Db::name('user')	   // 自动加上前缀名

$user = db('user');	   // inc dec 增减计算
$user->where('id', 79)->inc('price', 3)->dec('price', 5)->update($data);

$data = [
            'username'  =>  '李白',
            'password'  =>  '456',
            'email'     =>  Db::raw('UPPER(email)'),
            'price'     =>  Db::raw('price-3')
]; // data 中直接修改值，更方便

$res1=$user->whereBetween('id',[2,30])->select();	  // 区间查询
$res2=$user->whereExp('id','In(19,21,25)')->select(); // 自定义查询
// 查询字段email里含有xiao%的,whereNotLike相反
$res=$user->whereLike('email','xiao%')->select();
$res3=$user->whereBetweenTime('create_time','2016-09-28 22:07:38','2019-09-20 22:01:42')->select(); // 时间区间查询

Db::name('user')->count('uid');			// 计算该字段数量
Db::name('user')->max('price', false);	// 计算字段最大值，字符串也适用
Db::name('user')->min('price');			// 计算字段最小值
Db::name('user')->avg('price');			// 计算字段平均值
Db::name('user')->sum('price');			// 计算字段总和

```

```php
// 子查询 两张表间连结
public function query(){
    // buildSql返回sql语句  field要返回的结果数据  where查询条件
    $query=Db::name('two')->field('uid')->where('gender','男')->buildSql();
    $res=Db::name('one')->whereExp('id','In '.$query)->select();

     // 闭包子查询 更方便
     $res=Db::table('tp_one')->where('id','in',function ($query){
         $query->table('tp_two')->field('uid')->where('gender','男');
     })->select();
    return json($res);
}
```

```php
// 以下都在model中定义
// 获取器：获取数据库数据，自定义一个呈现样式。
// get * Attr , *代表获取的字段名,get和Attr是固定的
public  function  getStatusAttr($value){
    $myget=[-1=>'删除',0=>'禁用',1=>'正常',2=>'待审核'];
    return $myget[$value];
}

// 修改器 数据入库时对数据操作
public function setEmailAttr($value){
    return strtoupper($value);
}

// 搜索器 模糊查询 $query 查询字段
public function searchEmailAttr($query,$value){
    return $query->where('email','like',$value.'%');
}

public function searchCreateTimeAttr($query,$value){
    return $query->whereBetweenTime('create_time',$value[0],$value[1]);
}

// 搜索器在controller中使用
// 搜索器
public function search(){
    $user=new UserModel();
    $res=$user->withSearch(['email','create_time'],
        ['email'=>'xiao','create_time'=>['2016-06-27','2018-12-11']])->select();
    return json($res);
}
```

```php
// 联式查询
public function index(){
    // 显示的形式，此截取了email靠左的五个字符
    $res=db('user')->field(['id','LEFT(email,5)'=>'leftemail'])->select();
    // 不显示某些的字段
    $res=db('user')->field(['uid','email'],true)->select();
    return json($res);
}
```



### view :

```php
// 获取数据输出view
public function loop(){
    $data=UserModel::all();
    $this->assign('list',$data); // list为html的数据名
    return $this->fetch('loop');
}

// templete.php中定义模板文件，但通常用extend继承板块
'layout_on'    => true,
'layout_name'  => 'public/layout'
```

### 方法：

[静态和动态方法](https://blog.csdn.net/XUAN0321/article/details/120415273)

```php
// 调用当前控制器里方法
$nums=$this->getstates();
```

```php
// 方法前置
protected $beforeActionList = [
    'first',
    'second' => ['expect' => 'index'], //除了index方法里不执行
    'third'  => ['only' => 'index']    //只有设置的index方法执行
]

// 跳转类
public function before()
{
    if($this->flag){
        $this->success('注册成功','../');
    }else{
        $this->error('失败');
    }
   return 'hello';
}

redirect('/index/index/hello'); // 跳转页面
download('a.jpg','myname');	// 下载图片
```

```php
// 调用Login文件的isLogin方法
Login::isLogin(true)
```





### 路由:

```php
$this->parram->$_GET['flag'];  // 获取请求参数

Route::get Route::rule  都是设置Controller下的路由
Route::view 		可设置view下的路由，并可在view中获取路由参数
```

### 类属性

```
public 表示全局，类内部外部都能访问；
private 表示私有的，只有本类内部可以使用；
proteced 表示受保护的，只有本类或子类或父类中可以访问；
```

### 环境变量配置

```
https://www.kancloud.cn/manual/thinkphp6_0/1037484
可以把根目录的.example.env改为.env即可使用
```

### Session

```php
https://www.kancloud.cn/manual/thinkphp6_0/1037635

// 如果值不存在，返回null
Session::get('name');
// 如果值不存在，返回空字符串
Session::get('name', '');
// 获取全部数据
Session::all();
```



## 功能：

### js获取后端变量以及session

[网址](https://blog.csdn.net/qq_18089765/article/details/119151543)

```
变量加上单引号即可：
var name =${name}'
获取session的方法:
var userid = '{$Request.session.user}'
```



## 问题：

### 不能绕过 index.php 进入模块

[办法看这里](https://blog.csdn.net/weixin_39918928/article/details/115239377)

有时需要 public 下的.htaccess 也要粘贴

### Function get_magic_quotes_gpc() is deprecated

[查看](http://www.thinkphp.cn/topic/7572.html)

### Function get_magic_quotes_runtime() is deprecated

[查看](https://blog.csdn.net/nstwolf/article/details/5806616)

创建的 php class 的图标不一样，且代码颜色灰色

原因：文件名首字母最好大写（控制器），且更改类名与文件名一致，图标即可变为 c 字符

### 写入路由但仍显示路由未定义

原因：路由写成Route::post无法访问,这是因为定义的post请求路由，只能通过post请求，直接输地址会认为是路由未定义

解决：改成get试试

### 网上拉取的项目无法打开

```
报错 ：Warning: require
(D:\PHP\phpstudy_pro\WWW\loanReturnSystem\public/../vendor/autoload.php): 
failed to open stream: No such file or directory in
D:\PHP\phpstudy_pro\WWW\loanReturnSystem\public\index.php on line 15

原因：composer要更新

解决：https://www.tpxhm.com/adetail/387.html
```

### No input file specified.

```
问题：public下.htaccess配置出错
解决：https://www.cnblogs.com/init-007/p/13236152.html
```

### /vender/缺失，环境改变无法运行

```
把/vender/下的composer文件夹删除，再composer install
```



## 注意：

### 配置文件更改：

如果更改了配置文件不起作用，务必把 runtime 下面的 temp 文件删除再刷新

### 注释方式：

```php
<!--{$name}--> // 仍会执行php
{//$name}	   // 不执行php,//不得与{有空格
{/*$name*/}
```

### 自动写入时间戳字段

```php
'auto_timestamp'  => false,
//改为true会有未知bug，不了解
```