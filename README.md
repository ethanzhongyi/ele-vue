# ele-vue
模仿饿了么外卖`web app`

知识点 1：`header-detail`  这种全屏类的弹窗组件 应该放在  `body`  下的，组件用到 `fixed` 布局，如果嵌套的话的可能会 `bug` ,我们这里就用到了 `cube-ui` 的 `createAPI` 模块申明式的去写，`api`式的去调用组件