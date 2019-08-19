<template>
  <div id="lookGoodsContainer">
    <div class="lookGoodHead">
      <i class="iconfont icon-zhuye"></i>
      <div class="discoverSelect">
        <span class="discover active">发现</span>
        <span class="zhenXuanJia">甄选家</span>
      </div>
      <div class="icon">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div> 
    </div>
    <Tag></Tag>
    <div class="imgs">
      <div class="first">
        <img src="https://yanxuan.nosdn.127.net/15639572098632760.jpeg" alt="">
      </div>
      <div class="second">
        <img src="https://yanxuan.nosdn.127.net/15656868015315337.jpg?_width=750&_height=344" alt="">
      </div>
      <div class="third">
        <img src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" alt="">
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import Tag from '../../components/Tag/Tag'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        type: state => state.lookGoods.type
      })
    },
    components: {
      Tag
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #lookGoodsContainer
    .lookGoodHead
      box-sizing border-box
      position relative
      padding 2PX 14PX 
      width 100%
      // width 380px
      height 48PX
      line-height 42px
      display flex
      justify-content space-between
      border-bottom 1px solid #ccc
      .icon-zhuye
        font-size 20px
      .discoverSelect
        margin-left 40PX
        .discover,.zhenXuanJia
          font-size 14px
          margin 0px 8PX
          vertical-align middle
          color #7F7F7F
          &.active
            font-size 20px
            font-weight bold
            color #B4282D
      .icon
        .iconfont
          font-size 25px
        .icon-sousuo
          margin-right 15px
    .imgs
      margin-top 42PX
      .first
        img 
          width 375px
          height 121px
          display block
      .second
        img 
          width 375px
          height 172px
          display block
      .third
        img 
          width 375px
          height 85px
          display block
</style>
