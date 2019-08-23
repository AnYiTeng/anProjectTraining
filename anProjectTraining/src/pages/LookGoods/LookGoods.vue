<template>
  <div id="lookGoodsContainer">
    <div class="lookGoodHead">
      <i class="iconfont icon-zhuye" @click="$router.push('/homePage')"></i>
      <div class="discoverSelect">
        <span class="discover" :class="{active: isShow}" @click="change">发现</span>
        <span class="zhenXuanJia" :class="{active: !isShow}" @click="change">甄选家</span>
      </div>
      <div class="icon">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div> 
    </div>
    <!-- 发现 -->
    <div class="faxian" v-if="isShow">
      <Tag></Tag>

      <!-- 显示的分类页面 -->
      <div>
        <!-- 盛夏特别版 -->
        <div v-if="$route.params.id === '0'">
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
          <!-- 轮播图 -->
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
              <div class="swiper-slide">
                <img src="./images/01.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/02.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/03.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/04.jpg" alt="">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>

          <div class="swiper-container-thumbs">
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
              <div class="swiper-slide">
                <img src="./images/01.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/02.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/03.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="./images/04.jpg" alt="">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>

          <img src="https://yanxuan.nosdn.127.net/15645393458728772.jpeg" alt="" class="swiperDownImg">

          <!-- 图片列表 -->
          <div class="identifyContents">
            <div class="identifyContent">
              <div class="my_module p2p_module cyc_m_cBHA7Aij">
                <div>
                  <div class="p2p-content">
                    <div class="p2p-imgContent">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="my_module">
                <div class="my_moduleGree">
                  <div class="my_moduleGreeSumer">
                    <div class="my_moduleGreeSumerList">
                      <a class="m-banner">
                        <img src="https://yanxuan.nosdn.127.net/15640407915873725.png" class="banner">
                      </a>
                      <div class="m-873DE2-wrap">
                        <div class="m-goodsList">
                          <div class="m-goods" >
                            <a class="u-goodsUrl" href="https://m.you.163.com/item/detail?id=1113001&amp;&amp;_stat_subject=21815" title="6包/提  谷风一木3层软抽面巾纸">
                              <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&amp;thumbnail=200x200&amp;quality=95" class="img">
                            </a>
                            <div class="u-info">
                              <p class="u-name">6包/提  谷风一木3层软抽面巾纸</p>
                              <p class="u-tags" >
                                <span class="tag app">新人专享价</span>
                              </p>
                              <p class="u-price">
                                <span class="price">16</span>
                                <span class="oldPrice">16.9</span>
                              </p>
                              <a href="https://m.you.163.com/item/detail?id=1113001&amp;_stat_subject=21815" class="Goods">立即抢购</a>
                            </div>
                          </div>
                          <div class="m-goods" >
                            <a class="u-goodsUrl" href="https://m.you.163.com/item/detail?id=1113001&amp;&amp;_stat_subject=21815" title="6包/提  谷风一木3层软抽面巾纸">
                              <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&amp;thumbnail=200x200&amp;quality=95" class="img">
                            </a>
                            <div class="u-info">
                              <p class="u-name">6包/提  谷风一木3层软抽面巾纸</p>
                              <p class="u-tags" >
                                <span class="tag app">新人专享价</span>
                              </p>
                              <p class="u-price">
                                <span class="price">16</span>
                                <span class="oldPrice">16.9</span>
                              </p>
                              <a href="https://m.you.163.com/item/detail?id=1113001&amp;_stat_subject=21815" class="Goods">立即抢购</a>
                            </div>
                          </div>
                          <div class="m-goods" >
                            <a class="u-goodsUrl" href="https://m.you.163.com/item/detail?id=1113001&amp;&amp;_stat_subject=21815" title="6包/提  谷风一木3层软抽面巾纸">
                              <img src="https://yanxuan-item.nosdn.127.net/85824fffc0fc2042b3d068a1a20b560f.png?imageView&amp;thumbnail=200x200&amp;quality=95" class="img">
                            </a>
                            <div class="u-info">
                              <p class="u-name">6包/提  谷风一木3层软抽面巾纸</p>
                              <p class="u-tags" >
                                <span class="tag app">新人专享价</span>
                              </p>
                              <p class="u-price">
                                <span class="price">16</span>
                                <span class="oldPrice">16.9</span>
                              </p>
                              <a href="https://m.you.163.com/item/detail?id=1113001&amp;_stat_subject=21815" class="Goods">立即抢购</a>
                            </div>
                          </div>
                          <div class="J_moreBtn">
                            <a class="u-more">
                              查看更多
                              <i class="iconfont icon-jiantou" ></i>
                            </a>
                          </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="my_module p2p_module cyc_m_cBHA7Aij">
                <div>
                  <div class="p2p-content">
                    <div class="p2p-imgContent">
                      <img class="p2p-bgImg J_lazyload_pre J_lazyload_end"  src="https://yanxuan.nosdn.127.net/15656886328485352.jpeg" style="width:375px; height:85px">
                    </div>
                  </div>
                </div>
              </div>
              <div class="hight"></div>
            </div>
          </div>

          <!-- 评论列表 -->
          <Common></Common>
        </div>

        <!-- 推荐 -->
        <!-- <router-view> </router-view> -->
        <TuiJian v-else-if="$route.params.id === '1'"></TuiJian>
      </div>
        
    </div>
    


    <!-- 甄选家 -->
    <div class="zenxuan" v-else>
      <ZhenXuanJia></ZhenXuanJia>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tag from '../../components/Tag/Tag'
  import Common from './Common'
  import ZhenXuanJia from './ZhenXuanJia'
  import TuiJian from './TuiJian'

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        isShow: true,
      }
    },
    components: {
      Tag,
      Common,
      ZhenXuanJia,
      TuiJian
    },
    computed: {
      ...mapState({
        currentIndex: state => state.lookGoods.currentIndex
      })
    },
    methods: {
      change () {
        this.isShow = !this.isShow
        // this.$route.meta.showFooter = !this.$route.meta.showFooter
        // this.$route.meta.showFooter = false
        // console.log(this.$route.meta.showFooter)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch('getHomeData')
        new Swiper ('.swiper-container', {
          // loop: true, // 循环模式选项
          autoplay: true, // 自动轮播
          // delay: 2000,
          // // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination', 
          // }
          spaceBetween: 10,
          thumbs: {
            swiper: {
              el: '.swiper-container-thumbs', //注意此处的设置方式
              spaceBetween: 10,
              slidesPerView: 5.6,
              watchSlidesVisibility: true,/*避免出现bug*/
            },
            slideThumbActiveClass: 'my-slide-thumb-active',
          }
        })
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #lookGoodsContainer
    .lookGoodHead
      box-sizing border-box
      position fixed
      left 0PX
      top 0PX
      background #fff
      padding 2PX 14PX 
      width 100%
      // width 380px
      height 48PX
      line-height 42px
      display flex
      justify-content space-between
      border-bottom 1px solid #ccc
      z-index 99
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
    .faxian
      .imgs
        margin-top 90PX
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
              width 100%
              height 100%
      .swiper-container-thumbs
        width 100%
        overflow hidden
        padding-right 0PX
        .swiper-wrapper
          .swiper-slide
            width 58PX !important
            height 63PX !important
            margin-right 10PX !important
            img
              width 63px
              height 63px
              border-radius 10px
      .swiperDownImg
        width 375px
        height 85px
      .identifyContents
        width 100% 
        .identifyContent
          .my_moduleGree
            background-size 100% auto
            width 375px
            margin auto
            overflow hidden
            .my_moduleGreeSumer
              font-size 0
              width 375px
              margin 0 auto
              .m-banner
                width 375px
                display block
                position relative
                .banner
                  width 370px
                  margin auto
                  display block
              .m-873DE2-wrap
                background #95d0a2
                padding 10px  5px
                box-sizing border-box
                width 370px
                margin auto
                display block
                border-radius 0 0 7px  7px
                .m-goodsList
                  white-space nowrap
                  overflow auto hidden
                  .m-goods
                    display inline-block
                    width 100px
                    position relative
                    text-align center
                    line-height 0
                    background-color #fff
                    border-radius 7px
                    overflow hidden
                    margin-right 4px
                    vertical-align: middle
                    .u-goodsUrl
                      display: block
                      width 100px
                      height  100px
                      margin auto
                      position relative
                      .img
                        width 100px
                        height 100px
                        display block
                        margin auto
                    .u-info
                      width 100%
                      padding-bottom 7px
                      padding-top 15px
                      .u-name
                        display block;
                        width 100px
                        height 17px
                        line-height 17px
                        font-size 12px
                        color  #3b3b3b;
                        padding: 0 7px
                        -webkit-box-sizing  border-box;
                        box-sizing  border-box;
                        overflow  hidden;
                        white-space  nowrap;
                        text-overflow  ellipsis
                        .u-tags
                          width 100%
                          height 15px
                          overflow hidden
                          white-space nowrap
                          text-align center
                          line-height 15px
                          .tag
                            display inline-block;
                            height 10px
                            line-height 10px
                            font-size  6px
                            color: #e36843;
                            border: 1px solid #e36843;
                            padding: 1px
                            margin 1px
                            vertical-align: middle
                        .u-price
                          display: block;
                          margin: auto;
                          text-align: center;
                          height: 15px
                          .price
                            font-size:10px
                            line-height: 15px
                            color: #d83535
                            font-weight: 700
                          .oldPrice
                            font-size: 10px
                            line-height: 15px
                            color: #9b9b9b;
                            padding-left:15px
                            text-decoration: line-through
                        .Goods
                          background #dc4516
                          display block
                          color white
                          border-radius 15px
                          width 70px
                          height 15px
                          line-height: 15px
                          font-size 12px
                          margin auto
                  .J_moreBtn
                    background rgb(71 121 83)
                    height 190px
                    width 44px
                    display inline-block
                    position relative
                    vertical-align middle
                    border-radius 9px
                    .u-more
                      color white
                      display block
                      width 30px
                      height  70px
                      font-size 10px
                      text-align center
                      position absolute
                      left 5px
                      top 50%
                      .icon-jiantou
                        margin-top 5px
                        display block
                        width 20px
                        height 20px
                        text-align center
                        line-height 28px
                        font-size 10px
                        border-radius 10px
                        border 2px solid white
          .hight
            height 50px

</style>
