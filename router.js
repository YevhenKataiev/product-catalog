import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: 'product',
        path: '/:id',
        component: ProductPage
      },
      {
        name: 'home',
        path: '/',
        component: HomePage
      }
    ]
  })
}
