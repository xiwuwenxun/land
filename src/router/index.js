import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () =>import('@/views/login/index')
const Layout = () => import('@/layout/index')

const routes = [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    component:Layout
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
