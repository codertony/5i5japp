<template>
  <div>
    <div v-title>整改中</div>
    <div class="page-content has-bottom">
      <div class="main-content">
        <ul class="firstList onlyMoreRemark">
          <li v-for="(li,i) in reformData">
            <a class="firstItem justifyBox" @click="reformMoreShow=i">
            <ul style="width:235px" class="col-1 keyValueList">
              <li>
                <div class="gray-light">房源编号{{li.num}}</div>
              </li>
              <li>
                <div class="keyItem">小区名称</div>
                <div class="valItem">{{li.address}}</div>
              </li>
              <li>
                <div class="keyItem">整改日期</div>
                <div class="valItem">{{li.date}}</div>
              </li>
              <li>
                <div class="keyItem">整修节点</div>
                <div class="valItem">{{li.jiedian}}</div>
              </li>
              <transition enter-active-class="animated fadeIn">
                <div v-show="reformMoreShow==i">
                  <li>
                    <div class="keyItem">预计工期</div>
                    <div class="valItem">{{li.gongqi}}</div>
                  </li>
                  <li>
                    <div class="keyItem">预计完工</div>
                    <div class="valItem">{{li.wancheng}}</div>
                  </li>
                  <li>
                    <div class="keyItem">供应商</div>
                    <div class="valItem">{{li.gongyin}}</div>
                  </li>
                  <li>
                    <div class="keyItem">监理</div>
                    <div class="valItem">{{li.jianli}}</div>
                  </li>
                  <li>
                    <div class="keyItem">备注</div>
                    <div class="valItem">{{li.remark}}</div>
                  </li>
                </div>
              </transition>
              
            </ul>
            <div style="width:62px" class="justifyVertivalBox">
              <div class="center-block" v-show="reformMoreShow!=i"><i class="downIcon iconfont gray-light f6">&#xe61e;</i></div>
              <div class="center-block" v-show="reformMoreShow==i"><i class="downIcon iconfont gray-light f6">&#xe61d;</i></div>
            </div>
            </a>
          </li>
        </ul>
      </div>
      <ul class="nav-bottom">
        <li class="col-1"><router-link to="reformListNewLi" class="iconOnly link-blue"><i class="iconfont">
          &#xe603;</i></router-link></li>
      </ul>
    </div>
    <mt-popup
      style="width: 100%;height: 100%;"
      v-model="newLiPopup"
      position="bottom">
    </mt-popup>
  
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        newLiPopup: false,
        reformData:[
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            address: '杭州市下城区西湖文化广场18号环球中心22F',
            date: '2016-01-01',
            jiedian:'硬装-水电',
            gongqi:'5天',
            wancheng:'2016-01-06',
            gongyin:'杭州我爱我家相寓',
            jianli:'张三三',
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
        ],
        reformMoreShow: -1
      }
    },
    methods:{
      openPicker() {
        this.$refs.picker.open()
      }
    },
    components: {}
  }
</script>
<style scope lang="less" rel="stylesheet/less" type="text/css">
  .mint-searchbar {
    font-size: 15px;
  }
</style>

