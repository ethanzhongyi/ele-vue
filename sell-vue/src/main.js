import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

import 'common/stylus/index.styl'
import '../static/css/reset.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})