# ele-vue
模仿饿了么外卖`web app`

> 项目地址： `http://ustbhuangyi.com/sell/?id=3#/goods`

#### 知识点 1：`header-detail`  这种全屏类的弹窗组件 应该放在  `body`  下的，组件用到 `fixed` 布局，如果嵌套的话的可能会 `bug` ,可以使用 `cube-ui` 的 `createAPI` 模块申明式的去写，`api`式的去调用组件



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