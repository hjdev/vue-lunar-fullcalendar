// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//重置样式
import '@/assets/css/reset.scss'

Vue.config.productionTip = false
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:(h)=>h(App)
})