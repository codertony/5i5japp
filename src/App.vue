<template>
  <div id="app">
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Vue from 'vue'
  

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" type="text/css">
  #app{
    position: relative;
    &>div{
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
</style>
