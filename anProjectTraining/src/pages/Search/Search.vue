<template>
  <div id="searchContainer">
      <div class="searchHead">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="硅藻土浴室地垫 直降29元" v-model="keywordPrefix" @keyup="search">
        <span @click="cancel">取消</span>
      </div>
      <div class="searchList" v-if="keywordPrefix">
        <ul>
            <li v-for="(item, index) in searchContent" :key="index">{{item}}</li>
        </ul>
      </div>
      
      <div class="hotDoor" v-else>
        <p class="hotSearch">热门搜索</p>
        <div class="hotSearchList">
            <ul>
                <li v-for="(item, index) in defaultKeywords" :key="index">
                  <a :href="item.schemeUrl">
                    {{item.extra.materialName}}
                  </a> 
                </li>
            </ul>
        </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
// import throttle from '../../function/throttle'
  // import debounce from 'lodash/debounce'
  export default {
      data() {
        return {
          keywordPrefix: ''
        }
      },
      methods: {
        cancel () {
          this.$router.back()
        },
        search () {
          this.$store.dispatch('getSearchContent',this.keywordPrefix)
        }
      },
      mounted() {
        this.$store.dispatch('hotSelect')
      },
      computed: {
        ...mapState({
            searchContent: state => state.search.searchContent
        }),
        ...mapState({
            defaultKeywords: state => state.hotSelect.defaultKeywords
        })
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #searchContainer
        width 100%
        height 667px
        background #eee
        .searchHead
            position relative
            width 100%
            height 44px
            padding 0px 18PX
            line-height 44px
            background #fff
            box-sizing border-box
            input 
                background #eee
                width 200PX
                height 28px
                line-height 28px
                font-size 14px
                padding 0 40PX
            i
                position absolute
                left 30PX
                top 5PX
            span
                font-size 14px
                padding-left 28PX
        .searchList
            ul
                li
                    width 100%
                    height 45PX
                    background #fff
                    line-height 45PX
                    padding-left 15PX
                    font-size 14px
                    border-bottom 1px solid #ccc
                    color #333
        .hotDoor
            width 375px
            // height 202px
            background #fff
            padding-top 16px
            .hotSearch
                font-size 14px
                color #999
                padding-left 18PX
            .hotSearchList
                ul
                    li
                        display inline-block
                        border 1px solid #ccc
                        box-sizing border-box
                        padding 0 5PX
                        height 24PX
                        line-height 24px
                        margin 0 16PX 6PX 0
                        font-size 14px
</style>
