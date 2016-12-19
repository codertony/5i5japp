/**
 * Created by user on 2016/12/2.
 */
/*基本模块导入*/
import Vue from 'vue' //vue
import VueRouter from 'vue-router' //路由导入
import MintUI from 'mint-ui' //mint导入
import 'mint-ui/lib/style.css'//mint.css导入

Vue.use(VueRouter)
Vue.use(MintUI)

var merge = function() {
  return Array.prototype.concat.apply([], arguments)
}

/*默认路由*/
const defaultRouter = [{path:'*', redirect:'/houseList'}];

/*分路由导入*/
import xiangyu from './xiangyu'
import test from './test'

const routes = merge(xiangyu,test,defaultRouter);



const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
  beforeEach: ((to,from ,next) => {
    MintUI.Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    next();
  }),
  afterEach:(route => {
    MintUI.Indicator.close();
  })
})

module.exports = router;

