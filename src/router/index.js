import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  mode: 'history'
})

// 动态添加路由
router.addRoutes(routes)

export default router
