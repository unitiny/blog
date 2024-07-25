---
icon: article
date: 2022-01-10
title: Ts 笔记
category:
- 前端
- 基础

tag:
- Ts
---

## 基础

### 变量

```
/* 
any 任意类型  
unknown 未知类型
void 空值
never 没有任何值
| 或者 
*/
let a: number | string // 声明a为数字或字符串
```

```
// 类型断言, 将b类型赋值时定义为number
let b: any
a = b as number
a = <number> b
```

```
// 限制对象， 剩余属性key为字符串类型，val类型任意
let c: {name:string, [propName: string]: any}

c = {name: "张三", age: 18} // 正确
c = {age: 18} // 错误，即c规定了一定要有name属性，其余任意扩展

https://cloud.tencent.com/developer/article/1610691
```

```
// 限制函数, 参数和返回值都是number
let d: (a: number, b: number) => number
```

```
// 数组
let e: string[]
let e: Array<string>
```

```
// 类型别名
type myType string | number | array
```

### 接口

```
// 可当作类型声明 或者定义类属性
interface myInterface{
	name: string
	age: number
}
```

### 类

```
有private public
```



### 函数

https://www.runoob.com/typescript/ts-function.html

```
param?: string // 可选参数 需要注意的是，可选参数必须接在必需参数后面
```



### 泛型

```
type Inter {
	length: number
}

// 继承了Inter接口 必须得有length属性
function fn<T extends Inter>(a: T) :number {
	return a.length
}
```



## 知识点

```
this.element = document.getElementById("food")! // !保证会有food这个值
```



## 功能

热加载js

```
tsc test.ts -w
```

全部编译监听

```
新建tsconfig.json, 执行tsc -w即可
```

tsconfig.json

```
{
    "inclued":["./src/**/*"] // 包括这些目录
    "exclued":["./src/hello"] // 排除这些目录不编译
    “compilerOptions":{
    	"target":"ES6" // 编译的ES版本
    	"module":"es2015"  // 使用的模块化规范
    	"outDir":"./dist" // 指定编译后文件所在目录
    	"outFile":"./dist/app.js" // 编译后合并到同一个文件
    	"allowJs":true // 是否对js文件编译,默认false
    }
}
```





vue3使用tsconfig的配置

```
<script lang="ts">
</script>
```



## 报错

#### TS2349: This expression is not callable.Type 'Number' has no call signatures.

需要在末尾补上分号，原因未知