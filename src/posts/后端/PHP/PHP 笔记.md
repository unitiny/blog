---
icon: article
date: 2022-01-10
title: PHP 笔记
category:
- 后端
- PHP

tag:
- PHP
---

# PHP 笔记





## 使用及功能：

### cmd 查看端口

```cmd
netstat -aon 查看端口  
netstat -ano|findstr "8080" 查看8080端口  
taskkill -PID 992 -F 停止某端口
```

### [php自动补全](http://www.bubuko.com/infodetail-3212164.html)

### 逆序输出 

```php
foreach (array_reverse($rows) as $key => $msg) //加上array_reverse
```

### php中实现页面跳转的几种方式

```
https://www.cnblogs.com/du892294464/p/6835277.html

延迟跳转（比如登陆成功后会有几秒钟等待时间，然后跳转到了其他页面
<?php  header("Refresh:秒数;url=地址")     ?> 
例如 ：
<?php   header("Refresh:3;url=helloworld.php")?> 会在3秒后执行跳转
<?php sleep(3); header("location:url地址")?>  调用了sleep()方法,效果也是x秒后执行跳转
```

### php跳转并传值

```php
// 在url添加后缀，get传值
echo "<script>window.location='./other.php?data={$data}'</script>";

// post传值则写个form，然后echo
```

### php传值给js并处理数据

```php
//用+号分隔字符串
echo $user['name'] . "+" . $user['qqMailbox']."+".$user['phone']. "+" .$user['key'];
```

```js
//可以在js中分割 
var user = this.responseText.split("+");
```

### 字符串格式数字增加

```php
$var=sprintf("%04d", 2);//生成4位数，不足前面补0
echo $var;//结果为0002
```

### 返回前端json格式数据

```php
json_encode($data)
```

### 后端如何返回数据给前端

```
return不行要echo
json_encode($data)
```

### 时间

https://www.php.cn/php-weizijiaocheng-413941.html

```
$real_lend_time = date("Y/m/d H:i:s");
```

### 保存图片

[网址](https://www.php.cn/php-ask-431370.html)



## 语法：

### 引用   全局变量

```php
// 函数内使用global $i,使$i可以被外部访问到，扩大作用域
// 定义global $i=0;语法错误，定义时不可赋值
$i = 0;
function a()
{
    global $i;
    $i += 3;
    echo ' ' . $i;
}
echo ' ' . $i;
a();
echo ' ' . $i;  // 输出结果 0 3 3

更简单的方法为 传参是加上引入&，即不会被释放
```

### 引用&

```php
如果变量为对象，那么在某函数使用后不会被释放，仍会改变值.
因为在PHP中，传入参数为对象的话并不是把对象复制一份进行操作（常见情况如此），而是直接操作该对象.
&$i,即类似对象传递，是直接更改原变量的
```

### html镶入变量

```php
// 在PHP中不用转义输出一段html代码，注意起始和尾部可以为其他字符，但要相同。尾部一定要置顶，不得有空格。此方法方便快速使用变量，不改变作用域
$html = <<<END
            <tr>
                <td><input class="sort" type="text" name="sort" /></td>
                <td>{$data['module_name']}[id:{$data['id']}]</td>
                <td><a href="#">[访问]</a>&nbsp;&nbsp;<a href="#">[编辑]</a>&nbsp;&nbsp;<a href="#">[删除]</a></td>
            </tr>
END;
                echo $html;
```

### 数组类

```php
获取数组长度
$length=count($array);
```

```php
字符串转化为数组
$_POST = str_split($_POST['selectID'], 2); // 切割两个字符为一元素
$_POST = explode(',', $_POST['selectID']); // 分割字符串
```

```php
count($arr)							// 计算数组长度

reset($arr)							// 返回数组第一个单元的值

key($arr) 							// 返回数组中当前单元的键名

end($arr) 							// 将 array 的内部指针移动到最后一个单元并返回其值。

// 将 array 的第一个单元移出并作为结果返回，将 array
// 的长度减一并将所有其它单元向前移动一位。所有的数字键名将改为从零开始计数，文字键名将不变
array_shift($arr) 	

// 弹出并返回 array 数组的最后一个单元，并将数组 array 的长度减一。
array_pop($arr) 

array_unshift($arr,$var)			// 插入$var到数组头部位置

array_push($arr,$var)				// 插入$var到数组尾部位
```

```php
foreach ($var as $k=>$v){
	// 数组遍历格式
}
```

### 对象

```php
$res = ["lendGoods" => $lendGoods, "lendExamines" =>  $lendExamines
, "returnExamines" => $returnExamines];
```

### 数据格式转转换

```php
第一种转换方式： (int)  (bool)  (float)  (string)  (array) (object)
<?php  
$num1=3.14;  
$num2=(int)$num1;  
var_dump($num1); //输出float(3.14)  
var_dump($num2); //输出int(3)  
?> 


第二种转换方式：  intval()  floatval()  strval()
<?php  
$str="123.9abc";  
$int=intval($str);     //转换后数值：123  
$float=floatval($str); //转换后数值：123.9  
$str=strval($float);   //转换后字符串："123.9"   
?> 


第三种转换方式：  settype();
<?php  
$num4=12.8;  
$flg=settype($num4,"int");  
var_dump($flg);  //输出bool(true)  
var_dump($num4); //输出int(12)  
?>
```

### 三元表达式

```php
接多个语句
$btn ? $msg->state = 2 : ($msg->state = 0 and $msg->flag = 1);
```





## 碰到的bug:

### undefind index:name 

原因之一:用户名输入错误，使name为空，则未定义

### 数据库 数据添加不成功

还要注意 引号和分号使用是否正确,如 value (`name`) 里边使用引号，但应该为字符串，故要改为单引号''

### 请求头问题 

l ![img](file:///C:\Users\20692\AppData\Local\Temp\ksohtml10760\wps5.jpg)

 ![img](file:///C:\Users\20692\AppData\Local\Temp\ksohtml10760\wps6.jpg)

要用PHP server 打开 而不是open in default browser 打开

### Error：Array to string conversion 

Array  数组被当作字符串使用 如 echo (“$a”) 或echo $a，要用var_dump函数

### 使用pdo 1054 连接不上数据库

[解决办法]( https://blog.csdn.net/m0_46278037/article/details/113923726)

### Uncaught SyntaxError: Unexpected token a in JSON at position 0

问题：json接收的数据格式出错

解决：要从数据来源上入手转化成正确格式

### foreach 无法改变数组的值的问题

用foreach来遍历数组，所操作的$val是指定数组的一个拷贝，而不是数组本身

### Unexpected 'EndOfFile'.

tab空格隐藏为一个空格报错，若为空格，双击回有个点，若错误空格双击无点。

解决:把所有错误tab空格修改为正常空格



### 跨域问题：

```
header("Access-Control-Allow-Origin: *"); // 添加头请求，允许所有域名请求
```



## 注意：

- echo 不能输出bool值，要用var_dump()
- 在xhr.onload=functionn 中传返回值无效
- Print_r可以输出数组或对象，PHP fetchAll后可以user[‘name’]即是name 的字符串
- 用form 注意给每个标签写上name=”",才能把输入框内的值post上去
- onsubmit="return $judge"  控制action执行
- [Form中按钮button submit 区别](http://blog.sina.com.cn/s/blog_693d183d0100uolj.html)
- Update 数据库要MySQL -u root-p启动服务后才能更新