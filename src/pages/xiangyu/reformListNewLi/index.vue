<template>
  <div>
    <div v-title>新增整改单</div>
    <div class="page-content has-bottom">
      <div class="main-content">
        <ul class="formList">
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe618;</div>
            </div>
            <div class="col-1">
              <div @click="$refs.changePicker.open()" class="block-form">{{changeDate | dateFormat}}</div>
              <mt-datetime-picker
                ref="changePicker"
                type="date"
                v-model="changePicker"
                @confirm="changeDate=changePicker"
                year-format="{value} 年"
                month-format="{value}月"
                date-format="{value} 日">
              </mt-datetime-picker>
            </div>
          </li>
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe615;</div>
            </div>
            <div class="col-1">
              <div @click="reformStyelPopup=true;reformStylValue='硬装整改-水电'" class="block-form form-arrow-down">
                {{reformStylValue}}
              </div>
              <mt-popup
                style="width: 100%;"
                v-model="reformStyelPopup"
                position="bottom">
                <mt-picker
                  :slots="reformStyleSlots"
                  @change="onValuesChange">
                </mt-picker>
              </mt-popup>
            </div>
          </li>
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe614;</div>
            </div>
            <div class="col-1">
              <input placeholder="供应商" type="text" class="block-form form-arrow-right">
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
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe60d;</div>
            </div>
            <div class="col-1">
              <input placeholder="预计工期" type="text" class="block-form">
            </div>
          </li>
          <li class="flexBox">
            <div class="formListIcon">
              <div class="iconfont">&#xe616;</div>
            </div>
            <div class="col-1">
              <input placeholder="预计完成工期" type="text" class="block-form">
            </div>
          </li>
        </ul>
      </div>
      <ul class="nav-bottom">
        <li class="col-1"><router-link to="reformList" class="iconLeft link-blue"><i class="iconfont">&#xe60b;</i><span class="f1">确定</span></router-link></li>
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
        reformStyelPopup: false,
        changePicker: (() => {return new Date()})(),
        changeDate:'整改日期',
        reformStylValue:'款项类别',
        reformStyl:{
          '硬装整改': ['水电','泥工','木工','油漆','地板','壁纸'],
          '软装整改': ['1','2','3','4','5','6'],
          '保洁整改': ['1','2','3','4','5','6'],
          '环保整改': ['1','2','3','4','5','6'],
        }
      }
    },
    computed:{
      reformStyleSlots: function (){
        return [
          {
            flex: 1,
            values: Object.keys(this.reformStyl),
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['水电','泥工','木工','油漆','地板','壁纸'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      }
    },
    methods:{
      onValuesChange(picker, values) {
        picker.setSlotValues(1, this.reformStyl[values[0]]);
        this.reformStylValue=values[0]+'-'+values[1];
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

