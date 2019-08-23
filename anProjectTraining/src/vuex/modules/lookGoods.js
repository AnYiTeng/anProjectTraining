import {reqLookTag,reqCommon} from '../../api/index'


import {LOOKGOOD_TAG,LOOKGOOD_COMMON} from '../mutation-type'

const state = {
    type: [],
    common: [],
    currentIndex: 0    
}

const mutations = {
    [LOOKGOOD_TAG](state, {tagData}){
        state.type = tagData
    },
    [LOOKGOOD_COMMON](state, {common}){
        state.common = common
    },
    getCurrentIndex(state,{currentIndex}){
        state.currentIndex = currentIndex
    }
}

const actions = {
    async reqLookGoodTag({commit}){
        const result = await reqLookTag()
        const tagData = result.data
        commit(LOOKGOOD_TAG, {tagData})
    },
    async reqLookCommon({commit}){
        const result = await reqCommon()
        const common = result.data
        commit(LOOKGOOD_COMMON, {common})
    }
}


export default {
    state,
    mutations,
    actions
}
