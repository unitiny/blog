---
icon: article
date: 2022-01-10
title: Beego 笔记
category:
- 后端
- Go
- web框架

tag:
- Beego
---



## 使用

https://beego.me/

```cmd
go mod init   #初始化
bee new demo  #创建
bee run  	  #运行
http://localhost:8080/  #访问网址
```

[教程](https://www.bilibili.com/video/BV1hv411z7LA?p=3&spm_id_from=pageDriver)

[项目](https://www.imooc.com/video/20266)

## 语法

### Controller层

#### 返回json数据  u为结构体

```go
// 返回json数据  u为结构体
c.Data["json"]=u
c.ServeJSON()
```

#### 定义结构体对应表单数据获取

```go
// 结构体名称大写 和form的name不符，故要转化
type User struct {
	Username string   `form:"username"`
	Password string   `form:"password"`
	Hobby    []string `form:"hobby"`
}

// 解析表单数据
c.ParseForm(&u) 
```

#### 接收xml数据并转化为json

```go
type Product struct {  // 记得数据格式映射
	Title   string `form:"title" xml:"title"`
	Content string `form:"content" xml:"content"`
}

// 接收post传来的xml数据,需要更改配置copyrequestbody = true，再重启项目
func (c *GoodsController) GetXml() {

	p := Product{}
	str := string(c.Ctx.Input.RequestBody)
	fmt.Println(str)
	//c.Ctx.WriteString(str)
	var err error
	if e := xml.Unmarshal(c.Ctx.Input.RequestBody, &p); e != nil {
		c.Data["json"] = err.Error()
		c.ServeJSON()
	} else {
		c.Data["json"] = p
		fmt.Println(p)
		c.ServeJSON()
	}
}
```

#### 获取和设置app.conf配置信息

```go
mysqlUser:=beego.AppConfig.String("mysqluser")
beego.AppConfig.Set("redisuser", "admin")
```

#### cookie操作

```go
// 设置和获取cookie
// key,val,exist_time,allow_web ;默认存在3600秒，不设置时间关闭浏览器后cookie消失
c.Ctx.SetCookie("username","zhangsan",100,"/goods/cookie")
username:=c.Ctx.GetCookie("username")

// 设置加密和中文cookie
c.Ctx.SetSecureCookie("111111","password","中文密码")
password,_:=c.Ctx.GetSecureCookie("111111","password")

// 设置和获取session，需要在conf配置sessionon = true，同时也有cookie的secure安全模式的session
c.SetSession("phone","1235464")
phone:=c.GetSession("phone")

```

#### 解析表单数据并更新数据库

```go
var m models.MenuModel
if err:=c.ParseForm(&m);err==nil{
    _, err := orm.NewOrm().Update(&m)
    if err != nil {
        return 
    }
}
```

#### 解析字符串为json格式

```go
json.Unmarshal([]byte(user.AuthStr), &authArr)
```

#### 接收前端json数据

```
// 前端要求
let data={"userId":userId,"name": this.name, "nameIntroduce":this.introduce}
data=JSON.stringify(data)

// 后端
target:=models.TargetModel{}
data:=c.Ctx.Input.RequestBody
if err:=json.Unmarshal(data,&target);err!=nil{
    fmt.Println("json解析错误")
}
fmt.Println(data,target)
```



### View层

循环输出字符串切片和map数据

```html
<div class="stu">
    {{range $key,$val := .stu}}
    <span>{{$key}}----{{$val}}</span> 
    {{end}}
</div> 
```

#### 条件判断

```html
<div>
    {{if .isLogin}}
    <span>isLogin</span> {{else}} <span>unIsLogin</span> {{end}}
</div>
```

#### 大小判断 

```html
// eq / ne / lt / le / gt / ge  
// 等于 、 不等  、小于（less than）、小于等于、大于（greater than）、大于等于
<div>
    {{if gt .num.Num1 .num.Num2}}
    <span>num1大于num2</span> 
    {{else}} <span>num1小于或等于num2</span> 
    {{end}}
</div>
```

#### 自定义模板 不要漏template的.

```html
<div>
    {{define "aaa"}}
    <span>自定义模板</span> {{end}}
</div>
<div>{{template "aaa" .}}</div>
```

#### 引入文件

```html
// 引入模板 尾部空格加点可以在模板中使用变量
{{template "/public/header.html" .}}

// 引入css 、js
{{assets_css "/static/css/user.css"}}
{{assets_js "/static/js/user.js"}}
```

#### 输出时间、字符串截取、解析html

```html
<div>
    <span>{{.now}}</span><br />
    <span>{{date .now "Y-m-d H:m:s"}}</span><br />
    <span>{{substr .title 0 3}}</span><br />
    <span>{{html2str .html}}</span>  // 只输出字符串
    <span>{{str2html .html}}</span><br /> // 转化为html标签
</div>
```

#### 布局

```
//布局
view中{{.LayoutContent}}
controller中会根据TplName解析html，并把内容赋值到{{.LayoutContent}}
//布局页面
c.Layout = "layout.html"
//内容页面
c.TplName = "content.html"
//其他的部分
c.LayoutSections = make(map[string]string)
//页面使用的css部分
c.LayoutSections["HtmlHead"] = "head.tpl"
//页面使用的js部分
c.LayoutSections["Scripts"] = "scripts.tpl"
//页面的补充部分，可做为底部的版权部分时候
c.LayoutSections["SideBar"] = "sidebar.tpl"

```

```
{{.LayoutContent}}
https://www.cnblogs.com/liyao0312/p/8359442.html
```



### Model层

#### 添加包

```go
// 在main.go引用包，使其全局可使用。函数名要大写外部才可引用
beego.AddFuncMap("unixToDate", models.UnixToDate)
```

#### 连接数据库 

```go
// default表示默认，不可改为localhost，必须要注册主机为default 要手动创建beego_test数据库和user表
_=orm.RegisterDriver("mysql", orm.DRMySQL)    //可以不加
err:=orm.RegisterDataBase("default", "mysql", "root:111111@/beego_test?charset=utf8")
if err != nil {
    fmt.Println("数据库连接失败")
}else{
    fmt.Println("数据库连接成功")
}
//注册表，User要和user表的字段一一对应，User为定义的结构体
orm.RegisterModel(new(User))
```

#### 增删改查

https://www.cnblogs.com/guyouyin123/p/14041606.html#%E6%8F%92%E5%85%A5



#### 插入数据

```go
// 传参要加& 原因：https://blog.csdn.net/weixin_42178081/article/details/83146341
u:=models.User{Id: 2, Name: "渣男"}
if res,err:=orm.NewOrm().Insert(&u);err != nil {
    fmt.Println("失败",res,err)
}else{
    fmt.Println("成功",res,err)
}
```

#### 更新数据

```go
// 解析表单并更新数据
var m models.MenuModel
if err:=c.ParseForm(&m);err==nil{
    _, err := orm.NewOrm().Update(&m)
    if err != nil {
        return 
    }
}
```

#### 查询并更新数据

```go
o := orm.NewOrm() //1.要先获得一个ORM对象
var user User  //2.定义一个要获取数据的结构体对象
user.Name = "itcast" //3.给结构体对象赋值，相当于给查询条件赋值


err := o.Read(&user,"Name") //4.查询,用o.Read()
if err != nil{ 
  beego.Info("查询数据错误",err) 
  return 
}
注意：如果查询字段是查询对象的主键的话，可以不用指定查询字段
```



#### 树的运用

```go
// 树的运用(重点)
func MenuStruct() map[int]MenuTree {
	query := orm.NewOrm().QueryTable("menu")
	data := make([]*MenuModel,0)
	query.OrderBy("parent","-seq").All(&data)

	var menu = make(map[int]MenuTree)
	if(len(data)>0){
		for _,v := range data{
			if 0==v.Parent {
				var tree = new (MenuTree)
				tree.MenuModel = *v
				menu[v.Mid] = *tree
			}else{
				if tmp,ok := menu[v.Parent];ok{
					tmp.Child = append(tmp.Child, *v)
					menu[v.Parent] = tmp
				}
			}
		}
	}
	return menu
}
```



#### ORM接口

https://www.cnblogs.com/nulige/p/10370085.html

```go
type Ormer interface {
    Read(interface{}, …string) error
    ReadOrCreate(interface{}, string, …string) (bool, int64, error)
    Insert(interface{}) (int64, error)
    InsertMulti(int, interface{}) (int64, error)
    Update(interface{}, …string) (int64, error)
    Delete(interface{}) (int64, error)
    LoadRelated(interface{}, string, …interface{}) (int64, error)
    QueryM2M(interface{}, string) QueryM2Mer
    QueryTable(interface{}) QuerySeter
    Using(string) error
    Begin() error
    Commit() error
    Rollback() error
    Raw(string, …interface{}) RawSeter
    Driver() Driver
}
```



#### Beego下ORM过滤器Filter的高级用法

https://blog.csdn.net/qq_33249452/article/details/89703585

https://blog.csdn.net/yang731227/article/details/82503059

https://blog.csdn.net/hbshhb/article/details/90267988

```
Exclude("parent", 0) //where parent != 0
```



### orm高级操作

[网址](https://blog.csdn.net/yang731227/article/details/82503059)



#### 查找并更新字段

```
query := o.QueryTable("collect")
_, _ = query.Filter("parent", cid).Update(orm.Params{"parent": 0})
```



## 知识点

[启用日志](https://www.cnblogs.com/kumufengchun/p/10384325.html)

```
Ctx:Context(上下文) db_alias:数据库别名
```

### 方法介绍

```
beego.Controller 拥有很多方法，其中包括 Init、Prepare、Post、Get、Delete、Head 等方法
其中Prepare方法是每次请求都会调用的方法
```

```
json.Unmarshal(str, &authobj)
将json格式字符串转化为切片
```

### 排序

```
sort.Ints(auth) // 排序整型切片

sort.SearchInts(auth,v.Mid) // 查找切片元素，返回元素下标
```



## 功能

### 解析json数据

```go
"github.com/bitly/go-simplejson"  // 引入包
simplejson.NewJson([]byte(menu.Format))
```

###  打包部署

https://www.imooc.com/video/20280



## 问题

### 安装beego脚手架报错

```
报错：go: cannot use path@version syntax in GOPATH mode
解决：GO的语言版本大于1.13的时候，执行以下命令即可
	 go env -w GO111MODULE=on
	 
报错: because connected host has failed to respond(github访问慢，响应超时)
解决：在cmd执行命令
	 go env -w GO111MODULE=on
	 go env -w GOPROXY=https://goproxy.io,direct
网址：https://blog.csdn.net/qq_42739865/article/details/108667708

报错：'bee' 不是内部或外部命令，也不是可运行的程序或批处理文件。
解决：安装bee后，GOPATH的bin目录会添加bin.exe文件，故将GOPATH/bin添加到系统变量即可
网址：https://studygolang.com/articles/29552?fr=sidebar
	 https://www.it610.com/article/1297583915581644800.htm
```

### 结构体变量无法使用

```
报错：num1 is an unexported field of struct type interface {}
原因：定义结构体时，不知结构体名要大写首字母，结构体参数也要
具体：https://studygolang.com/articles/829
```

### 表不存在(常犯)

```
query := orm.NewOrm().QueryTable("user")
报错：Handler crashed with error <Ormer.QueryTable> table name: `user` not exists
解决：要先注册表 orm.RegisterModel(new(UserModel))
```

### 无法注册数据库

https://blog.csdn.net/xuelang532777032/article/details/101486047

```go
//要安装mysql包
go install github.com/Go-SQL-Driver/MySQL
```

### 表字段对立

https://blog.csdn.net/yyh4everOrz/article/details/79504868



### Error 1364: Field 'cid' doesn't have a default value

https://www.cnblogs.com/jsondai/p/11490434.html



### 老是自动注册xx_model表

```
没有TableName函数
```



###  unexpected end of JSON input

```
要在conf中写入copyrequestbody=true
```