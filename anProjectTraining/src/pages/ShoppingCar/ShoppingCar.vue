<template>
  <div id="shopCarContainer">
    <div class="shopHead">
      <span class="left">购物车</span>
      <span class="right">领券</span>
    </div>
    <div class="threeConit">
      <ul>
        <li>
          <i class="iconfont icon-dian"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-dian"></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i class="iconfont icon-dian"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="goLogin">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <p>去添加点什么吧</p>
      <button @click="$router.push('/person')">登录</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #shopCarContainer
    .shopHead
      // width 100%
      height 42px
      padding 0 14px
      line-height 42px
      .left
        float left
        font-size 18px
      .right
        float right 
        font-size 14px
        margin-right 16px
        color #B4282D
    .threeConit
      ul
        display flex
        justify-content space-around
        width 100%
        height 33px
        background #EEEEEE
        li
          font-size 12px
          height 100%
          line-height 33px
    .goLogin
      position relative
      width 100%
      height 597px
      background #F4F4F4
      img 
        position absolute
        left 0
        top 0
        right 0
        bottom 114px
        margin auto
        width 119px
        height 119px
      p
        position absolute
        left 134px
        top 294px
        font-size 14px
        color #999
      button 
        width 230px
        height 42px
        background-color #B4282D
        border none 
        color #fff
        position absolute
        left 0
        top 0
        right 0
        bottom -102px
        margin auto
</style>
