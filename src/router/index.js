import Vue from 'vue'
import Router from 'vue-router'
//主页面结构
const calendar = r => require.ensure([], () => r(require('../view/calendar')),'calendar')
// 说明
const explain = r => require.ensure([], () => r(require('../view/explain')),'explain')

Vue.use(Router)
const routes = [
      {
        path: '*',
        redirect: '/calendar'
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: calendar
      },
      {
        path: '/explain',
        name: 'explain',
        component: explain
      }
]

const router = new Router({
  // mode:'history',//default: hash ,history
  routes,
  linkActiveClass:"my-active",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})


//全局路由配置
//路由开始之前的操作
router.beforeEach((to, from, next) => {
                    next()
})


export default router