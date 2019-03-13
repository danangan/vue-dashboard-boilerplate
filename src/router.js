import Vue from 'vue'
import Router from 'vue-router'

// Login Page
import Login from './pages/Login'

// Not Found Page
import NotFound from './pages/NotFound'

// Company Components
import CompanyData from './pages/Company/CompanyData'
import EmployeeData from './pages/Company/EmployeeData'
import LocationData from './pages/Company/LocationData'

// Setup pages
import POS from './pages/Setup/POS'
import Category from './pages/Setup/Category'
import Item from './pages/Setup/Item'

// Setup pages
import Customer from './pages/Optional/Customer'
import PointReward from './pages/Optional/PointReward'
import Vendor from './pages/Optional/Vendor'

// Transaction pages
import Inventory from './pages/Transaction/Inventory'
import Purchase from './pages/Transaction/Purchase'

// Report pages
import InventoryReport from './pages/Report/Inventory'
import SalesReport from './pages/Report/Sales'
import PurchaseReport from './pages/Report/Purchase'

// import store
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/company-data',
      name: 'main-app-layout',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './layouts/MainApp'),
      children: [
        // Company Menu Route
        {
          path: '/company-data',
          component: CompanyData
        },
        {
          path: '/employee-data',
          component: EmployeeData
        },
        {
          path: '/location-data',
          component: LocationData
        },
        // Setup Menu Route
        {
          path: '/pos',
          component: POS
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/item',
          component: Item
        },
        // Optional route menu
        {
          path: '/customer',
          component: Customer
        },
        {
          path: '/vendor',
          component: Vendor
        },
        {
          path: '/point-reward',
          component: PointReward
        },
        // Transaction route menu
        {
          path: '/purchase',
          component: Purchase
        },
        {
          path: '/inventory',
          component: Inventory
        },
        // Report route menu
        {
          path: '/inventory-report',
          component: InventoryReport
        },
        {
          path: '/sales-report',
          component: SalesReport
        },
        {
          path: '/purchase-report',
          component: PurchaseReport
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// you can add the name of the route here as whitelist auth guard
const whiteListAuth = ['login']

// global authentication guard
router.beforeEach((to, from, next) => {
  // check if the destination is the route which required authentication
  // if the user is not authenticated yet, redirect to login page
  if (whiteListAuth.indexOf(to.name) === -1 && !store.state.auth.isAuthenticated) {
    console.log(whiteListAuth.indexOf(to.name))
    console.log(!store.state.isAuthenticated)
    next('/login')
  }

  // check if the destination is the whitelist which not required authentication
  // if yes, redirect to main app
  if (whiteListAuth.indexOf(to.name) !== -1 && store.state.auth.isAuthenticated) {
    next('/')
  }

  next()
})

export default router
