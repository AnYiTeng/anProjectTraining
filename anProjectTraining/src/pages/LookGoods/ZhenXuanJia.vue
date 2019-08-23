<template>
  <div class="container">
    <!-- 轮播图 -->
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e5c1181a28981ca0b6087d2fb3e7d9d8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/566844f22dbcc4f949aa2403bf1503e6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/975f983b0314af8da367b781efa5afeb.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/b69d768f3cef93c13360a99c094cb5d0.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>

    <!-- 建议征集 -->
    <div class="suggestCollect">
      <p class="tellMe">
        建议征集<br>
        告诉我们,你们的好物标准
      </p>
      <div class="suggestMain">
        <img src="https://yanxuan.nosdn.127.net/2caf82b6836adc95d47229bea47bb1ed.jpg?imageView&quality=75&thumbnail=272x200">
        <div>
          <p>你会喜欢怎么样的一碗靓汤</p>
          <span>32条建议</span>&nbsp;&nbsp;&nbsp;
          <span>834人看过</span>
        </div>
      </div>
      <p class="suggestContent">
        平时，你会喜欢喝什么口味的汤？会在什么生活场景下，想要拥有一碗靓汤？如果我们想要推出一碗靓汤，你会希望有哪些口味、具体规格和定价、简单加热，还是以料包形式进行烹饪。快来和我们聊聊吧～
      </p>
      <button class="suggestBtn">我要建议</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    mounted() {
      this.$nextTick(() => {
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay: true, // 自动轮播
          delay: 2000,
          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination', 
          // }
        }) 
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    height 100%
    background #F4F4F4
    .swiper
      padding-top 58PX
      padding-bottom 12px
      background #fff
      .swiper-container 
        width 100%
        height: 177px
        z-index 0
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 100%
            height 100%
            img 
              margin-left 36PX
              width 300PX
              height 100%
    .suggestCollect
      background #fff
      margin-top 10PX
      width 345px
      height 370px
      padding 0 15px 20px 15px
      .tellMe
        text-align center
        font-size 14px
        margin-bottom 16PX
      .suggestMain
        background #F4F4F4
        padding 12PX 0 12px 12px
        display flex
        justify-content space-between
        img
          width 136px
          height 100px
          margin-right 10PX
        div
          margin-top 14PX
          p
            font-size 18px
          span
            font-size 12px
      .suggestContent
        font-size 12px
        color #7F7F7F
        margin-top 18PX
        line-height 18PX
      button
        margin-top 20PX
        outline none
        border none
        border 1px solid #ccc
        background #fff
        width 345px
        height 44px          
</style>
