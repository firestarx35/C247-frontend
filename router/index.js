import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'
import { computed } from 'vue'

import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Search from '../views/Search.vue'
import Checkout from '../views/Checkout.vue'
import Transactions from '../views/Transactions.vue'
import Profile from '../views/Profile.vue'
import Wallet from '../views/Wallet.vue'
import Requests from '../views/Requests.vue'


const isAuthenticated = computed(function() { return store.getters['userdat/getAuthStatus'] })

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/search', name: 'Search', component: Search },
  { path: '/checkout', name: 'Checkout', component: Checkout },  
  { path: '/transactions', name: 'Transactions', component: Transactions },
 // { path: '/about', name: 'About', /* which is lazy-loaded when the route is visited.*/component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },*/
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/wallet', name: 'Wallet', component: Wallet },
  { path: '/requests', name: 'Requests', component: Requests },
  { path: '/logout', name: 'Logout', component: Logout }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'current-page',
})

router.beforeEach((to, from, next) => {
  console.log("passing | ", to.name, " | ", isAuthenticated.value)
  if (to.name !== 'Login' && !isAuthenticated.value) { next({ name: 'Login' })} 
  else next()
})

export default router
