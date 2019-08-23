<template>
  <div class="commonContainer">
    <ul>
      <li v-for="(item, index) in common" :key="index">
        <div class="commonTop">
          <div class="commonLeft">
            <img :src="item.bannerInfo.picUrl"/>
          </div>
          <div class="commonRight">
            <p>{{item.itemName}}</p>
            <p>￥{{item.itemPrice}}</p>
            <img :src="item.itemPic"/>
          </div>
        </div>
        <div class="commonBottom">
          <img :src="item.avatar"/>
          <span>{{item.content}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      common: state => state.lookGoods.common
    })
  },
  mounted() {
    this.$store.dispatch('reqLookCommon')
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.commonContainer {
  padding-bottom: 48PX;

  ul {
    li {
      margin-bottom 20PX
      padding 14px 17px

      .commonTop {
        display: flex;

        .commonLeft {
          img {
            width: 164px;
            height: 164px;
            border-radius: 6px 22;
          }
        }

        .commonRight {
          padding-left: 22PX;

          p {
            font-size: 14px;
            font-weight: bold;
          }

          img {
            width: 86px;
            height: 86px;
            margin-top: 30PX;
          }
        }
      }

      .commonBottom {
        display: flex;
        background #F8F6EF
        width 340px
        height 106px

        p {
          font-size 14px
        }

        img {
          width: 56px;
          height: 56px;
          border-radius 50%
        }

        span {
          font-size: 12px;
          display inline-block
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          height 45px
        }
      }
    }
  }
}
</style>
