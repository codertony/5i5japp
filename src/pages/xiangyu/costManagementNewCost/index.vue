<template>
  <div>
      <div v-title>新增费用</div>
      <div class="page-content has-bottom">
        <div class="main-content">
          <ul class="formList">
            <li class="flexBox">
              <div class="formListIcon">
                <div class="iconfont">&#xe60f;</div>
              </div>
              <div class="col-1">
                <input placeholder="0.00" type="text" class="block-form">
              </div>
            </li>
            <li class="flexBox">
              <div class="formListIcon">
                <div class="iconfont">&#xe610;</div>
              </div>
              <div class="col-1">
                <select class="block-form form-arrow-down">
                  <option>款项类别</option>
                  <option>款项类别1</option>
                  <option>款项类别2</option>
                  <option>款项类别3</option>
                </select>
              </div>
            </li>
            <li class="flexBox">
              <div class="formListIcon">
                <div class="iconfont">&#xe611;</div>
              </div>
              <div class="col-1">
                <input placeholder="应付日期" type="text" class="block-form form-arrow-right">
              </div>
            </li>
            <li class="flexBox">
              <div class="formListIcon">
                <div class="iconfont">&#xe612;</div>
              </div>
              <div class="col-1">
                <input placeholder="选择收款方" @click="freePopup=true" class="block-form form-arrow-right">
                </input>
              </div>
            </li>
            <li class="flexBox">
              <div class="formListIcon">
                <div class="iconfont">&#xe613;</div>
              </div>
              <div class="col-1">
                <textarea placeholder="备注" cols="10" rows="3" class="block-form"></textarea>
              </div>
            </li>
          </ul>
        </div>
        <ul class="nav-bottom">
          <li class="col-1"><a class="iconLeft link-blue"><i class="iconfont">&#xe60b;</i><span class="f1">确定</span></a></li>
          <li class="divide-v10"></li>
          <li class="col-1"><a href="javascript:history.back()" class="iconLeft link-gray"><i class="iconfont">&#xe604;</i><span class="f1">取消</span></a></li>
        </ul>
      </div>
      <mt-popup
        style="height: 100%;width: 100%"
        v-model="freePopup"
        position="bottom">
        <div class="page-content">
          <ul class="formList">
            <li class="flexBox">
              <div class="col-1">
                <select class="block-form form-arrow-down">
                  <option>硬装</option>
                  <option>硬装1</option>
                  <option>硬装2</option>
                  <option>硬装3</option>
                </select>
              </div>
            </li>
            <li class="flexBox">
              <div class="col-1">
                <select class="block-form form-arrow-down">
                  <option>家具</option>
                  <option>硬装1</option>
                  <option>硬装2</option>
                  <option>硬装3</option>
                </select>
              </div>
            </li>
            <li class="flexBox">
              <div class="col-1">
                <select class="block-form form-arrow-down">
                  <option>家电</option>
                  <option>硬装1</option>
                  <option>硬装2</option>
                  <option>硬装3</option>
                </select>
              </div>
            </li>
            <li class="flexBox">
              <div class="col-1">
                <select class="block-form form-arrow-down">
                  <option>环保</option>
                  <option>硬装1</option>
                  <option>硬装2</option>
                  <option>硬装3</option>
                </select>
              </div>
            </li>
          </ul>
          <ul class="nav-bottom">
            <li class="col-1"><a @click="freePopup=false" class="iconLeft link-blue"><i class="iconfont">&#xe60b;</i><span class="f1">确定</span></a></li>
            <li class="divide-v10"></li>
            <li class="col-1"><a @click="freePopup=false" class="iconLeft link-gray"><i class="iconfont">&#xe604;</i><span class="f1">取消</span></a></li>
          </ul>
        </div>
        
      </mt-popup>
    
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        freePopup: false
      }
    },
    components: {
    }
  }
</script>
<style scope lang="less" rel="stylesheet/less" type="text/css">
  .mint-searchbar{
    font-size: 15px;
  }
</style>

