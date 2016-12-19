<template>
  <div>
    <div v-title>{{title}}延迟列表</div>
    <div class="page-content has-bottom">
      <div class="main-content">
        <ul class="firstList onlyMoreRemark">
          <li v-for="(li , i) in delayData">
            <a class="firstItem justifyBox moreRemarkList" @click="$data.costRemarkShow=index">
            <ul style="width:235px" class="col-1 keyValueList">
              <li>
                <div class="keyItem">延迟原因</div>
                <div class="valItem" style="width: 170px">{{li.dalayCause}}</div>
              </li>
              <li v-show="li.chendan">
                <div class="keyItem">承担方</div>
                <div class="valItem" style="width: 170px">{{li.chendan}}</div>
              </li>
            </ul>
            <div style="width:62px" class="justifyVertivalBox">
              <div class="text-right">
                <div class="badge-red badge-light">{{li.delayTime}}天</div>
              </div>
            </div>
          </a>
          </li>
        </ul>
      </div>
      <ul class="nav-bottom">
        <li class="col-1"><a @click="newDelayPopup=true" class="iconOnly link-blue"><i class="iconfont">
          &#xe603;</i></a></li>
      </ul>
    </div>
    <mt-popup
      style="width: 100%"
      v-model="newDelayPopup"
      position="bottom">
      <ul class="firstList">
        <li>
          
        </li>
      </ul>
  
      <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
        <mt-picker v-show="delayCauseData[newDelay.dalayCause][0]!='无'" :slots="chendanList" @change="onChendanChange" :showToolbar="true">
          <div class="tiao tiao-lg full-content">承担方</div>
        </mt-picker>
      </transition>
      
      <mt-picker :slots="delayCauseList" @change="onCauseChange" :showToolbar="true">
        <div class="tiao tiao-lg full-content">延期原因</div>
      </mt-picker>
      <div class="justifyBox" style="padding: 15px;">
        <span class="gray-light f1">延期</span>
        <input class="gray-light f1 text-center" style="width: 120px;padding: 3px;" placeholder="延迟天数" type="number" v-model="newDelay.delayTime"></input>
        <span class="gray-light f1">天</span>
      </div>
      <ul class="btn-group">
        <li class="col-1"><a @click="addDelay" class="iconLeft link-blue"><i class="iconfont">&#xe60b;</i><span class="f1">确定</span></a></li>
        <li class="divide-v10"></li>
        <li class="col-1"><a @click="newDelayPopup=false" class="iconLeft link-gray"><i class="iconfont">&#xe604;</i><span class="f1">取消</span></a></li>
      </ul>
    </mt-popup>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        title: '硬装',
        newDelayPopup: false,
        delayData:[
          {dalayCause: '1234567asdasdfdfasdfa safdasdfasdfafd89',
            delayTime: 10,
            chendan: '杭州景程装饰有限公司',
          },
          {dalayCause: '123456789',
            delayTime: 10,
            chendan: '',
          },
          {dalayCause: '123456789',
            delayTime: 10,
            chendan: '杭州景程装饰有限公司',
          },
          {dalayCause: '123456789',
            delayTime: 10,
            chendan: '杭州景程装饰有限公司',
          },
          {dalayCause: '123456789',
            delayTime: 10,
            chendan: '杭州景程装饰有限公司',
          },
          
        ],
        delayCauseData:{
          "原因1爱飞士大夫士大夫撒发放" : ["承担1.达富结节","承担2.达cd富结节","承担3.达富结节"],
          "原因2安抚士大夫撒发放" : ["承担1.撒的发生大","承担2.阿萨德","承担3.搜索","adfasdad"],
          "原因3阿斯蒂芬撒发放" : ["无"],
          "原因4爱爱豆夫撒发放" : ["承担1.达富结节","承担2.达cd富结节","承担3.达富结节"],
          "原因5阿萨德士大夫撒发放" : ["无"],
        },
        newDelay:{dalayCause: "原因1爱飞士大夫士大夫撒发放",
          delayTime: "",
          chendan: "承担1.达富结节",
        }
      }
    },
    computed:{
      delayCauseList : function() {
        let list = [{
          flex: 1,
          values: Object.keys(this.delayCauseData),
          className: 'slot1'
        }];
        return list
      },
      chendanList:function () {
        let list = [{
          flex: 1,
          values: this.delayCauseData[this.newDelay.dalayCause],
          className: 'slot2'
        }];
        return list
      }
      
    },
    methods:{
      onCauseChange(picker, values){
        this.newDelay.dalayCause = values[0];
        this.newDelay.chendan = this.delayCauseData[values[0]][0];
      },
      onChendanChange(picker, values){
        if(values[0]){
          this.newDelay.chendan = values[0];
        }else{
          this.newDelay.chendan = values[undefined];
        }
      },
      addDelay(){
        var delay = {...this.newDelay};
        this.delayData.push(delay);
        this.newDelay.delayTime = '';
        this.newDelayPopup=false;
      }
    },
    components: {}
  }
</script>
<style scope lang="less" rel="stylesheet/less" type="text/css">
  
</style>

