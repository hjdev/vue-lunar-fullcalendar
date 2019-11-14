import Vue from 'vue'
import Router from 'vue-router'
// 主页面结构
const lunarFullCalendar = () => import('@/view/lunarFullCalendar.vue')
// 说明
const explain = () => import('@/view/explain.vue')

Vue.use(Router)
const routes = [{
  path: '*',
  redirect: '/vue-lunar-fullCalendar'
},
{
  path: '/vue-lunar-fullCalendar',
  name: 'fullCalendar',
  component: lunarFullCalendar
},
{
  path: '/explain',
  name: 'explain',
  component: explain
}
]

const router = new Router({
  // mode:'history',//default: hash ,history
  // base: '/vue-lunar-fullcalendar',
  routes,
  linkActiveClass: 'my-active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
export default router
