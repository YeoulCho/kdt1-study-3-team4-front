import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultSetRoutes from './defaultRouterSet'
import productRoutes from './product'
import accountRoutes from './account'
import orderRoutes from './order'
import loanRoutes from './loan'
Vue.use(VueRouter)

const routes = [
  ...defaultSetRoutes,
  ...productRoutes,
  ...accountRoutes,
  ...orderRoutes,
  ...loanRoutes,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
