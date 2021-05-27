import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SobreNos from '../views/Sobre_Nos.vue'
import Login from '../views/Login.vue'
import cadastrar from '../views/Cadastrar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SobreNos',
    name: 'SobreNos',
    component: SobreNos
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: cadastrar
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
