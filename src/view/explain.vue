<template>
  <div class="explain">
<div class="top">
      <h2>解决vue-full-calendar这个插件增加中国农历。24节气和节假日的问题</h2>
      <div>这个日程表是比较完善的jq插件，然后被封装成了vue插件，功能可以参照<a href="https://fullcalendar.io/docs" target="_blank">https://fullcalendar.io/docs</a> 这个链接为官方的API文档和git的vue-full-calendar上去熟悉，在这里我就不讲细了，主要是在网上难以找到vue下面改造的农历问题，查了很多资料
          ，然后结合网上一些改造jq插件增加农历的方法思路，修改了源码达到了效果! git下载了这个项目，然后npm install之后生成的文件node_modules把目录下的<a>(lunar-vue-full-calendar/full-calendar-2018修改部分/components)替换(node_modules/vue-full-calendar/components)文件 </a></div>
     </div>
     <div>
         <span class="back" @click="back">back</span>
     </div>
</div>
</template>
<script>
/* eslint-disable */
export default{
    data:function(){
        return {
        }
    },
    methods:{
        back(){
            this.$router.push('/calendar')
        }
    }
}
</script>
<style scoped lang="scss">
.explain{
  font-size: 14px;
  h2{
      text-align: center;
  }
  div {
      text-indent: 20px;
  }
  a{
      color:#409eff;
  }
  .back{
      cursor: pointer;
      display: inline-block;
      margin-top: 40px;
 color:#409eff;
 font-size: 15px;
  }
}
</style>

