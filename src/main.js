import Vue from 'vue'
import App from './App'
import router from './router'

// 重置样式
import '@/assets/css/reset.scss'

// import lunarFullCalendar from '../lib/LunarFullCalendar.min.js'
// Vue.use(lunarFullCalendar)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
})
