// 所写者hj
import router from '../router'
import store from '../store'
import { Loading } from 'element-ui';
import CryptoJS from 'crypto-js'



Date.prototype.format=function(fmt){
    var o={
        "M+":this.getMonth()+1, //月份
        "d+":this.getDate(), //日
        "h+":this.getHours(), //小时
        "m+":this.getMinutes(), //分
        "s+":this.getSeconds(), //秒
        "q+":Math.floor((this.getMonth()+3)/3), //季度
        "S":this.getMilliseconds() //毫秒
    };
    if(/(y+)/.test(fmt)) fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+k+")").test(fmt)) fmt=fmt.replace(RegExp.$1,(RegExp.$1.length==1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)));
    return fmt;
}

String.prototype.format=function(){
    var args=arguments;
    return this.replace(/\{(\d+)\}/g,
        function(m,i){
            return args[i];
        });
}
export default {
    setTitle(text) {
        var $body = $('body');
        document.title = text;
        // hack在微信等webview中无法修改document.title的情况
        var $iframe = $('<iframe style="display:none;" src="./static/image/logo.ico"></iframe>').on('load', function() {
            setTimeout(function() {
                $iframe.off('load').remove();
            }, 0);
        }).appendTo($body);
    },
    //加密
    aes_encrypt(s) {
          let encrypt = JSON.stringify(s);
          return '' + CryptoJS.AES.encrypt(encrypt, CryptoJS.enc.Utf8.parse("main__secret_key"), {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding});
    },
    //解密
    aes_decrypt(s) {
          let decrypt = '' + CryptoJS.AES.decrypt(s, CryptoJS.enc.Utf8.parse("main__secret_key"), {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding}).toString(CryptoJS.enc.Utf8);
          return JSON.parse(decrypt);
    },
    //跳转路由事件
    pushRouter(url,query,type) {
        var _query={},_date=new Date();
        if (query) {_query=query;}
        _query.nowDate=_date.format("yyyy-MM-dd hh:mm:ss").replace(/-/g,'').replace(/:/g,'').replace(" ",'');
        $.cookie('routerNowDate', _query.nowDate, {path:"/",expires: 1});
        console.log(_query.nowDate)
        if(type=='replace'){
            router.replace({path:url,query:_query});
        }else{
            router.push({path:url,query:_query});
        }
    }
}