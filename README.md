## vue-lunar-full-calendar

## Installation
```
npm install --save vue-lunar-full-calendar
```
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
## Image
```
a vue component for lunar fullcalendar. Uses Moment.js for date operations.
Increase the functions of Chinese lunar calendar, 24 solar terms and holidays(增加中国农历、24节气和节假日的功能)
```
![Image text](https://raw.githubusercontent.com/a306916069/vue-lunar-fullcalendar/master/src/assets/img/lunar.png)

## Important function
1、Use vue-lunar-full-calendar , You can use one function to get the date of a certain day.

2、You can pass any custom options through to fullcalendar by using the `config` prop.
Control whether the Chinese calendar shows true.
```html
<lunar-full-calendar :events="events" :config="config"></lunar-full-calendar>
...
<script>
...
  data() {
    return {
      events: [],
      config: {
        lunarCalendar: true //Control whether the Chinese calendar shows true, unrealistic flase, default true.（控制是否显示中国农历、显示的为true，隐藏为flase，默认为true）
      },
    }
  },
...
  window.lunar(date)   // Date is the date.
...
</script>
```
![Image text](https://raw.githubusercontent.com/a306916069/vue-lunar-fullcalendar/master/src/assets/img/window.lunar.png)

## API document

[Fullcalendar docs](https://fullcalendar.io/docs/)

## Example App
I have created a simple Vue 2 webpack application as an example/playground
https://github.com/a306916069/vue-lunar-fullcalendar

## Basic Usage

You can pass an array of fullclendar objects through the props

```html
<lunar-full-calendar :events="events"></lunar-full-calendar>
...
<script>
...
  data() {
    return {
      events: [
        {
            title  : 'event1',
            start  : '2018-01-01',
        },
        {
            title  : 'event2',
            start  : '2018-01-05',
            end    : '2018-01-07',
        },
        {
            title  : 'event3',
            start  : '2018-01-09T12:30:00',
            allDay : false,
        },
      ]
    }
  }
...
</script>
```
More event options can be found at http://fullcalendar.io/docs/event_data/Event_Object/

## Using a JSON Feed

```html
<lunar-full-calendar :event-sources="eventSources"></lunar-full-calendar>
...
<script>
...
  data() {
    return {
      eventSources: [
        {
          events(start, end, timezone, callback) {
            self.$http.get(`/myFeed`, {timezone: timezone}).then(response => {
              callback(response.data.data)
            })
          },
          color: 'yellow',
          textColor: 'black',
        },
        {
          events(start, end, timezone, callback) {
            self.$http.get(`/anotherFeed`, {timezone: self.timezone}).then(response => {
              callback(response.data.data)
            })
          },
          color: 'red',
        },
      ]
    }
  }
...
</script>
```

## Custom Config
You can pass any custom [options](https://fullcalendar.io/docs/) through to fullcalendar by using the `config` prop, this includes extra event handlers.
```html
<lunar-full-calendar :events="events" :config="config" />
...
<script>
...
  data() {
    return {
      events: [],
      config: {
        weekends: false,
        drop(...args) {
          //handle drop logic in parent
        },
      },
    }
  },
...
</script>
```
## Further Props
You can edit the look and feel of fullcalendar by passing through extra props. These all have sensible defaults

- __header__ - [obj] - [docs](http://fullcalendar.io/docs/display/header/)
- __defaultView__ - ['agendaWeek'] - [docs](http://fullcalendar.io/docs/views/defaultView/)
- __editable__ - [true] - [docs](http://fullcalendar.io/docs/event_ui/editable/)
- __selectable__ - [true] -  [docs](http://fullcalendar.io/docs/selection/selectable/)
- __selectHelper__ - [true] - [docs](http://fullcalendar.io/docs/selection/selectHelper/)
- __config__ - [true] - Pass your own custom config straight through to fullcalendar

## Methods 
Sometimes you may need to manipulate the Calendar from your parent component, you can use `fireMethod` for this. This works with anything in the [Fullcalendar docs](https://fullcalendar.io/docs/) suffixed with `(method)` and it will dynamically handle as many arguments as needed.
```html
<lunar-full-calendar :events="events" ref="calendar" />
...
<script>
...
  data() {
    return {
      events: [],
    }
  },
  
  methods: {
    next() {
      this.$refs.calendar.fireMethod('next')
    },
    changeView(view) {
      this.$refs.calendar.fireMethod('changeView', view)
    },
  },
...
</script>
```

## Events and Hooks

### Emitted
- __event-selected(event, jsEvent, view)__ - Triggered on eventClick()
- __event-drop(event)__ - Triggered on eventDrop()
- __event-resize(event)__ - Triggered on eventResize()
- __event-created(event)__ - Triggered on select()
- __event-receive(event)__ - Triggered on eventReceive()
- __event-render(event)__ - Triggered on eventRender()
- __day-click(date, jsEvent, view)__ - Triggered on dayClick()

You can listen for these events using the following markup

```html
<lunar-full-calendar :event-sources="eventSources" @event-selected="eventSelected"></lunar-full-calendar>
```
### Listens on
- __render-event(event)__ - Adds a new event to calendar
- __remove-event(event)__ - Removes event from calendar
- __rerender-events()__ - Rerenders events to reflect local changes
- __refetch-events()__ - Makes another JSON call to event sources
- __reload-events()__ - Removes all events and adds all events in this.events

You can trigger these events in the parent component like so...

```html
<lunar-full-calendar ref="calendar" :event-sources="eventSources"></lunar-full-calendar>
...
<script>
...
  methods: {
    refreshEvents() {
      this.$refs.calendar.$emit('refetch-events')
    },
  }
...
</script>
```