import Mock from 'mockjs'
import data from './data.json' // 自动解析为js  可以相互转换
import classpage from './classpage.json'
import xialiangzhaunqu from './xialiangzhaunqu.json'

// Mock.mock('./homepage', {code: 200, data:data.kingKongModule.kingKongList})
Mock.mock('/homepage', {code: 200, data:data})

Mock.mock('/classpage', {code: 200, classpage:classpage})

Mock.mock('/xialiangzhaunqu', {code: 200, xialiangzhaunqu:xialiangzhaunqu})
