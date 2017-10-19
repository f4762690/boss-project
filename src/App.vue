<template>
  <div id="app">
    <bs-nav></bs-nav>
    <router-view name="default"></router-view>
    <router-view name="otherPage"></router-view>
  </div>
</template>

<script>
  import './assets/common/css/reset.css';
  import './assets/common/css/style.css';
  import './assets/common/css/style1.css';
  import {checkPlatform,a} from './components/common/js/systemUtil';
  import bsNav from './components/bsNav/bs-nav.vue';
export default {
    mounted(){
      checkPlatform();
    },
    components:{
        bsNav
    }
}
</script>

<style>

</style>
