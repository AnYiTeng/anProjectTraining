import {reqHotSelect} from '../../api/index'

import {HTO_SELECT} from '../mutation-type'

const state = {
    defaultKeywords: []
}

const mutations = {
    [HTO_SELECT](state,{defaultKeywords}){
        state.defaultKeywords = defaultKeywords
    }
}

const actions = {
    async hotSelect({commit}){
        const result = await reqHotSelect()
        const defaultKeywords = result.data.defaultKeywords
        commit(HTO_SELECT, {defaultKeywords})
    }
}


export default {
    state,
    mutations,
    actions
}