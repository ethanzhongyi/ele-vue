import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

import 'common/stylus/index.styl'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})