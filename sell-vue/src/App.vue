<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <Tabs></Tabs>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header'
import Tabs from 'components/tabs/tabs'
//import { getSeller } from 'api'
import { urlParse } from 'common/js/util'

const ERR_OK = 0
const debug = process.env.NODE_ENV !== 'production'

export default {
  name: 'app',
  data() {
  	return {
  	  seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()  //自执行函数,从 window.location.search 中提取商家id
      }
  	}
  },
  created() {
  	this._getSeller()
  },
  methods: {
  	_getSeller() {
  	  const url = debug ? '/api/seller' : 'http://ustbhuangyi.com/sell/api/seller'
      this.$http.get(url + '?id=' + this.seller.id).then((response) => {
        response = response.data
        if (response.errno === ERR_OK) {
          this.seller = Object.assign({}, this.seller, response.data)
          //data.json里没有id，从url里提取 id 放在data里，用 Object.assign 去扩展到 seller
        }
      })
  	}
  },
  components: {
    VHeader,
    Tabs
  }
}
</script>
<style lang="stylus">

</style>
