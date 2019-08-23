<template>
    <div class="classifyRight"  ref="contCroll">
      <div class="rightCroll">
        <!-- <img class="bigImg" :src="classpage.currentCategory.bannerList[0].picUrl" alt="" v-if="classpage.currentCategory"> -->
        <!-- <img class="bigImg" :src="classpage.currentCategory.bannerList[0].picUrl" alt="" v-if="classpage.currentCategory"> -->
        <!-- 推荐专区 -->
        <ul v-if="classpage.categoryGroupList">
          <!-- <li v-for="(item, index) in classpage.categoryGroupList[0].categoryList" :key="index"> -->
          <!-- <li v-for="(item, index) in resultArr[currentIndex].categoryGroupList[0].categoryList" :key="index"> -->
          <li v-for="(item, index) in arr" :key="index">
            <img :src="item.bannerUrl" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll'
    import {mapState,mapGetters} from 'vuex'
    export default {
      data() {
        return {
          currentIndex: 0,
          // arr: []
        }
      },
      mounted() {
        new BScroll(this.$refs.contCroll,{
            scrollY: true,
            click: true
        })
        // this.$nextTick(() => {
        //   this.currentIndex = this.$route.params.id * 1
        //   console.log(this.currentIndex)
        // })
        
      },
      updated() {
        // console.log(1)
        // this.resultArr.push(this.classpage)
        // this.resultArr.push(this.xialiangzhaunqu)
        // this.resultArr.push(1,2,3,4,5,6)
      },
      computed: {
        ...mapState({
            classpage: state => state.classpage.classpage,
            xialiangzhaunqu: state =>state.classpage.xialiangzhaunqu
        }),
        ...mapGetters(["resultArr"]),
        arr () {
          this.currentIndex = this.$route.params.id * 1
          // console.log(this.currentIndex)
          let arr = this.resultArr[this.currentIndex].categoryGroupList[0].categoryList
          return arr;
        }
      },
      watch: {
        // resultArr(){

        //   this.currentIndex = this.$route.params.id * 1
        //   console.log(this.currentIndex)
        //   this.arr = this.resultArr[this.currentIndex].categoryGroupList[0].categoryList
        // }

      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .classifyRight
      float right 
      width 282px
      height 549px
      padding 14px 14px 10px 14px
      box-sizing border-box
      .rightCroll
        min-height 550PX
        .bigImg
          width 253px
          height 92px
          padding-bottom 15px
        ul
          overflow hidden
          // min-height 550PX
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
