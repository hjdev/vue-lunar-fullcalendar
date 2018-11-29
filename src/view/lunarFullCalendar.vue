<template>
  <div class="lunarFullCalendar">
    <div class="full-calendar">
      <lunar-full-calendar :events="events"
                           ref="calendar"
                           @event-selected="eventSelected"
                           :config="config"
                           @day-click="dayClick"></lunar-full-calendar>
    </div>
    <div class="tip"
         @click="enter">详细请看说明（点击此处进入）</div>
  </div>
</template>
<script>
/* eslint-disable */
import { LunarFullCalendar } from 'vue-lunar-full-calendar'
export default {
  data: function () {
    let self = this
    return {
      events: [
        {
          id: 1,
          title: '数据1',
          allDay: true,
          start: new Date()
        },
        {
          id: 2,
          title: '数据2',
          start: new Date().getTime() + 24 * 60 * 60 * 1000,
          end: new Date().getTime() + 2 * 24 * 60 * 60 * 1000
        },
        {
          id: 3,
          title: '数据3',
          start: new Date().getTime() - 3 * 24 * 60 * 60 * 1000,
        },

        {
          id: 4,
          title: '数据4（增加中国农历、24节气和节假日的问题）',
          start: new Date(),
          end: new Date().getTime() + 30 * 24 * 60 * 60 * 1000
        },
        {
          id: 5,
          title: '数据5（Increase the functions of Chinese lunar calendar, 24 solar terms and holidays）',
          start: new Date(),
          end: new Date().getTime() + 30 * 24 * 60 * 60 * 1000
        },
        {
          id: 6,
          title: '数据6（增加中国农历、24节气和节假日的问题Increase the functions of Chinese lunar calendar, 24 solar terms and holidays）',
          start: new Date() - 30 * 24 * 60 * 60 * 1000,
          end: new Date().getTime()
        },
      ],
      config: {
        //lunarCalendar
        //Control whether the Chinese calendar shows true, unrealistic flase, default true.（lunarCalendar控制是否显示中国农历、显示的为true，隐藏为flase，默认为true）
        lunarCalendar: true,
        locale: 'zh-cn',
        height: 'parent',
        header: {
          left: 'prev,next, today',
          center: 'title',
          right: 'hide, custom, month,agendaWeek,agendaDay'
        },
        buttonText: {
          today: '今天',
          month: '月',
          week: '周',
          day: '日'
        },
        // eventOrder:'index',   // 这个是控制事件排序的功能，意思是 按照字段 事件数据中index来排序
        firstDay: 0, // 控制周一周日那个在前面
        defaultView: 'month',
        //agenda视图下是否显示all-day
        allDaySlot: true,
        //agenda视图下all-day的显示文本
        allDayText: '全天',
        eventLimit: true, //一天中显示多少条事件，多了隐藏
        // eventLimitClick: 'day', //点击今天日列表图
        timezone: 'local',  // 时区默认本地的
        slotLabelFormat: 'HH:mm',  // 周视图和日视同的左侧时间显示
        viewRender (view, element) {
          self.viewRender(view, element)
        },
        customButtons: {   // 新增按钮
          hide: {
            text: '隐藏农历',
            click: function () {
              self.$refs.calendar.fireMethod('option', {
                lunarCalendar: false
              })
              self.$refs.calendar.fireMethod('option', {
                header: {
                  left: 'prev,next, today',
                  center: 'title',
                  right: 'show, custom, month,agendaWeek,agendaDay'
                }
              })
            }
          },
          show: {
            text: '显示农历',
            click: function () {
              self.$refs.calendar.fireMethod('option', {
                lunarCalendar: true
              })
              self.$refs.calendar.fireMethod('option', {
                header: {
                  left: 'prev,next, today',
                  center: 'title',
                  right: 'hide, custom, month,agendaWeek,agendaDay'
                }
              })
            }
          }
        }
      }
    }
  },
  components: {
    LunarFullCalendar
  },
  methods: {
    // 注释的是功能是可以修改对应的功能值属性，比如设置  eventLimit为 false
    //  this.$refs.calendar.fireMethod('option',{
    //      eventLimit :false
    //  })
    dayClick (date, jsEvent, view) {   // 点击当天的事件
      alert('农历数据：' + JSON.stringify(window.lunar(date._d)))
      console.log(date, jsEvent, 'dayClick')
    },
    eventSelected (event, jsEvent, view) {  // 选中事件
      console.log(event, jsEvent, 'eventSelected')
    },
    viewRender (view, element) {
      console.log(view, element, 'viewRender')
    },
    enter () {
      this.$router.push('/explain')
    }
  }
}
</script>
<style scoped lang="scss">
$color: #45b984;
#app {
  height: 100%;
}
.lunarFullCalendar {
  min-width: 900px;
  height: 100%;
  background: #fff;
  .top {
    height: 100px;
    h2 {
      text-align: center;
      font-size: 15px;
    }
    div {
      font-size: 13px;
    }
  }
  .full-calendar {
    padding: 20px;
    height: calc(100% - 30px);
    /deep/ {
      .fc-unthemed th,
      .fc-unthemed td,
      .fc-unthemed thead,
      .fc-unthemed tbody,
      .fc-unthemed .fc-divider,
      .fc-unthemed .fc-row,
      .fc-unthemed .fc-content,
      .fc-unthemed .fc-popover,
      .fc-unthemed .fc-list-view,
      .fc-unthemed .fc-list-heading td {
        border-color: #eaecf1;
      }
      .fc-header-toolbar {
        height: 28px;
        margin-bottom: 0;
        line-height: 28px;
        h2 {
          font-size: 24px;
          color: #424656;
          letter-spacing: 0;
        }
      }
      .fc-button {
        height: 28px;
        background: #fff;
        border-color: #fff;
        box-shadow: none;
        padding: 0;
      }
      .fc-show-button,
      .fc-hide-button {
        position: relative;
        width: 80px;
        border: 1px solid #bbbfcd;
        border-radius: 20px;
        font-size: 14px;
        color: #424656;
      }
      .fc-today-button {
        font-size: 14px;
        color: $color;
      }
      .fc-next-button,
      .fc-prev-button {
        color: #7d8292;
      }
      .fc-button-group {
        margin-left: 20px;
        font-size: 14px;
        button {
          width: 80px;
          color: #424656;
          border: 1px solid #bbbfcd;
          &:first-child {
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
          }
          &:last-child {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          }
        }
        .fc-state-active {
          background: $color;
          color: #fff;
          text-shadow: none;
        }
      }

      .fc-month-view,
      .fc-agendaDay-view,
      .fc-agendaWeek-view {
        .fc-widget-content {
          .fc-sun,
          .fc-sat {
            background: rgba(245, 246, 248, 0.5);
          }
          .fc-day-number {
            font-size: 14px;
            letter-spacing: 0;
            line-height: 13px;
            float: left;
          }
          .fc-day-top {
            padding: 15px 12px 0 12px;
          }
          .fc-day-cnTerm,
          .fc-day-cnDate {
            font-size: 12px;
            color: #7d8292;
            float: right;
          }
          .fc-more {
            font-size: 12px;
            color: #7d8292;
          }
          .fc-event {
            cursor: pointer;
            font-size: 12px;
            color: #424656;
            background-color: rgba($color: $color, $alpha: 0.1) !important;
            border: 1px solid rgba($color: $color, $alpha: 0.1) !important;
            border-left: 2px solid rgba($color: $color, $alpha: 0.1) !important;
            border-radius: 0;
          }
          .fc-day-grid-event {
            padding: 1px 0 1px 5px;
          }
        }
      }
      .fc-agendaDay-view,
      .fc-agendaWeek-view {
        .fc-axis {
          font-size: 14px;
        }
        .fc-title {
          font-size: 14px;
          color: $color;
        }
      }
      .fc-month-view {
        .fc-event {
          &.fc-not-start {
            border-left: 1px solid rgba($color: $color, $alpha: 0.1) !important;
          }
        }
      }
      .fc-agendaDay-view {
        .fc-head {
          table {
            margin: 15px 0;
          }
          .fc-day-header {
            display: none;
          }
        }
      }
      .fc-head {
        .fc-day-header,
        .fc-widget-header,
        .fc-head-container {
          border-top-color: #fff;
          border-left-color: #fff;
          border-right-color: #fff;
        }
        table {
          margin: 10px 0 15px 0;
          font-size: 14px;
          color: #424656;
        }
      }
    }
  }
}
.tip {
  color: $color;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
</style>
