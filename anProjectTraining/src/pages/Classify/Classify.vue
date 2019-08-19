<template>
  <div id="classifyContainer">
    <div class="classifyHead">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="搜索商品, 共21612款好物">
    </div> 
    <div class="classifyLeft wrapper">
      <ul>
        <li class="active">推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
        <li>推荐专区</li>
      </ul>
    </div>
    <div class="classifyRight wrapper">
      <img class="bigImg" src="https://yanxuan.nosdn.127.net/5b4ca33a0205482398006405c1db15e8.jpg?imageView&thumbnail=0x196" alt="">
      <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/c117ea2f1c4d978eb1f310d6d9ec3226.png?imageView&quality=85&thumbnail=144x144" alt="">
          <p>员工精选好货</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      new BScroll('.wrapper',{
          scrollY: true,
          click: true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #classifyContainer
    .classifyHead
      position relative
      height 42px
      padding 0 14px
      line-height 42px
      input
        position absolute
        left 14px
        top 8px
        width 331px
        height 26px
        background #EDEDED
        text-align center
        font-size 12px
      i
        position absolute
        left 92px
        top 0
        z-index 2
        font-size 14px
    
    .classifyLeft
      height 600px
      width 78px
      padding 6px 0
      float left
      z-index 999
      ul
        height 100%
        display flex
        flex-direction column
        justify-content space-around
        li
          font-size 13px
          text-align center
          height 24px
          line-height 24px
          &.active
            color #AB2B2B
            border-left 4px solid #AB2B2B
    .classifyRight
      float right 
      width 282px
      height 549px
      padding 14px 14px 10px 14px
      box-sizing border-box
      .bigImg
        width 253px
        height 92px
        padding-bottom 15px
      ul
        overflow hidden
        li
          width 69px
          height 69px
          text-align center
          margin-right 16px
          float left
          margin-bottom 34px
          &:nth-child(3n)
            margin-right 0
          img 
            width 100%
            height 100%
          p
            font-size 12px
</style>
