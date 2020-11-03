import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const isLoggedIn = (to, from, next) =>{
  const id = localStorage.getItem('id');
  if(id) next('/')
  else next()
}

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: isLoggedIn
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: !isLoggedIn
  },
  {
    path: '/perfil',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/movies/:genero',
    name: 'MoviesCluster',
    component: () => import(/* webpackChunkName: "about" */ '../views/MoviesCluster.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
