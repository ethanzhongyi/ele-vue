<template>
  <div id="app">
    <v-header :seller='seller'></v-header>
    <header-detail :seller='seller'></header-detail>
    <Tabs></Tabs>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import VHeader from './components/v-header/v-header'
import Tabs from 'components/tabs/tabs'
import { getSeller } from 'api'

export default {
  name: 'app',
  data() {
  	return {
  	  seller: {}
  	}
  },
  created() {
  	this._getSeller()
  },
  methods: {
  	_getSeller() {
  	  getSeller().then((seller) => {
  	  this.seller = seller
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
