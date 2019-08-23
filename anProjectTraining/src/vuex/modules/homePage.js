import {GET_HOMEDATA} from '../mutation-type'

import {reqHome} from '../../api/index'

const state = {
    homeData: {}
    // homeData: []
}

const mutations = {
    [GET_HOMEDATA](state, {homeData}){
        state.homeData = homeData
    }
}

const actions = {
    async getHomeData({commit}){
        const result = await reqHome()
        const homeData = result.data
        commit(GET_HOMEDATA, {homeData})
    }
}

export default {
    state,
    mutations,
    actions
}