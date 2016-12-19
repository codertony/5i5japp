<template>
  <div>
    <div v-title>{{nodeStyle}}子节点</div>
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
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe617;</div>
            </div>
            <div class="col-1">
              <textarea placeholder="整改内容" cols="10" rows="3" class="block-form"></textarea>
            </div>
          </li>
        </ul>
        <ul class="full-content">
          <li v-for="(li,i) in picList">
            <div class="tiao tiao-lg">{{li.name}}:</div>
            <ul class="picList">
              <li v-for="(picLi,PicI) in li.pictures">
                <a >
                  <img :src="picLi" alt="">
                </a>
              </li>
              <li class="addBtn">
                <a >
                  <span class="gray-lighter" style="font-size: 40px">+</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        
      </div>
      <ul class="nav-bottom">
        <li class="col-1">
          <a @click="passPopup=true" class="iconLeft link-gray">
            <i class="iconfont">&#xe60b;</i>
            <span class="f1">验证通过</span>
          </a>
          <mt-popup
            position=""
            v-model="passPopup"
            popup-transition="popup-fade">
              <div style="width:300px;border-radius: 10px !important;">
                <div class="tiao tiao-lg" style="font-size: 18px;text-align: center">确认通过</div>
                <textarea placeholder="备注" cols="10" rows="6" class="block-form" style="padding: 8px;"></textarea>
                <ul class="btn-group">
                  <li class="col-1">
                    <a @click="" class="iconLeft link-blue">
                      <span class="f1">确认</span>
                    </a>
                  </li>
                  <li class="divide-v10"></li>
                  <li class="col-1">
                    <a @click="passPopup=false" class="iconLeft gray-blue">
                      <span class="f1">取消</span>
                    </a>
                  </li>
                </ul>
              </div>
          </mt-popup>
        </li>
        <li class="divide-v10"></li>
        <li class="col-1">
          <router-link to="reformListNewLi" class="iconLeft link-blue">
            <i class="iconfont">&#xe607;</i>
            <span class="f1">返工整改</span>
          </router-link>
        </li>
      </ul>
      <a href="javascript:history.back()" class="iconLeft link-blue" style="position: fixed; top:10px;right: 10px; ">
        <span class="badge-orange">
          <i class="iconfont">确认</i>
        </span>
        <!--<span class="f1">确认保存</span>-->
      </a>
    </div>
   
  </div>
</template>
<script>
  import img1 from './img/image-1.jpg'
  import img2 from './img/image-2.jpg'
  import img3 from './img/image-3.jpg'
  import img4 from './img/image-4.jpg'
  import img5 from './img/image-5.jpg'
  import img6 from './img/image-6.jpg'
  export default{
    data(){
      return {
        passPopup: false,
        nodeStyle: '水电',
        startDatePicker: (() => {return new Date()})(),
        startDate:'实际开工日期',
        completeDatePicker: (() => {return new Date()})(),
        completeDate:'实际完工日期',
        hostDelay: 0,
        picList:[
          {name: '压力测试',
            pictures:[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
            ]
          },
          {name: '养水储水',
            pictures:[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
            ]
          },
          {name: '养水储水',
            pictures:[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
            ]
          },
          {name: '养水储水',
            pictures:[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
            ]
          },
          {name: '养水储水',
            pictures:[
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
            ]
          },
          
          
        ],
      }
    },
    components: {}
  }
</script>
<style scope lang="less" rel="stylesheet/less" type="text/css">
  
</style>

