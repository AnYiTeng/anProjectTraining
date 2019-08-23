import {reqClass} from '../../api/index'
import {reqXiaLiang} from '../../api/index'

import {REQ_CLASSPAGE} from '../mutation-type'
import {XIA_LIANG} from '../mutation-type'

const state = {
    classpage: {},
    xialiangzhaunqu: {},
}

const mutations = {
    [REQ_CLASSPAGE](state, {classpage}){
        state.classpage = classpage
    },
    [XIA_LIANG](state, {xialiangzhaunqu}){
        state.xialiangzhaunqu = xialiangzhaunqu
    },
    
}
const actions = {
    async reqClassPage({commit}){
        const result = await reqClass()
        const classpage = result.classpage
        if (result.code === 200) { 
            commit(REQ_CLASSPAGE, {classpage})
        }
    },
    async reqXiaLiang({commit}){
        const result = await reqXiaLiang()
        const xialiangzhaunqu = result.xialiangzhaunqu
        if (result.code === 200) {
            commit(XIA_LIANG, {xialiangzhaunqu})
        }
    }
}

export default {
    state,
    mutations,
    actions
}