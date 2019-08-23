<template>
  <div id="homePage" class="wrapper">
    <div class="head">
      <div class="homeHeader">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索商品，共21613款好物" @click.prevent="toSearch"/>
        <button @click="toLogin">登录</button>
      </div>
    </div>
    

    <!-- 头部导航 -->
    <div class="allTag">
      <div class="tag" v-show="tagShow">
        <ul class="headTag wrapper">
          <li class="headTagItem active">
            推荐
          </li>
          <li class="headTagItem">
            居家生活
          </li>
          <li class="headTagItem">
            服饰鞋包
          </li>
          <li class="headTagItem">
            美食酒水
          </li>
          <li class="headTagItem">
            个护清洁
          </li>
          <li class="headTagItem">
            母婴亲子
          </li>
          <li class="headTagItem">
            运动旅行
          </li>
          <li class="headTagItem">
            数码家电
          </li>
          <li class="headTagItem">
            全球特色
          </li>
        </ul>
      </div>

      <div class="tagWithMask" v-show="!tagShow">
        <div class="maskHead">全部频道</div>
        <div class="maskList">
          <ul v-if="homeData.kingKongModule">
            <li v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">{{item.text}}</li>
          </ul>
        </div>
        <div class="mask" @click="xialaTag"></div>
      </div>

      <div class="xialaMenu">
        <i class="iconfont icon-xiala-" @click="xialaTag" :class="{tagRotate}"></i>
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
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 自营品牌 无忧退货 快速退款 -->
    <div class="fastRefund">
      <ul class="fastRefundList">
        <li class="fastRefundItem" v-for="(item, index) in homeData.policyDescList" :key="index">
          <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
          <span>{{item.desc}}</span>
        </li>
      </ul>
    </div>

    <!-- 商品类型选择 -->
    <div class="shopType">
      <ul class="shopTypeList" v-if="homeData.kingKongModule">
        <li v-for="(item, index) in homeData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>

    <!-- 广告 -->
    <div class="ad">
      <img src="https://yanxuan.nosdn.127.net/f4e55920102eef630232f0f34b75cf2e.gif" alt="">
    </div>

    <!-- 模块 -->
    <div class="shopMode">
      <div class="shopSingle" v-for="(item, index) in homeData.sceneLightShoppingGuideModule" :key="index">
        <p class="bigFont">{{item.styleItem.title}}</p>
        <p class="smallFont">{{item.styleItem.desc}}</p>
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
      </div>
    </div>

    <div class="shopMode">
      <div class="prsonMake">私人订制</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
            <div class="shopModeSwiperSingle">
              <div>
                <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=330x330" alt="">
              </div>
              <span>严选礼品卡 1000元面...</span>
            </div>
          </div>
          
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="shopMode">
      <div class="timeShop">
        <span class="left">限时购</span>
        <span class="right">更多></span>
      </div>
      <div class="timeShopImg">
        <div class="timeShopImgItem">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ca08aaf3f1a350c9f98d2ee9e80f8f74.png?imageView&thumbnail=216x216&quality=75" alt="">
          </div>
          <span>￥131</span>
        </div>
        <div class="timeShopImgItem">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ca08aaf3f1a350c9f98d2ee9e80f8f74.png?imageView&thumbnail=216x216&quality=75" alt="">
          </div>
          <span>￥131</span>
        </div>
        <div class="timeShopImgItem">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ca08aaf3f1a350c9f98d2ee9e80f8f74.png?imageView&thumbnail=216x216&quality=75" alt="">
          </div>
          <span>￥131</span>
        </div>
      </div>
      <div class="timeShopImg">
        <div class="timeShopImgItem">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ca08aaf3f1a350c9f98d2ee9e80f8f74.png?imageView&thumbnail=216x216&quality=75" alt="">
          </div>
          <span>￥131</span>
        </div>
        <div class="timeShopImgItem">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ca08aaf3f1a350c9f98d2ee9e80f8f74.png?imageView&thumbnail=216x216&quality=75" alt="">
          </div>
          <span>￥131</span>
        </div>
        <div class="timeShopImgItem">
          <div>
            <img src="https://yanxuan-item.nosdn.127.net/ca08aaf3f1a350c9f98d2ee9e80f8f74.png?imageView&thumbnail=216x216&quality=75" alt="">
          </div>
          <span>￥131</span>
        </div>
      </div>
    </div>


    <div class="shopMode">
      <div class="shopSingle">
        <p class="bigFont">9.9超值专区首发</p>
        <p class="smallFont">180款爆品新定价</p>
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
      </div>
      <div class="shopSingle">
        <p class="bigFont">9.9超值专区首发</p>
        <p class="smallFont">180款爆品新定价</p>
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
      </div>
      <div class="shopSingle">
        <p class="bigFont">9.9超值专区首发</p>
        <p class="smallFont">180款爆品新定价</p>
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
      </div>
      <div class="shopSingle">
        <p class="bigFont">9.9超值专区首发</p>
        <p class="smallFont">180款爆品新定价</p>
        <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
        <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        tagShow: true,
        tagRotate: false,
        // homeData: {}
      }
    },
    methods: {
      xialaTag () {
        this.tagShow = !this.tagShow
        this.tagRotate = !this.tagRotate
      },
      toSearch () {
        this.$router.push('/search')
      },
      toLogin () {
        this.$router.push('/person')
      }
    },
    computed: {
      ...mapState({
        homeData: state => state.homePage.homeData
      })
    }, 
    mounted() {
      this.$nextTick(() => {
        this.$store.dispatch('getHomeData')
        new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay: true, // 自动轮播
          delay: 2000,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination', 
          }
        })
        new BScroll('.tag',{
          scrollX: true,
          scrollY: false,
        })
      })
    },
  }
