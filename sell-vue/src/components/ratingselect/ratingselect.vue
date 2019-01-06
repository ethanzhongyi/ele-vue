<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType===2}">
        {{desc.all}}
        <span class="count">{{ratings.length}}</span>
      </span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">
        {{desc.positive}}
        <span class="count">{{positives.length}}</span>
      </span>
       <span @click="select(1,$event)" class="block negative" :class="{'active': selectType===1}">
        {{desc.negative}}
        <span class="count">{{negatives.length}}</span>
      </span>
    </div>
    <div class="switch" :class="{'on':onlyContent}" @click="toggleContent">
      <span class="icon-keyboard_arrow_right"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
const POSITIVE = 0
const NEGATIVE = 1
const ALL = 2

export default {
  props: {
    ratings: {
      type: Array,
      default: () => []
    },
    selectType: {
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default() {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
  },
  computed: {
    positives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === POSITIVE
      })
    },
    negatives() {
      return this.ratings.filter((rating) => {
        return rating.rateType === NEGATIVE
      })
    }
  },
  methods: {
    select(type, event) {
      if (!event._constructed) {
        return
      }
      //this.selectType = type  //emit select事件到父组件里面去做
      this.$emit('select', type)
    },
    toggleContent(event) {
      if (!event._constructed) {
        return
      }
      //this.onlyContent = !this.onlyContent  //emit toggle 事件到父组件里面去做
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.styl"

.ratingselect
  .rating-type
    padding 18px 0
    margin 0 18px
    border-1px(rgba(7, 17, 27, 0.1))
    font-size 0
    .block
      display inline-block
      padding 8px 12px
      margin-right 8px
      line-height 16px
      border-radius 1px
      font-size 12px
      color rgb(77, 85, 93)
      &.active
        color #ffffff
      .count
        margin-left 2px
        font-size 8px
      &.positive
        background-color rgba(0, 160, 220, 0.2)
        &.active
          background-color rgb(0, 160, 220)
      &.negative
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: rgb(77, 85, 93)
  .switch
    padding: 12px 18px
    line-height: 24px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    color: rgb(147, 153, 159)
    font-size: 0
    &.on
      .icon-keyboard_arrow_right
        color: #00c850
    .icon-keyboard_arrow_right
      display: inline-block
      vertical-align: top
      margin-right: 4px
      font-size: 24px
    .text
      display: inline-block
      vertical-align: top
      font-size: 12px
</style>