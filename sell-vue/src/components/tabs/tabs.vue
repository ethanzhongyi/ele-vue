<template>
  <div class="tabs border-1px">
    <router-link class="tabs-item" to="/goods">商品</router-link>
    <router-link class="tabs-item" to="/ratings">评价</router-link>
    <router-link class="tabs-item" to="/seller">商家</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"
.tabs
  display flex
  width 100%
  height 40px
  line-height 40px
  border-1px(rgba(7,17,27,0.1))
  .tabs-item
    flex 1
    text-align center
    font-size: 14px
    color: rgb(77,85,93)
    &.active
      color: rgb(240,20,20)
</style>