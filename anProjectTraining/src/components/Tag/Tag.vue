<template>
  <div class="allTag">
    <div class="tag wrapper">
      <ul class="headTag">
        <li class="headTagItem" v-for="(item, index) in type" :key="index" :class="{active:currentIndex ===index}" @touchstart="choose(index)">
          {{item.tabName}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        currentIndex: 0
      }
    },
    computed: {
      ...mapState({
          type: state => state.lookGoods.type
      })
    },
    mounted() {
      this.$store.dispatch('reqLookGoodTag')
      new BScroll('.wrapper',{
          scrollX: true,
          scrollY: false,
          bounce: false
      })
      this.$store.commit('getCurrentIndex', this.currentIndex)
    },   
    methods: {
      choose(index){
        this.currentIndex = index
        this.$router.push(`/lookGoods/${index}`)
      }
    }, 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .allTag
      // overflow hidden
      position fixed
      left 0
      top 48px
      height 40px
      width 100%
      z-index 999
      border-bottom 1px solid #ccc
      .tag
        height 100%
        width 100%
        background #fff
        .headTag
          padding-left 2px
          padding-right 160px
          // position fixed
          // top 36px
          // left 0
          z-index 99
          background #fff
          width 100%
          display flex
          // justify-content space-around
          justify-content left
          flex-wrap nowrap
          margin 12px 0 0 0
          float left
          .headTagItem
            // float left
            font-size 14px
            color #333
            height 20px
            margin 0 10px 0 10px
            white-space nowrap
            &.active
              color #D27A7E
              border-bottom 2px solid #D27A7E
</style>
