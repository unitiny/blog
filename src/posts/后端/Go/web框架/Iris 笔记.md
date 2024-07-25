---
icon: article
date: 2022-01-10
title: Iris 笔记
category:
- 后端
- Go
- web框架

tag:
- Iris
---

## 使用

[中文文档](https://learnku.com/docs/iris-go/10/versioning/3761)



## 功能

### 通过控制器添加路由

```
func newApp() *iris.Application {
	app := iris.New()
	mvc.New(app.Party("/")).Handle(&lotteryController{})
	return app
}

func main() {
	app := newApp()

	userList = make([]string, 0)

	// http://localhost:8080
	app.Run(iris.Addr(":8080"))
}

// 继承控制的函数即有路由，路由接上Get后字符串，为 http://localhost:8080/String
func (c *lotteryController) GetString() string {
	count := len(userList)
	return fmt.Sprintf("当前总共参与抽奖的用户数: %d\n", count)
}
```



### 简单并发测试

```go
func TestMVC(t *testing.T) {
	e := httptest.New(t,newApp())
	var wg sync.WaitGroup
	e.GET("/").Expect().Status(httptest.StatusOK).Body().Equal("当前总共参与抽奖的用户数: 0\n")
	for i:=0;i<100;i++{
		wg.Add(1)
		go func(i int) {
			defer wg.Done()
			e.POST("/import").WithFormField("users",fmt.Sprintf("test_u%d", i)).Expect().Status(httptest.StatusOK)
		}(i)
	}
	wg.Wait()
	e.GET("/").Expect().Status(httptest.StatusOK).Body().Equal("当前总共参与抽奖的用户数: 100\n")
	e.GET("/lucky").Expect().Status(httptest.StatusOK)
	e.GET("/").Expect().Status(httptest.StatusOK).Body().Equal("当前总共参与抽奖的用户数: 99\n")
}
```



## 问题

### c.ctx.URLParamDefault报错invalid memory address or nil pointer dereference

```
没找到原因，但把控制器ctx改为大写就正常了。。。
```