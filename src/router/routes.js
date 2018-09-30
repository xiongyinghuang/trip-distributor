import login from '@/views/login'
import homePage from '@/views/homePage'
import list from '@/views/list'
import detail from '@/views/detail' 
import fillInOrder from '@/views/fillInOrder' 
import orderDetail from '@/views/orderDetail'
import pay from '@/views/pay'
import bookSuc from '@/views/bookSuc'
import personal from '@/views/personal'

const routes = [{
  path: '/',
  component: login
}, {
  path: '/homePage',
  component: homePage
}, {
  path: '/list',
  component: list
}, {
  path:'/detail',
  component: detail
}, {
  path:'/fillInOrder',
  component: fillInOrder
}, {
  path:'/orderDetail',
  component: orderDetail
}, {
  path:'/pay',
  component:pay
}, {
  path:'/bookSuc',
  component:bookSuc
},, {
  path:'/personal',
  component:personal
}]

export default routes
