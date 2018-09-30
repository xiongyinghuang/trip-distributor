import axios from 'axios'
import Vue from 'vue'

class AJAX {
  constructor (cfg) {
    // 成功标志key
    this.reqSuccessKey = cfg.reqSuccessKey
    // 成功标志value
    this.reqSuccessValue = cfg.reqSuccessValue
    // 消息key
    this.msgKey = cfg.msgKey
    // 拦截错误
    this.interceptError = cfg.interceptError
    this.instance = axios.create({
      baseURL: cfg.baseUrl,
      timeout: 30000
    })
    this.initInterceptors()
  }
  get (url) {
    return this.fetch(url)
  }
  post (url, params, successCb) {
    return this.fetch(url, params, successCb)
  }
  fetch (url, params, successCb) {
    let instance = params ? this.instance.post(url, params) : this.instance.get(url)
    return instance.then((res) => {
      // 自定义成功回调
      if (successCb) {
        successCb(res)
        return
      }
      
      // 正常流程
      let code = res && res[this.reqSuccessKey]
      if (this.reqSuccessValue.indexOf(code) > -1) {
        return Promise.resolve(res, code)
      } else {
        let msg = res && res[this.msgKey] || JSON.stringify(res) || '错误类型未知'
        res && Vue.prototype.$notify({
          title: '错误提示',
          message: msg,
          type: 'error'
        })
        return Promise.reject(res)
      }
    }).catch((error) => {
      return Promise.reject(error)
    })
  }
  initInterceptors () {
    // 接口response拦截器
    this.instance.interceptors.response.use((response) => {
      response = response.data
      let callbackFn = this.interceptError
      // 校验授权失败
      if (response.code === 405 || response.code === 200) {
        if (window.location.pathname === '/') {
          // 根目录不提示，直接重定向到单点登录页
          callbackFn && callbackFn()
        } else {
          Vue.prototype.$alert(response.message, '提示', {
            confirmButtonText: '确定',
            callback: function () {
              callbackFn && callbackFn()
            }
          })
        }
      } else {
        return response
      }
    }, (error) => {
      error = error.response
      let msg = '请求服务失败'
      let duration = 4500

      if (error && error.status) {
        msg += `，错误码${error.status}`
      } else {
        msg = '请求超时，请检查网络~'
        duration = 0
      }
      Vue.prototype.$notify({
        type: 'error',
        title: '错误提示',
        message: msg,
        duration
      })
      return Promise.reject(error)
    })
  }
}
export default AJAX
