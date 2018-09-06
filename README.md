   解决vue-full-calendar这个插件增加中国农历。24节气和节假日的问题

   这个日程表是比较完善的jq插件，然后被封装成了vue插件，功能可以参照https://fullcalendar.io/docs这个链接为官方的API文档和git的vue-full-calendar上去熟悉，在这里我就不讲细了，主要是在网上难以找到vue下面改造的农历问题，查了很多资料，然后结合网上一些改造jq插件增加农历的方法思路，修改了源码达到了效果! git下载了这个项目，然后npm install之后生成的文件node_modules把目录下的(lunar-vue-full-calendar/full-calendar-2018修改部分/components)替换(node_modules/vue-full-calendar/components)文件，然后再npm run dev 就可以了
