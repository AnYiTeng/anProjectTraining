// 包含n个接口请求函数的模块
import ajax from './ajax'

const BASE = '/api'



// 首页数据
export const reqHome = () => ajax('/homepage')

// 搜索
export const reqSearch = (keywordPrefix) => ajax(BASE + '/xhr/search/searchAutoComplete.json',{keywordPrefix})

// 搜索页
export const reqClass = () => ajax('/classpage')

// 热门搜索
export const reqHotSelect = () => ajax(BASE + '/xhr/search/init.json')

// 搜索页的夏凉专区
export const reqXiaLiang = () => ajax('/xialiangzhaunqu')

// 识物发现导航条
export const reqLookTag = () => ajax(BASE + '/topic/v1/find/getTabs.json')

// 请求识物用户评论
export const reqCommon = () => ajax(BASE + '/topic/v1/look/getLookSaleRank.json?topLooks=13170%2C13265%2C12843%2C12852%2C12597%2C12603%2C12487%2C12505%2C12398%2C12432%2C12263%2C11649%2C11601%2C11490%2C11465%2C10957&_=1566438735242')