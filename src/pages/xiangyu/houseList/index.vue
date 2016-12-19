<template>
  <div>
      <div v-title>房屋列表</div>
      <div class="page-content">
        <div class="main-content">
          <input v-model="search" @click="searchPopup = true" id="search" placeholder="搜索" type="text" class="input-search">
          <ul class="flexBox">
            <li class="col-1">
              <select class="select-blue ellipsis">
                <option>区域</option>
                <option>拱墅区</option>
                <option>西湖区</option>
              </select>
            </li>
            <li class="divide-v5"></li>
            <li class="col-1">
              <select class="select-blue ellipsis">
                <option>装修公司</option>
                <option>按时发发发是阿萨德飞</option>
                <option>按时阿斯顿发萨德飞</option>
              </select>
            </li>
            <li class="divide-v5"></li>
            <li class="col-1">
              <select class="select-blue ellipsis">
                <option>状态</option>
                <option>配置中</option>
                <option>已验收</option>
              </select>
            </li>
            <li class="divide-v5"></li>
            <li class="col-1">
              <select class="select-blue ellipsis">
                <option>更多</option>
                <option>拱墅区</option>
                <option>西湖区</option>
              </select>
            </li>
          </ul>
          <div class="tiao tiao-grey full-content">共12条记录</div>
          <ul class="firstList">
            <li class="col-1"><router-link to="houseDetail" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-orange hang3">配置中</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></router-link></li>
            <li class="col-1"><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-yellow hang3">已验收</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></a></li>
            <li class="col-1"><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-green hang3">已交割</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></a></li>
            <li class="col-1"><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-red hang3">整改中</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
              
                </li>
              </ul></a></li>
            <li><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-orange hang3">配置中</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></a></li>
            <li><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-yellow hang3">已验收</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></a></li>
            <li><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-green hang3">已交割</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></a></li>
            <li><a href="houseDetail.html" class="firstItem"><i class="listArrow iconfont">&#xe61a;</i>
              <div class="list-head">环球中心
                <div class="badge-red hang3">整改中</div>
              </div>
              <ul class="secondList">
                <li>
                  <i class="secondList-icon iconfont">&#xe606;</i>
                  120m² <i class="divide-v7"></i> 1/16层 <i class="divide-v7"></i> 3室2厅
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60c;</i>
                  杭州市下城区西湖文化广场18号环球中心
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60d;</i>
                  预计完工：<span class="blue">2016-06-10</span>
                </li>
                <li>
                  <i class="secondList-icon iconfont">&#xe60e;</i>
                  当前阶段：<span class="blue">水电</span>
                </li>
              </ul></a></li>
          </ul>
        </div>
      </div>
      <mt-popup
        style="width: 80%"
        v-model="searchPopup"
        position="right">
        <mt-search
          v-model="search"
          cancel-text=""
          placeholder="搜索">
        </mt-search>
      </mt-popup>
    
  </div>
</template>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue',
        search: '123',
        searchPopup: false,
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

