/**
 * 具体使用
 * import {
    GetGoodsList
  } from './api'
  GetGoodsList(params).then(res => {})
 */
import {
  redirectToLogin
} from '@/utils'

import Ajax from './Ajax'

// 创建博物馆接口实例
const mallApi = new Ajax({
  baseUrl: '/mall-admin-web',
  reqSuccessKey: 'code',
  reqSuccessValue: [100],
  msgKey: 'message',
  interceptError: redirectToLogin
})

// 获取商品列表接口例子
export const GetGoodsList = (params) => mallApi.post('/TbProduct/list.do', { ...params })
