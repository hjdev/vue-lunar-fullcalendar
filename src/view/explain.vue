<template>
  <div class="explain">
    <div class="top">
      <h2>增加中国农历、24节气和节假日的功能</h2>
      <h2>npm install vue-lunar-full-calendar</h2>
      <div>A vue component for lunar fullcalendar. Uses Moment.js for date operations.（Increase the functions of Chinese lunar calendar, 24 solar terms and holidays）</div>
      <div class="red">window.lunar(date) 使用此依赖包可以使用这个功能获取农历的信息date是时间日期</div>
      <div class="red">config属性下新增了一个开启或者隐藏农历的功能字段lunarCalendar（lunarCalendar控制是否显示中国农历、显示的为true，隐藏为flase，默认为true）</div>
      <div>其它功能可以参照<a href="https://fullcalendar.io/docs"
           target="_blank">https://fullcalendar.io/docs</a> 这个链接为官方的API文档去熟悉</div>
    </div>
    <img class="lunarImg"
         src="@/assets/img/lunar.png"
         alt="">
    <div>
      <span class="back"
            @click="back">back</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$router.push('/vue-lunar-fullCalendar')
    }
  }
}
</script>
<style scoped lang="scss">
.explain {
  font-size: 14px;
  text-align: center;
  h2 {
    text-align: center;
  }
  div {
    text-indent: 20px;
  }
  a {
    color: #409eff;
  }
  .back {
    cursor: pointer;
    display: inline-block;
    margin-top: 40px;
    color: #45b984;
    font-size: 15px;
  }
  .lunarImg {
    height: 380px;
  }
  .red {
    color: #ff0000;
  }
}
</style>
