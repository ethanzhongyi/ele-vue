<template>
  <span class="icon" :class="[iconSize, iconIndex]"></span>
</template>

<script>
export default {
  props: {
    size: {
      type: Number
    },
    index: {
      type: Number
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  computed: {
    iconSize() {
      return 'icon_' + this.size
    },
    iconIndex() {
      return this.classMap[this.index]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.icon
  display inline-block
  vertical-align top
  background-repeat no-repeat
  &.icon_1
    width 12px
    height 12px
    margin-right 4px
    background-size 12px 12px
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
  &.icon_2
    width: 16px
    height: 16px
    margin-right: 6px
    background-size: 16px 16px
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.invoice
      bg-image('invoice_2')
    &.special
      bg-image('special_2')
  &.icon_3
    width 12px
    height 12px
    margin-right 2px
    background-size 12px 12px
    &.decrease
      bg-image('decrease_3')
    &.discount
      bg-image('discount_3')
    &.guarantee
      bg-image('guarantee_3')
    &.invoice
      bg-image('invoice_3')
    &.special
      bg-image('special_3')
  &.icon_4
    width 16px
    height 16px
    margin-right 6px
    background-size 16px 16px
    &.decrease
      bg-image('decrease_4')
    &.discount
      bg-image('discount_4')
    &.guarantee
      bg-image('guarantee_4')
    &.invoice
      bg-image('invoice_4')
    &.special
      bg-image('special_4')
</style>
