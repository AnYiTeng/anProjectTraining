<template>
  <div id="footerGuide">
    <ul class="footList">
        <li :class="$route.path==='/homePage'?'active':''" @click="goto('/homePage')">
            <i class="iconfont icon-icon-test"></i>
            <p>首页</p>
        </li>
        <li :class="$route.path==='/classify/classcontent/0'?'active':''" @click="goto('/classify')">
            <i class="iconfont icon-chuangtougui"></i>
            <p>分类</p>
        </li>
        <li :class="$route.path==='/lookGoods/0'?'active':''" @click="goto('/lookGoods')">
            <i class="iconfont icon-zhaopian"></i>
            <p>识物</p>
        </li>
        <li :class="$route.path==='/shoppingCar'?'active':''" @click="goto('/shoppingCar')">
            <i class="iconfont icon-gouwuche"></i>
            <p>购物车</p>
        </li>
        <li :class="$route.path==='/person'?'active':''" @click="goto('/person')">
            <i class="iconfont icon-gerenzhongxin"></i>
            <p>个人</p>
        </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goto (path) {
              this.$router.push(path)
          }
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #footerGuide
        z-index 99
        position fixed
        width 100%
        bottom 0px
        padding-bottom 8px
        background #fff
        .footList
            display flex
            justify-content space-around
            border-top 1px solid #A6A6A6
            padding-top 4px
            li
                text-align center
                font-size 12px
                color #A6A6A6
                font-weight bold
                i
                    font-size 22px
                &.active
                    font-weight bold
                    color #D27A7E
</style>
