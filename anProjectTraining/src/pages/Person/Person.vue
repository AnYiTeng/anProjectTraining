<template>
  <div id="personContainer">
    <div class="personHead">
      <i class="iconfont icon-zhuye" @click="$router.push('/homePage')"></i>
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      <div class="searchAndCar">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.push('/shoppingCar')"></i>
      </div>
    </div>
    <div class="personMain">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="loginType">
        <div class="phoneLogin">
          <i class="iconfont icon-shouji"></i>
          <button @click="toPhoneLogin">手机号快速登录</button>
        </div>
        <div class="emailLogin">
          <i class="iconfont icon-xin"></i>
          <button @click="toMessageLogin">邮箱账号登录</button>
        </div>
      </div>
    </div>

    <div class="weiQbo">
      <div class="weixin wqb">
        <i class="iconfont icon-weixin"></i>
        <a href="javascript:">微信</a>
      </div>
      <div class="qq wqb">
        <i class="iconfont icon-qq"></i>
        <a href="javascript:">QQ</a>
      </div>
      <div class="weibo wqb">
        <i class="iconfont icon-weibo"></i>
        <a href="javascript:">微博</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
    methods: {
      toPhoneLogin () {
        this.$router.push('/login/phone')
      },
      toMessageLogin () {
        this.$router.push('/login/e-mail')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #personContainer
    background #F2F5F4
    height 667px
    .personHead
      padding 10px 7px 10px 11px
      height 42px
      display flex
      justify-content space-between
      background #fff
      box-sizing border-box
      .icon-zhuye
        font-size 24px
      img
        width 82px
        height 25px
        margin-left 32px
      .searchAndCar
        width 70px
        height 30px
        display flex
        justify-content space-between
        .iconfont
          font-size 24px
    .personMain
      position relative
      img
        position absolute
        left 116px
        top 58px
        width 128px
        height 43px
      .loginType
        position absolute
        left 22px
        top 200px
        .phoneLogin
          margin-bottom 20px
          button 
            width 321px
            height 45px
            background #DD1A21
            color #fff
            border none
          .icon-shouji
            position absolute
            left 84px
            top 12px
            font-size 24px
            color #fff
        .emailLogin
          button
            width 321px
            height 45px
            background #fff
            color #DD1A21
            border 1px solid #DD1A21
          .icon-xin
            position absolute
            left 84px
            top 76px
            font-size 24px
            color #DD1A21
    .weiQbo
      margin-top 540PX
      display flex
      justify-content space-around
      font-size 14px
      color #7F7F7F
      padding 0 50PX
      .wqb
        &.qq
          padding 0PX 22PX
          border-left 1px solid #7F7F7F
          border-right 1px solid #7F7F7F
        a
          margin-left 4px
</style>
