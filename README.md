
![项目展示](https://github.com/sayid95/MD-pic/blob/master/pic/eleme.png)

项目介绍： 

* 掌担Vue.js在实战项目中的运用

* 学会使用Vue.js开发完整的移动端App
	
* 学会前端工程化、组件化、模块化的开发方式



学习内容 ：
	 
* Vue 核心思想：组件化、数据驱动
	
* Vue-cli脚手架
	
* Vue-router

* Vue-resource

* webpack

* es6+eslint

* 工程化、组件化、模块化

* 移动端开发常用技巧



Vue-cli：

* Vue-cli脚手架介绍

* Vue-cli脚手架安装

* Vue-cli安装后的项目文件详细介绍

* Vue-cli生成的项目调试
* Vue-cli webpack dev 配置脚本详细介绍



项目准备工作：
*  需求分析
*  项目资源准备
*  制作iconfont图标字体
*  代码目录结构设计
*  模拟测试数据



项目页面骨架开发：
* 整体设计
* 组件拆分
* Vue-router使用
* flex弹性布局介绍
* 移动端1px边框实现



Header 组件：
* Vue-resource 应用
* Vue过渡动画应用
* css sticky footer 布局介绍
* star星星组件抽象
* 图片和背景高斯模糊效果实现



goods商品列表页：
* Vue项目中引入第三方JS库better-scroll
* Vue.js计算属性的应用
* 处理移动端列表滚动
* 实现多列表滚动联动
* 自定义Vue.js 过渡动画实现小球飞人动画效果
* 贝塞尔曲线缓动函数应用
* 父子组件通讯



food商品详情页：
* 图片默认占位技巧介绍
* split分隔组件抽样
* ratingselect 评论组件抽样
* 自定义过滤器 datefilter



ratings评价列表：
* Vue.js组件复用
* 媒体查询适应小屏幕手机



seller商家详情页：
* 基于localStorage的移动端通用数据存取方案
* keep-alive实现Vue.js组件缓存，体验优化



#### 知识点 1：`header-detail`  这种全屏类的弹窗组件 应该放在  `body`  下的，组件用到 `fixed` 布局，如果嵌套的话的可能会 `bug` ,我也使用了cube-ui 来实现商品的联动，也可以使用 `cube-ui` 的 `createAPI` 模块申明式的去写，`api`式的去调用组件



#### 知识点 2：商家页中的收藏功能的实现，借助 `localStorage`根据不同的id去存贮 `key` 是`true`  `or` `false` , 

#### 1,在 `APP.vue` 中：

#### `this.seller = Object.assign({}, this.seller, response.data)`  

#### //data.json里没有商家的 id，从 url `?id=123456&a=b` 里提取 id 放在data里，用 Object.assign 去扩展到 seller, 然后传给各个组件

2,  `saveToLocal` 该方法把`window.localStorage` 的 `seller.id` 保存到`window.localStorage` 中

`loadFromLocal` 该方法从``window.localStorage`` 读取 `seller` ，然后根据 `id  `拿到 `value`，即是收藏与否的标志位

`urlParse` 该方法用于解析url参数，返回 Object {id:12345}

```js
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.seller
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  window.localStorage.seller = JSON.stringify(seller)
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.seller
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return def
  }
  let ret = seller[key]
  return ret || def
}

```



```js
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  let url = window.location.search
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg)
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let temArr = item.substring(1).split('=')
      let key = decodeURIComponent(temArr[0])
      let val = decodeURIComponent(temArr[1])
      obj[key] = val
    })
  }
  return obj
}
```