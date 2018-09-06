if(!window.console){window.console={log:function(msg){},err:function(msg){}}}
window.onload=function(){
  function getExplorerInfo(){
    var explorer = window.navigator.userAgent.toLowerCase();
    if (explorer.indexOf("msie") >= 0) {
       var ver=explorer.match(/msie ([\d.]+)/)[1];
       return {type:"IE",version:ver};
    }
  };
  var getExplorerInfo=getExplorerInfo()
  if(getExplorerInfo.type.toLowerCase()=="ie"&&parseFloat(getExplorerInfo.version)<10){
    console.log("低版本IE");
    document.getElementById('explore').innerHTML='<div style="font-size:16px;position:fixed;left:0;top:0;width:100%;text-align:center;z-index:11000;background:rgb(255,255,233);height:60px;line-height:60px;color:#743E04;">由于您的浏览器版本太低，我们暂时关闭了某些高级功能。建议您升级或安装适配更好的chrome浏览器。<a href="http://rj.baidu.com/soft/detail/14744.html?ald" target="_blank"  style="color:#743E04;border:1px solid #CB7C2C;padding:2px 10px;text-decoration: none;"><img style="position:relative;top:-2px;margin-right:5px;border:none;vertical-align:middle;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAWJJREFUKBWVk71KA0EQx/8z+QLNQQQ1giD24gMIUWwiCBZqsPABjKktfQxfwiKNKUQjYhRPEcFCQbC0S6MEgkk0l9txl+TwLh6JTjNf/9+wO8sStBVPrpfBsgCwY/JBRpCEKNxsrS5e0tHV7bzzqbZ1sYRIrDUIND1xVRKk1mIJPoy2W50NjnAUoBykM4wFcVfifKl11mByKBEiIILVmxPS/UNJHzfElLhEUlPCigBXSNJE3oF/9OEwUM2tLB14suKZva/jlJd7PgArhQeGNJmp5gmMZ8IFFMVdkpSOM14vcGdmTChr9nwzm7E9gfG5bOaO4yNPEcGcvx6AdWOGP17z5fLjqF9k2y+Wcpt5YYz56/2wfm6arlO9ULJtywgrledktfG2KyLjftDEv2Fd1JtNOw0Ujiv3U+/t2o7e82Q/aPLAwgICff9Wp70XPr6rZBEM/QyBob3EcBxjnP53gNEb7hvI33NafkifMAAAAABJRU5ErkJggg==" alt="">立即下载</a></div>';
  }
};
