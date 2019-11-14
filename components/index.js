import LunarFullCalendar from './LunarFullCalendar/LunarFullCalendar.vue'

const install = (Vue) => {
  Vue.component('lunar-full-calendar', LunarFullCalendar)
}
module.exports = {
  install,
  LunarFullCalendar
}
module.exports.default = module.exports
// export default {
//   install,
//   LunarFullCalendar
// }

// export {
//   install,
//   LunarFullCalendar
// }
