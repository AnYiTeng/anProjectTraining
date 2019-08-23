import Vue from 'vue'
import Vuex,{Store} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import lookGoods from './modules/lookGoods'
import homePage from './modules/homePage'
import search from './modules/search'
import classpage from './modules/classpage'
import hotSelect from './modules/hotSelect'

Vue.use(Vuex)

export default new Store ({
    mutations,
    actions,
    getters,
    modules: {
        lookGoods: lookGoods,
        homePage: homePage,
        search: search,
        classpage: classpage,
        hotSelect: hotSelect
    }
})