<template>
  <div>
    <div v-title>房屋详情</div>
    <div class="page-content has-bottom">
      <div class="main-content">
        <div class="list-head border-bottom"><span>环球中心21楼</span>
          <div class="badge-red hang3">整改中</div>
        </div>
        <ul style="padding:9px 0" class="keyValueList">
          <li>
            <div class="keyItem">户型</div>
            <div class="valItem">三室一厅</div>
          </li>
          <li>
            <div class="keyItem">楼层</div>
            <div class="valItem">22/45</div>
          </li>
          <li>
            <div class="keyItem">建筑面积</div>
            <div class="valItem">欧美风格</div>
          </li>
          <li>
            <div class="keyItem">装修公司</div>
            <div class="valItem">杭州相寓装饰有限公司</div>
          </li>
          <li>
            <div class="keyItem">物业地址</div>
            <div class="valItem">杭州市下城区西湖文化广场18号环球中心</div>
          </li>
          <li>
            <div class="keyItem">户型</div>
            <div class="valItem">三室一厅</div>
          </li>
        </ul>
        <div class="img full-content noPadding" style="height: 190px">
          <mt-swipe :auto="0">
            <mt-swipe-item><img src="./img/house.png" width="100%"></mt-swipe-item>
            <mt-swipe-item><img src="./img/house.png" width="100%"></mt-swipe-item>
            <mt-swipe-item><img src="./img/house.png" width="100%"></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="tiao tiao-lg full-content">装修配置进度</div>
        <ul class="firstList planList">
          <li v-for="(li,i) in detailList">
            <router-link to="hostNodeDetail" class="firstItem" >
              <!--<i class="listArrow iconfont">&#xe61a;</i>-->
              <div class="justifyBox"><span class="semicircle-yellow">{{li.style}}</span>
                <div class="justifyBox planTime">
                  <div class="mark-yellow mark-vertical">计划</div>
                  <div class="f5">
                    <div class="gray-light">开始</div>
                    <div class="yellow-dark">{{li.startTime}}</div>
                  </div>
                  <div class="f5">
                    <div class="gray-light">完成</div>
                    <div class="yellow-dark">{{li.completeTime}}</div>
                  </div>
                </div>
                <div class="planBadge">
                  <div class="badge-orange badge-sm" v-show="li.state.peizhi">配</div>
                  <div class="badge-red badge-sm" v-show="li.state.zhenggai">整</div>
                  <div class="badge-yellow badge-sm" v-show="li.state.yanshou">验</div>
                  <div class="badge-green badge-sm" v-show="li.state.jiaoge">交</div>
                  <i class="planRight iconfont">&#xe61a;</i>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!--<mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">
          <i class="iconfont">&#xe609;</i>
          外卖
        </mt-tab-item>
        <mt-tab-item id="订单">
          <i class="iconfont">&#xe609;</i>
          订单
        </mt-tab-item>
        <mt-tab-item id="发现">
          <i class="iconfont">&#xe609;</i>
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <div><i class="iconfont">&#xe609;</i></div>
          <div>我的</div>
        </mt-tab-item>
      </mt-tabbar>-->
      <ul class="nav-bottom">
        <li class="col-1">
          <router-link to="confirmGoods" class="iconUp link-gray"><i class="iconfont">&#xe609;</i><span>物品登记</span>
          </router-link>
        </li>
        <li class="col-1">
          <router-link to="costManagement" class="iconUp link-gray"><i class="iconfont">&#xe600;</i><span>发生费用</span>
          </router-link>
        </li>
        <li class="col-1">
          <router-link to="reformList" class="iconUp link-gray"><i class="iconfont">&#xe601;</i><span>返工整改</span>
          </router-link>
        </li>
        <li class="col-1"><a class="iconUp link-gray"><i class="iconfont">&#xe60b;</i><span>整体验收</span></a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        detailList:[
          {style: '硬装',
            startTime: '2016.06.12',
            completeTime: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '硬装',
            startTime: '2016.06.12',
            completeTime: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '硬装',
            startTime: '2016.06.12',
            completeTime: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '硬装',
            startTime: '2016.06.12',
            completeTime: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
        ],
        
      }
    },
    components: {}
  }
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
</style>

