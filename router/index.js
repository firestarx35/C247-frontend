import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index'
import { computed } from 'vue'

import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Search from '../views/Search.vue'
import Flights from '../views/Flights.vue'
import Checkout from '../views/Checkout.vue'
import CheckoutSummary from '../components/checkout/CheckoutSummary.vue'
import CheckoutConfirmed from '../components/checkout/CheckoutConfirmed.vue'
import Bookings from '../views/Bookings.vue'
import Profile from '../views/Profile.vue'
import Wallet from '../views/Wallet.vue'
import Requests from '../views/Requests.vue'


const isAuthenticated = computed(function() { return store.getters['userdat/getAuthStatus'] })

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/search', name: 'Search', component: Search, children: [ { path: '', name: 'Flights', component: Flights }, ] },
  { path: '/bookings', name: 'Bookings', component: Bookings },
 // { path: '/about', name: 'About', /* which is lazy-loaded when the route is visited.*/component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },*/
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/wallet', name: 'Wallet', component: Wallet },
  { path: '/requests', name: 'Requests', component: Requests },
  { path: '/checkout', name: 'Checkout', component: Checkout, children: [ { path: '/summary', name: 'CheckoutSummary', component: CheckoutSummary },
                                                                          { path: '/confirmed', name: 'CheckoutConfirmed', component: CheckoutConfirmed } 
                                                                        ] },
  { path: '/logout', name: 'Logout', component: Logout }
]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'current-page',
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Logout') { next() }
  else if (to.name !== 'Login' && !isAuthenticated.value) { next({ name: 'Login' })} 
  else next()
})

export default router
