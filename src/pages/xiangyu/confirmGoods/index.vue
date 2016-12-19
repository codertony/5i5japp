<template>
  <div>
    <div v-title>确认到货</div>
    <div class="page-content has-bottom">
      <div class="main-content" style="font-size: 14px">
        <select v-model="provider" class="block-form form-arrow-down noBorder">
          <option value="">请选择款项类别</option>
          <option v-for="op in selectData" :value="op">{{op}}</option>
        </select>
        <div class="goodsListHeader full-content">
          <div class="grid">
            <div class="col-1">名称</div>
            <div class="col-2">型号</div>
            <div style="width:65px" class="col-fixed">订单数量</div>
            <div style="width:105px" class="col-fixed">到货数量</div>
          </div>
        </div>
        <ul class="goodsList">
          <li v-for="i in listData" :class="{getGoods:i.get==i.order}" class="grid">
            <div class="col-1">{{i.name}}</div>
            <div class="col-2 gray-light"> {{i.model}}</div>
            <div style="width:65px" class="col-fixed text-center">{{i.order}}</div>
            <div style="width:100px" class="col-fixed text-center">
              <button @click="i.get--" :disabled="i.get==0" class="badge-orange"> - </button>
              <input type="text" v-model="i.get" class="getNumber">
              <button @click="i.get++" v-show="i.get!=i.order" class="badge-orange">+</button>
            </div>
          </li>
        </ul>
        <ul class="nav-bottom">
          <li class="col-1"><a @click="submitData" class="iconLeft link-blue"><i class="iconfont">&#xe60b;</i><span class="f1">确定</span></a></li>
          <li class="divide-v10"></li>
          <li class="col-1"><a href="javascript:history.back()" class="iconLeft link-gray"><i class="iconfont">&#xe604;</i><span class="f1">取消</span></a></li>
        </ul>
      </div>
    </div>
    <mt-popup
      style="width: 80%"
      v-model="searchPopup"
      position="right">
    </mt-popup>
  
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        searchPopup: false,
        allData: [
          {
            provider: "我爱我家1",
            name: "三人沙发11",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          },{
            provider: "我爱我家1",
            name: "三人沙发22",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家1",
            name: "三人沙发33",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家1",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家2",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家2",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家3",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家3",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家3",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家4",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家4",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家4",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }, {
            provider: "我爱我家4",
            name: "三人沙发",
            model: "大创星SF-1044C164697",
            order: 3,
            get: 2
          }
        ],
        provider:"我爱我家3"
      }
    },
    computed:{
      selectData:function(){
        var sele=[];
        this.allData.forEach(function(x){
          if(sele.indexOf(x.provider)==-1){
            sele.push(x.provider)
          }
        });
        console.log(sele);
        return sele
      },
      listData:function(){
        var list=[];
        var provider=this.provider;
        if(provider){
          this.allData.forEach(function (x) {
            if (x.provider == provider) {
              list.push(x)
            }
          })
        }else{
          list=this.allData
        }
        return list
      }
    },
    watch:{
      allData:function(val,oldVal){
        console.log(val);
        val.forEach(function(x,index){
          if((+x.get)>(+x.order)){
            x.get=oldVal[index].get
          }
        })
      }
    },
    methods:{
      submitData:function(){
        this.$http.post('test.txt',this.$data)
          .then(function succeed(res){
            console.log(res)
          },function failse(res){
            console.log(res)
          })
      }
    },
    components: {}
  }
</script>
<style scope lang="less" rel="stylesheet/less" type="text/css">
  .mint-searchbar {
    font-size: 16px;
  }
  .getNumber{
    border: 1px solid #01acfe !important;
  }
</style>

