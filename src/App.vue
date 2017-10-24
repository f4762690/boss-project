<template>
  <div id="app">
    <bs-nav></bs-nav>
    <router-view name="default"></router-view>
    <transition name="page" :enter-active-class="animationEnter" :leave-active-class="animationLeave">
      <router-view name="otherPage"></router-view>
    </transition>
  </div>
</template>

<script>
  import './assets/common/css/reset.css';
  import './assets/common/css/style.css';
  import './assets/common/css/style1.css';
  import {checkPlatform,a} from './components/common/js/systemUtil';
  import bsNav from './components/bsNav/bs-nav.vue';
export default {
    data(){
        return{
          animationEnter:'',
          animationLeave:''
        }
    },
    mounted(){
      checkPlatform();
    },
    components:{
        bsNav
    },
    watch:{
        '$route'(to,from){
          let toDepth = to.path.split('/').length;  //下一个页面
          let fromDepth = from.path.split('/').length; //当前页
          //同一级页面无需设置过渡效果
          if (toDepth === fromDepth) {
            return;
          }
          this.animationEnter = toDepth>fromDepth?"animated fadeInRight" : "animated fadeInLeft";
          this.animationLeave = toDepth>fromDepth?"animated fadeOutLeft" : "animated fadeOutRight";
//          if(fromDepth == 1){
//            this.leaveAnimate = "animated fadeOutRight";
//          }
        }
    }
}
</script>

<style>
 @import './assets/common/css/lib/animate.css';
</style>
