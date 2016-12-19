/*基本模块导入*/
import Vue from 'vue' //vue
import VueRouter from 'vue-router' //路由导入
import MintUI from 'mint-ui' //mint导入
import 'mint-ui/lib/style.css'//mint.css导入

/*css导入*/
import './common/fonts/iconfont/iconfont.css' //导入图标文本
import './common/css/5i5jMobile/index.less' //5i5jMobile
import './common/css/animate.css' //动画css

/*自定义全局指令*/
/*import addDirective from './common/js/directive'*/

/*app导入*/
import App from './App'

/*路由设置*/
import router from './routers/index.js'


Vue.use(MintUI)
Vue.use(VueRouter)

Vue.directive('title', {
  inserted: function (el, binding) {
    if(el.innerText){
      document.title = el.innerText
    }
    el.remove()
  }
})

Vue.filter('dateFormat' , function(value){
    let date = value;
    let currentdate = "";
    if(date instanceof Date ){
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      currentdate = date.getFullYear() + "年" + month + "月" + strDate + "日" ;
    }else if(!date){
      
    }else{
      currentdate = date;
    }
    return currentdate;
  });

Vue.filter('twoDecimal' , function(value){
  var str=Math.round(value*100)+""
  return str.slice(0,-2)+'.'+str.slice(-2)
}),
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
