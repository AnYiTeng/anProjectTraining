import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import 'amfe-flexible'
import './mock/mockServe'
import './validate'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
