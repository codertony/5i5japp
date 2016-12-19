<template>
  <div>
    <div v-title>费用管理</div>
    <div class="page-content has-bottom">
      <div class="main-content">
        <ul class="firstList onlyMoreRemark">
          <li v-for="(item , index) in costData">
            <a class="firstItem justifyBox moreRemarkList" @click="$data.costRemarkShow=index">
            <ul style="width:235px" class="col-1 keyValueList">
              <li >
                <div class="gray-light">房源编号{{item.num}}</div>
              </li>
              <li>
                <div class="keyItem">硬装尾款</div>
                <div class="valItem">￥{{item.weikuan | twoDecimal}}</div>
              </li>
              <li>
                <div class="keyItem">供应商</div>
                <div class="valItem">{{item.gongying}}</div>
              </li>
              <li>
                <div class="keyItem">应付日期</div>
                <div class="valItem">{{item.yinfushijian}}</div>
              </li>
              <transition enter-active-class="animated flipInX">
                <div v-show="$data.costRemarkShow==index">
                <li>
                  <div class="keyItem">备注</div>
                  <div class="valItem">
                    {{item.remark}}
                  </div>
                </li>
              </div>
              </transition>
            </ul>
            <div style="width:62px" class="justifyVertivalBox">
              <div class="text-right" v-show="item.yinfu>0">
                <div class="gray-light">应付余额</div>
                <div class="yellow">￥{{item.yinfu | twoDecimal}}</div>
              </div>
              <div class="text-right" v-show="!(item.yinfu>0)">
                <div class="badge-red badge-light badge-lg">已付清</div>
              </div>
              <div class="center-block"><i class="downIcon iconfont gray-light f6">&#xe61e;</i></div>
            </div>
          </a>
          </li>
        </ul>
      </div>
      <ul class="nav-bottom">
        <li class="col-1"><router-link to="costManagementNewCost" class="iconOnly link-blue"><i class="iconfont">
          &#xe603;</i></router-link></li>
      </ul>
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
        costData:[
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 3200,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
          {num: '012464',
            weikuan: 6100,
            gongying: '杭州景程装饰有限公司',
            yinfushijian: '2016-01-08',
            yinfu: 0,
            remark:'发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放,发发发生法萨芬缩放缩放'
          },
        ],
        costRemarkShow: -1
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

