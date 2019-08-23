
import {reqSearch} from '../../api/index'

import {SEARCH_CONTENT} from '../mutation-type'

// import _ from 'lodash'
// import debounce from 'lodash/debounce'

// import throttle from '../../function/throttle'


const state = {
    searchContent: []
}

const mutations = {
    [SEARCH_CONTENT](state, {searchContent}){
        state.searchContent = searchContent
    }
}

const actions = {
    async getSearchContent({commit},keywordPrefix){
        
        const result = await reqSearch(keywordPrefix)
        const searchContent = result.data
        if(result.code === "200"){
            commit(SEARCH_CONTENT, {searchContent})
        }
    }
}

export default{
    state,
    mutations,
    actions,
}