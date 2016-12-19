/**
 * Created by user on 2016/12/2.
 */

//组件
var Home={
  template:'<h3>我是主页</h3>'
};
var News={
  template:'<h3>我是新闻</h3>'
};


var hash = '/'


module.exports = [
  {path:'/home', component:Home},
  {path:'/news', component:News}
]