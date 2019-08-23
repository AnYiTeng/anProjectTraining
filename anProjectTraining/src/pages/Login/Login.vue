<template>
  <div id="loginContainer">
    <div class="personHead">
        <i class="iconfont icon-zhuye" @click="$router.push('/homePage')"></i>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        <div class="searchAndCar">
            <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuche"></i>
        </div>
    </div>
    <div class="yanImg">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>

    <div v-if="$route.params.id === 'phone'" class="phoneLogin">
        <div class="phoneNumber">
            <input type="text" placeholder="请输入手机号" v-model="phoneNumber" maxlength="11" name="phone" v-validate="'required|mobile'">
            <span style="color: red; font-size: 12px;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
        </div>
        <div class="YZM">
            <input type="text" placeholder="请输入手机验证码" maxlength="4">
            <button class="getYZM" :disabled="!isRightPhone" @click="getYZM">获取验证码</button>
        </div>
        <div class="qusitionYanzheng">
            <span class="qusition">遇到问题?</span>
            <span class="yanzheng">使用密码验证登录</span>
        </div>
        <button class="login">登录</button>
        <p class="other" @click="$router.push('/person')">其他登录方式></p>
    </div>

    <div v-else class="eMailLogin">
        <div class="eMailNumber">
            <input type="text" placeholder="邮箱账号">
            <input type="text" placeholder="密码">
        </div>
        <div class="fogetMessageZhanghao">
            <span>注册账号</span>
            <span class="fogetMessage">忘记密码</span>
        </div> 
        <button class="login">登录</button>
        <p class="other" @click="$router.push('/person')">其他登录方式></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
        return {
            phoneNumber: '',
            computNum: 0
        }
    },
    computed: {
        isRightPhone(){
            return /^1\d{10}$/.test(this.phoneNumber)
        }
    },
    methods: {
        getYZM () {
            alert(Math.round(Math.random()*8999+1000))
        }
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#loginContainer
    .personHead
      padding 10px 7px 10px 11px
      height 42px
      display flex
      justify-content space-between
      background #FAFAFA
      box-sizing border-box
      border-bottom 1px solid #ccc
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
    .yanImg
        text-align center
        padding-top 30PX
        img 
            width 96px
            height 32px
    .phoneLogin
        position relative
        padding-left 22PX
        padding-top 36PX
        .getYZM
            position absolute
            right 58PX
            top 110PX
            border 1px solid #ccc
            outline none
            background #fff
        input 
            width 295px
            height 21px
            font-size 14px
            padding 10PX 0
            border-bottom 1px solid #ccc
        .phoneNumber
            margin-bottom 20PX
            input
                display block
        .qusitionYanzheng
            display flex
            justify-content space-between
            font-size 14px
            color #333
            padding 20PX 22PX 0PX 0PX
        .login
            width 335px
            height 45px
            background #DD1A21
            color #fff
            border none
            margin-top 24PX
            border-radius 5px
        .other
            font-size 14px
            margin-top 44PX
            text-align center
    .eMailLogin
        position relative
        padding-left 22PX
        padding-top 84PX
        .eMailNumber
            margin-bottom 20PX
            input
                width 295px
                height 21px
                font-size 14px
                padding 10PX 0
                border-bottom 1px solid #ccc
        .fogetMessageZhanghao
            display flex
            justify-content space-between
            span 
                font-size 14px
            .fogetMessage
                padding-right 56PX
        .login
            width 335px
            height 45px
            background #DD1A21
            color #fff
            border none
            margin-top 24PX
            border-radius 5px
        .other
            font-size 14px
            margin-top 44PX
            text-align center
            
</style>        