</script>

<style lang="stylus" rel="sty lesheet/stylus" scoped>
  #homePage
    background #eee
    padding-top 75px
    .head
      position fixed
      top 0
      z-index 99
      background #fff
      .homeHeader
        box-sizing border-box
        position relative
        padding 8px 14px 
        // width 100%
        width 380px
        height 42px
        line-height 15px
        display flex
        justify-content space-around
        img
          display inline-block
          margin-right 10px
          width 66px
          height 20px
          vertical-align middle
        input
          width 212px
          height 26px
          background #EDEDED
          text-align center
          line-height 26px
          font-size 14px
        button
          border 1px solid #B4282D
          background white
          border-radius 4px
          color #B4282D
          font-size 12px
          margin-left 6px
        .icon-sousuo
          position absolute
          left 106px
          top 14px
          font-size 14px
    
    .allTag
      // overflow hidden
      position fixed
      left 0
      top 35px
      height 40px
      width 100%
      z-index 999
      .tag
        height 100%
        width 80%
        background #fff
        .headTag
          padding-left 20px
          padding-right 358px
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
      .tagWithMask
        width 80%
        height 40px
        background #fff
        z-index 99
        .mask
          width 130%
          height 1105%
          background rgba(0,0,0,.5)
        .maskHead
          height 100%
          line-height 40px
          padding-left 14px
          font-size 14px
        .maskList
          // width 360px
          width 130%
          height 150PX
          ul
            position relative
            width 100%
            height 100%
            display flex
            background #fff
            padding-top 5px
            flex-wrap wrap
            li
              margin 0 0 19px 14px
              float left
              width 70px
              height 24px
              line-height 24px
              text-align center
              border 1px solid #CCCCCC
              font-size 14px
              background #FAFAFA
              &.active
                border 1px solid #B4282D
      .xialaMenu
        width 20%
        position fixed 
        right 0 
        top 42px
        // font-size 14px
        color #333
        height 33px
        background #fff
        z-index 99
        text-align center
        .icon-xiala-
          font-size 24px
          position absolute
          left 24px
          top -2px
          transition 0.5s
          &.tagRotate
            transform rotate(180deg)
    // 轮播图
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
    
    // 自营品牌 无忧退货 快速退款
    .fastRefund
      width 100%
      height 35px
      line-height 35px
      .fastRefundList
        display flex
        justify-content space-around
        .fastRefundItem
          height 10px
          font-size 12px
          .iconfont
            color #DB999B
            margin-right 4px
    // 商品类型
    .shopType
      width 100%
      height 163px
      .shopTypeList
        width 100%
        display flex
        flex-wrap wrap
        li
          display flex
          flex-direction column
          align-items center
          width 20%
          height 78px
          img 
            width 52px
            height 52px
          span
            display block
            margin-top 5px
            font-size 12px
    // 广告
    .ad
      width 100%
      height 60px
      padding 0
      margin 0
      img 
        width 100%
        height 100%
    // 广告模块
    .shopMode
      display flex
      margin-bottom 10px
      padding 4px 14px 14px 12px
      flex-wrap wrap
      background #fff
      .shopSingle
        box-sizing border-box
        padding 10px 0 0 10px
        background-color #F5F5F5
        border 1px solid #fff
        width 50%
        .bigFont
          font-size 14px
        .smallFont
          font-size 12px
        img
          width 72px
          height 72px
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            .shopModeSwiperSingle
              width 33%
              float left
              div
                width 103px
                height 103px
                background #eee
                img 
                  width 103px
                  height 103px
              span
                font-size 14px
      .prsonMake
        font-size 14px
        margin-bottom 10px
      // 限时购
      .timeShop
        width 100%
        font-size 14px
        margin-bottom 14px
        .left
          float left
        .right
          float right
      .timeShopImg
        width 100%
        .timeShopImgItem
          text-align center
          width 33%     
          float left
          div
            width 103px
            height 103px
            background-color #eee
          img
            width 100%
          span
            font-size 14px


      
</style>
