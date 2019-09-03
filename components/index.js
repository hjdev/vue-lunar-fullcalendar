import LunarFullCalendar from './LunarFullCalendar/LunarFullCalendar.vue'

export default {
  install: function (Vue, options) {
    Vue.component('lunar-full-calendar', LunarFullCalendar)
  }
}
export {
  LunarFullCalendar
}
