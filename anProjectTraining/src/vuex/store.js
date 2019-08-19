import Vue from 'vue'
import Vuex,{Store} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

import lookGoods from './modules/lookGoods'

export default new Store ({
    mutations,
    actions,
    getters,
    modules: {
        lookGoods: lookGoods
    }
})