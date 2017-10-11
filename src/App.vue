<template>
  <div id="app">
    <div class="footer-wrapper">
    <router-link to="job">
      <i class="icon-bussiness-man"></i>
      <span>职位</span>
      </router-link>
    <router-link to="company">
      <i class="icon-office"></i>
      <span class="text">公司</span>
    </router-link>
    <router-link to="message">
      <i class="icon-code"></i>
      <span>消息</span>
    </router-link>
    <router-link to="mine">
      <i class="icon-addressbook_fill"></i>
      <span>我的</span>
    </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import './assets/common/css/reset.css';
  import './assets/common/css/style.css';
  import './assets/common/css/style1.css';
  import {checkPlatform,a} from './components/common/js/systemUtil';
export default {
    mounted(){
      checkPlatform();
      console.log(a);
    },

}
</script>

<style>
  .footer-wrapper{
    border-top:1px solid #eee;
    width:100%;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
    text-align:center;
    display:flex;
    height:48px;
    padding:10px 20px;
    z-index:100;
    background-color:white;
    box-sizing:border-box;
  }
  .router-link-active .icon-bussiness-man{
    color:#6ADBCF;
  }
  .router-link-active .icon-office{
    color:#6ADBCF;
  }
  .router-link-active .icon-code{
    color:#6ADBCF;
  }
  .router-link-active .icon-addressbook_fill{
    color:#6ADBCF;
  }
  .footer-wrapper i{
    color:rgba(7,17,27,0.7);
    font-size:20px;
    display:block;
    margin-bottom:3px;
  }
  .footer-wrapper a{
    flex:1;
    font-size:12px;
    height:28px;
    color:rgba(7,17,27,0.7);
  }
</style>
