import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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

router.beforeEach((to, from, next) => {
  let isLoggedIn = false
  if(localStorage.getItem('user_id')) isLoggedIn = true

  if (to.name !== 'Login' && !isLoggedIn) next({ name: 'Login' })
  else next()

  if (to.name == 'Login' && isLoggedIn) next({ name: 'Home'})
})

export default router
