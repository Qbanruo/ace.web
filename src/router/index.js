import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import brand from '@/components/brand/index'
import category from '@/components/category/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        headerMenu: resolve => require(['../components/header'], resolve),
        leftMenu: resolve => require(['../components/left'], resolve),
        default: index
      }
    },
    {
      path: '/brand',
      name: 'brand',
      components: {
        headerMenu: resolve => require(['../components/header'], resolve),
        leftMenu: resolve => require(['../components/left'], resolve),
        default: brand
      }
    },
    {
      path: '/category',
      name: 'category',
      components: {
        headerMenu: resolve => require(['../components/header'], resolve),
        leftMenu: resolve => require(['../components/left'], resolve),
        default: category
      }
    }
  ]
})
export default router
