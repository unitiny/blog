---
icon: article
date: 2022-01-10
title: Vue3 笔记
category:
- 前端
- vue

tag:
- Vue3
---

## 安装

#### 创建项目

```
npm init vite@latest <project-name> -- --template vue
```

#### 安装scss

```
npm install --save-dev sass
```

#### 安装vuex

```
npm install vuex@next --save
```



## 语法

### setup

setup() 实例创建之前运行，不需要使用this

setup() 目的为把某个数据的方法统一放置一块，可读性高

ref

```
setup中创建数据要引入ref，ref(0)返回一个带有value的对象，
此时改变value，由于对象具有指针性质，因此有响应式数据的效果。
```

reactive

```
创建对象引入reactive({name:"tom"，age:18})
```

watch

```
监听数据，也得从vue引入

如
const count = ref(0)
watch(count, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})
```

script setup

```
引入组件 不需要注册
定义变量不需要return暴露出去
```





## 功能

### 如何监听vuex中数组的变化

但数组变化时，使用this.$set()修改数组某一项，就能检测到数组更新。但vuex是写在js中的，没有this.$set这属性，即可使用JSON.parse(JSON.stringify(state.Arr))来让外部能检测到数组更新

然后组件中使用computed或者watch监听数据变化即可





## 思考

### 为什么要用响应式api?

vue2是通过劫持改变的对象来通知订阅者哪个变量修改了，进而重新渲染视图。

而vue3则需要通过响应式api来定义一个proxy的代理，来监听数据变化，进而重新渲染视图。普通变量也可展示，然而当变量变化后，视图不会更新。