##vue-lunar-full-calendar

## Installation
```
npm install --save vue-lunar-full-calendar
```
## A vue component for lunar fullcalendar. Uses Moment.js for date operations.
```
Increase the functions of Chinese lunar calendar, 24 solar terms and holidays(增加中国农历、24节气和节假日的功能)
```
##API document

[Fullcalendar docs](https://fullcalendar.io/docs/)

![Image text](https://raw.githubusercontent.com/a306916069/vue-lunar-fullcalendar/master/src/assets/img/lunar.png)

```js
//main.js
import LunarFullCalendar from 'vue-lunar-full-calendar'
Vue.use(LunarFullCalendar)
```

But you can also import the standalone component to add locally or for more complex installations.

```js
// foo.vue
import { LunarFullCalendar } from 'vue-lunar-full-calendar'
export default {
  components: {
    LunarFullCalendar
  },
}
```