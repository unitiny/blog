---
icon: article
date: 2022-01-10
title: Uniapp 笔记
category:
- 前端
- 其他

tag:
- Uniapp
---

# Uniapp 笔记



## 创建和导入：

```shell
npm install -g @vue/cli

vue create -p dcloudio/uni-preset-vue my-project
或
npx degit dcloudio/uni-preset-vue#vite my-vue3-project

cd到目录后
npm run dev:mp-weixin

在微信小程序导入路径：

....\my-project\dist\dev\mp-weixin
```



创建vue3项目

```
// 安装vue-cli
npm install -g @vue/cli@4

// 创建以 javascript 开发的工程
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
// 创建以 typescript 开发的工程
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

// 初始化，安装依赖
npm i

// 运行
npm run dev:h5 
```





[vue3无法拉取](https://blog.csdn.net/xiaoxia188/article/details/122161329)

## 全局储存变量：

```js
getApp().globalData.imgList = this.list;
```





## scroll-view flex布局不生效

```html
   <scroll-view enable-flex="true"></scroll-view>
	// 要加入enable-flex 另外可能scroll-view没设置高度
```



## TypeError: this.getOptions is not a function

```js
原因：sass版本过高，不兼容
解决：https://www.jianshu.com/p/fd38d024b35a
```



## 使用Vant Weapp组件库

[教程](https://www.jianshu.com/p/5dcada1d8f8d?from=timeline)



## uview-ui

#### \["usingComponents"]["u-tag"] 未找到

https://ask.dcloud.net.cn/question/118088

```
自己用了cnpm下载了uview，所以配置不对。用npm重新下载即可
```



## 接收uni-navigateTo的参数

```js
onLoad (option) {
    console.log(option);
    //this.id = "5d5f8e45e7bce75ae7fb8278";
    this.id = option.id;
    this.getList();
},
```

## 跳转页面并刷新

```
uni.navigateTo({
    url: url,
    success() {
        let page = getCurrentPages().pop(); //跳转页面成功之后
        if (!page) return;
        page.onLoad(); //如果页面存在，则重新刷新页面
    }
});
```

## 动画效果

https://blog.csdn.net/qq_41279374/article/details/103134688

## 动画效果不显示

https://www.cnblogs.com/haoming159/p/12423370.html

## 本地资源图片无法通过 WXSS 获取，可以使用网络图片，或者 base64

https://www.pianshen.com/article/53501574084/

http://tool.chinaz.com/tools/imgtobase



## 插槽使用并父向子传参

vue笔记中更详细

vue写完后由于组件未写入页面，所有不会更新，故看上去没效果，这时要重新编译（看错了）

[子向父](http://caibaojian.com/vue-slot.html)，写法要解构如v-slot="{ user }"

[父向子](https://blog.csdn.net/qq_31277409/article/details/108855534)

```
// 子组件
<template>
  <div class="target-category">
    <div class="category-container">
      <slot :categoryList="categoryList">
        {{categoryList[0].Name}}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryList: Array
  },
}
</script>

// 父组件
<target-category :categoryList="categoryList"></target-category>
```



## 生命周期(完整版)

[完整详细](https://blog.csdn.net/yanghongyan001/article/details/104690671)

https://www.jianshu.com/p/b7cfb4a73a2f

```
打印的值改变了，但微信开发者工具的 AppData 的值没有改变

已解决：

原因：AppData 值的改变是基于值发生修改时才会被调用。对数组的某一元素更新时，可能工具并未识别到已更改，故没有调用 AppData 改变值方法。

解决：使用一个非数组变量实时改变值，就能调用 AppData 改变值方法，顺便修改了数组的值，已实践验证。若变量赋值常量时，则只有第一次修改变量及数组

补充：后在网上找到验证 https://blog.csdn.net/crxk_/article/details/107449261
```



## tap和click区别

```
两者都会在点击时触发，但是在web手机端，clikc会有200-300ms的延时，所以要用tap代替click作为点击事件
```



## 参数e事件可用$event代替



## 复选框点击事件不触发

```
发现：点击边角处能触发
原因：由于使用组件，子组件里定义了tap.stop事件，导致上层事件不冒泡触发，而由于加了padding样式，
边角处不是子组件范围，故可触发上层事件
解决：既然阻止了上层事件，那么定义个同层及事件即可同时触发.于是定义个div覆盖即可

代码：
 <view class="checkbox"
            v-show="showCheck">
        <fui-checkbox :value="index"
                      :checked="item.isCheck"></fui-checkbox>
        <div class="box"
             @tap="select(index)"></div>
</view>
// css
.checkbox {
  padding: 5px;
  position: relative;
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
```



## movable-area置于顶层又不阻止下方点击事件

[网址](https://www.jianshu.com/p/6e74cdc8be3a)

[网址2](https://www.cnblogs.com/kunmomo/p/11752669.html)





## 获取屏幕高度

```
// 获取屏幕高度
uni.getSystemInfo({
  success: function (res) {
    console.log(res);
  }
});
```



## vue不推荐直接在子组件中修改父组件传来的props的值，会报错

```
报错：Avoid mutating a prop directly since the value will be overwritten 
whenever the parent component re-renders. Instead, use a data or computed 
property based on the prop's value. Prop being mutated: "checked"

原因：由于父组件中值修改了而子组件未修改，故影响到子组件，所以不推荐这样做
解决：子组件定义个变量，然后在created()中接收props的值，这样父组件的值就不影响到子组件值，
而是通过props修改子组件的值，两者关联的值一起改变
```

## 父组件修改值，子组件仍是原始值

```
原因：子组件数据渲染时间太短，数据暂未更改
解决：调用方法时给个延时函数
```





## 获取节点信息

```js
uni.createSelectorQuery().select('#page').boundingClientRect(data => {
  console.log(data);
  uni.pageScrollTo({ duration: 100, scrollTop: data.top, }) // 并滚动
}).exec()
```

## 动态修改按钮高度，并位置保持不变

```js
uni.createSelectorQuery().select('#page').boundingClientRect(data => {
  console.log(data);
  let that = this
  uni.getSystemInfo({
    success: function (res) {
      console.log(res);
      let top = res.safeArea.height * 0.75
      that.$refs.operate.top = "top:" + top.toString() + "px;"
    }
  });
  let height = parseInt(data.height)
  this.$refs.operate.high = "height:" + height.toString() + "px;";
  console.log(this.$refs.operate.high, this.$refs.operate.top);
}).exec()
```



## ["usingComponents"]\["uni-calendar"] 未找到

```
原因：发现是路径问题，uni-ui在@dcloudio_uni-ui@1.4.11下而非@dcloudio下
解决：更改vue.config.js编译依赖为
module.exports = {
    transpileDependencies: ['@dcloudio_uni-ui@1.4.11/uni-ui']
}
更改page.json的easycom为
"^uni-(.*)": "@dcloudio_uni-ui@1.4.11/uni-ui/lib/uni-$1/uni-$1.vue",
```



## VUE/uniapp 引用子组件防止事件冒泡失效

[网址](https://blog.csdn.net/weixin_44816309/article/details/105946433)



## ERESOLVE could not resolve 版本不兼容

```
npm install命令后边加上--legacy-peer-deps
```