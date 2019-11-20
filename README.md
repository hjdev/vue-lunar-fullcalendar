## [vue-lunar-full-calendar](https://a306916069.github.io/vue-lunar-fullcalendar)

[![NPM version](https://img.shields.io/badge/npm-v1.3.0-green.svg)](https://www.npmjs.com/package/vue-lunar-full-calendar)
[![NPM downloads](https://img.shields.io/badge/downloads-vue--lunar--full--calendar-green.svg)](https://www.npmjs.com/package/vue-lunar-full-calendar)

## Image and demo

```
a vue component for lunar fullcalendar. Uses Moment.js for date operations.
Increase the functions of Chinese lunar calendar, 24 solar terms and holidays
```

[Simple Live Demo](https://a306916069.github.io/vue-lunar-fullcalendar)
![Image text](https://raw.githubusercontent.com/a306916069/vue-lunar-fullcalendar/master/src/assets/img/lunar.png)

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
// index.vue
import { LunarFullCalendar } from 'vue-lunar-full-calendar'
export default {
  components: {
    LunarFullCalendar
  }
}
```

## Important function

1、window.lunar(date)

Use vue-lunar-full-calendar , You can use one function to get the date of a certain day.

2、lunarCalendar (default: true)

You can pass any custom options through to fullcalendar by using the `config` prop.
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
          lunarCalendar: true   //(Control whether the Chinese calendar shows true, unrealistic flase, default true.)
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

[Fullcalendar 文档(Fullcalendar docs)](https://fullcalendar.io/docs/)

## Example App

I have created a simple Vue 2 webpack application as an example/playground
https://github.com/a306916069/vue-lunar-fullcalendar

## Basic Usage

You can pass an array of fullclendar objects through the props

```html
<lunar-full-calendar :events="events"></lunar-full-calendar> ...
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
<lunar-full-calendar :event-sources="eventSources"></lunar-full-calendar> ...
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
<lunar-full-calendar :events="events" :config="config" /> ...
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

- **header** - [obj] - [docs](http://fullcalendar.io/docs/display/header/)
- **defaultView** - ['agendaWeek'] - [docs](http://fullcalendar.io/docs/views/defaultView/)
- **editable** - [true] - [docs](http://fullcalendar.io/docs/event_ui/editable/)
- **selectable** - [true] - [docs](http://fullcalendar.io/docs/selection/selectable/)
- **selectHelper** - [true] - [docs](http://fullcalendar.io/docs/selection/selectHelper/)
- **config** - [true] - Pass your own custom config straight through to fullcalendar

## Methods

Sometimes you may need to manipulate the Calendar from your parent component, you can use `fireMethod` for this. This works with anything in the [Fullcalendar docs](https://fullcalendar.io/docs/) suffixed with `(method)` and it will dynamically handle as many arguments as needed.

```html
<lunar-full-calendar :events="events" ref="calendar" /> ...
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

- **event-selected(event, jsEvent, view)** - Triggered on eventClick()
- **event-drop(event)** - Triggered on eventDrop()
- **event-resize(event)** - Triggered on eventResize()
- **event-created(event)** - Triggered on select()
- **event-receive(event)** - Triggered on eventReceive()
- **event-render(event)** - Triggered on eventRender()
- **day-click(date, jsEvent, view)** - Triggered on dayClick()

You can listen for these events using the following markup

```html
<lunar-full-calendar
  :event-sources="eventSources"
  @event-selected="eventSelected"
></lunar-full-calendar>
```

### Listens on

- **render-event(event)** - Adds a new event to calendar
- **remove-event(event)** - Removes event from calendar
- **rerender-events()** - Rerenders events to reflect local changes
- **refetch-events()** - Makes another JSON call to event sources
- **reload-events()** - Removes all events and adds all events in this.events

You can trigger these events in the parent component like so...

```html
<lunar-full-calendar
  ref="calendar"
  :event-sources="eventSources"
></lunar-full-calendar>
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
