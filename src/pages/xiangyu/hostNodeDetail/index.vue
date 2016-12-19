<template>
  <div>
    <div v-title>{{nodeStyle}}主节点</div>
    <div class="page-content has-bottom">
      <div class="main-content">
        <ul class="formList">
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe60d;</div>
            </div>
            <div class="col-1">
              <div @click="$refs.startDatePicker.open()" class="block-form">{{startDate | dateFormat}}</div>
              <mt-datetime-picker
                ref="startDatePicker"
                type="date"
                v-model="startDatePicker"
                @confirm="startDate=startDatePicker"
                year-format="{value} 年"
                month-format="{value}月"
                date-format="{value} 日">
              </mt-datetime-picker>
            </div>
          </li>
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe616;</div>
            </div>
            <div class="col-1">
              <div @click="$refs.completeDatePicker.open()" class="block-form">{{completeDate | dateFormat}}</div>
              <mt-datetime-picker
                ref="completeDatePicker"
                type="date"
                v-model="completeDatePicker"
                @confirm="completeDate=completeDatePicker"
                year-format="{value} 年"
                month-format="{value}月"
                date-format="{value} 日">
              </mt-datetime-picker>
            </div>
          </li>
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe619;</div>
            </div>
            <div class="col-1">
              <!--<router-link tag="div" to="reformListNewLi" class="block-form">
                  <span v-if="hostDelay">{{hostDelay}}天</span>
                  <span v-else>选择延期原因、延期天数</span>
              </router-link>-->
              <router-link tag="div" to="hostNodeDetail_delayList" class="block-form">
                  <span v-if="hostDelay">{{hostDelay}}天</span>
                  <span v-else>选择延期原因、延期天数</span>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="tiao tiao-lg full-content">子节点</div>
        <ul class="firstList planList">
          <li v-for="(li,i) in detailList">
            <router-link class="firstItem" to="childNodeDetail">
              <div class="justifyBox">
                <div class="justifyBox" style="width: 65px">
                  <span class="semicircle-yellow">{{li.style}}</span>
                </div>
                <div class="justifyBox planTime" style="width: 170px">
                  <div class="mark-yellow mark-vertical">计划</div>
                  <div class="f5">
                    <div class="gray-light">开始</div>
                    <div class="yellow-dark">{{li.planComplete}}</div>
                  </div>
                  <div class="mark-blue mark-vertical" style="margin-left: 10px">实际</div>
                  <div class="f5">
                    <div class="gray-light">完工</div>
                    <div class="blue-light">{{li.actualComplete}}</div>
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
      <ul class="nav-bottom">
        <li class="col-1"><a href="javascript:history.back()" class="iconLeft link-blue"><i class="iconfont">&#xe60b;</i><span class="f1">确定</span></a></li>
        <li class="divide-v10"></li>
        <li class="col-1"><a href="javascript:history.back()" class="iconLeft link-gray"><i class="iconfont">&#xe604;</i><span class="f1">取消</span></a></li>
      </ul>
    </div>
   
  </div>
</template>
<script>
  export default{
    data(){
      return {
        nodeStyle: '硬装',
        startDatePicker: (() => {return new Date()})(),
        startDate:'实际开工日期',
        completeDatePicker: (() => {return new Date()})(),
        completeDate:'实际完工日期',
        hostDelay: 0,
        
        detailList:[
          {style: '水电',
            planComplete: '2016.06.12',
            actualComplete: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '泥工',
            planComplete: '2016.06.12',
            actualComplete: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '木工',
            planComplete: '2016.06.12',
            actualComplete: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '油漆',
            planComplete: '2016.06.12',
            actualComplete: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          },
          {style: '铺地板',
            planComplete: '2016.06.12',
            actualComplete: '2016.06.12',
            state: {
              peizhi: true,
              zhenggai: true,
              yanshou: false,
              jiaoge: false
            },
          }
          
        ],
        
      }
    },
    components: {}
  }
</script>
<style scope lang="less" rel="stylesheet/less" type="text/css">
  
</style>

