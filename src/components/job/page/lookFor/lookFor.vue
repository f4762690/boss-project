<template>
  <transition name="page">
  <div class="lookFor-wrapper" v-show="showPage">
      <div class="header">
        <i class="icon-back" @click="toHide()"></i>
        <span>管理求职意向</span>
      </div>
      <div class="page-body">
        <p class="text" @click="changeStatus(userInfo.status)">
          <span>求职状态</span>
          <span class="status">
             <span>{{userInfo.status}}</span>
          <i class="icon-more"></i>
          </span>

        </p>
        <div @click = "showEdit">
        <p class="location">
          <span>
            [{{userInfo.location}}]{{userInfo.job}}
          </span>
        </p>
        <p class="salary">
          <span>
            {{userInfo.salary}} 不限
          </span>
        </p>
        </div>
        <div class="footer">
          <p @click="showAdd">
            <i class="icon-add"></i>
            <span>期望职位</span>
          </p>
        </div>
      </div>
      <edit-look-for ref="editLook" :userInfo="userInfo"></edit-look-for>
      <transition name="bottomToTop">
      <div class="changeStatus" v-show="ifShow">
        <p>
          <i class="icon-close" @click="hideChangeStatus"></i>
          <span>求职状态</span>
          <i class="icon-right"></i>
        </p>
        <p></p>
        <p>离职-随时到岗</p>
        <p>在职-月内到岗</p>
        <p>在职-考虑机会</p>
        <p>在职-暂不考虑</p>
      </div>
      </transition>
      <transition name="hideToShow">
       <div class="bg" @click="hideChangeStatus" v-show="ifShow"></div>
      </transition>
  </div>
  </transition>
</template>

<script>
    import editLookFor from '../editLookFor/editLookFor.vue';
    export default {
      data(){
        return {
          ifShow:false,
          showPage:false
        }
      },
      props:{
        userInfo:{
          type:Object,
          default(){
            return {

            }
          }
        }
      },
      methods:{
        showEdit(){
          this.$refs.editLook.toShow();
        },
        showAdd(){
          this.$refs.editLook.addLookFor();
        },
        hideChangeStatus(){
          this.ifShow = false;
        },
        changeStatus(status){
          this.ifShow = true;
        },
        toHide(){
          this.showPage = false;
        },
        toShow(){
          this.showPage = true;
        }
      },
      components:{
        editLookFor
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page-enter,.page-leave-to{
    transform: translate3d(0,0,0);
  }
  .page-enter-active,.page-leave-active{
    transform: translate3d(100%,0,0);
  }
  .hideToShow-enter,.hideToShow-leave-to{
    opacity:1;
  }
  .hideToShow-enter-active,.hideToShow-leave-active{
    opacity:0;
  }
  .lookFor-wrapper{
    position:fixed;
    top:0;
    left:0;
    background-color:white;
    z-index:200;
    height:100%;
    width:100%;
    transition:all 0.4s ease;
  }
  .header{
    position:fixed;
    text-align: center;
    color:white;
    font-size:16px;
    height:48px;
    width:100%;
    line-height:48px;
    background-color:#6ADBCF;
  }
  i.icon-back{
    line-height:48px;
    float:left;
    margin-left:10px;
  }
  .page-body{
    font-size:14px;
    color:rgba(7,17,27,0.7);
    padding:10px;
    box-sizing:border-box;
    background-color:white;
    width:100%;
    height:100%;
    position:fixed;
    top:48px;
    z-index:200;
  }
  .location{
    margin:10px 0;
    color:rgb(7,17,27);
  }
  .page-body .text{
    border-bottom:1px solid #eee;
    padding-bottom:10px;
  }
  .salary{
    border-bottom:1px solid #eee;
    padding-bottom:10px;
  }
  .text .status{
    float:right;
  }
  .footer{
    z-index:300;
    font-size:16px;
    position:fixed;
    bottom:10px;
    color:white;
    width:calc(100% - 20px);
    box-sizing: border-box;
    background-color:#6ADBCF;
    padding: 10px 0;
    text-align: center;
    border-radius:5px;
  }
  .icon-more{
    color:#6ADBCF;
    font-size:14px;
    line-height:14px;
  }
  .bottomToTop-enter,.bottomToTop-leave-to{
    transform:translate3d(0,0,0);
  }
  .bottomToTop-enter-active,.bottomToTop-leave-active{
    transform:translate3d(0,100%,0);
  }
  .changeStatus{
    transition:all 0.4s ease;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    text-align:center;
    height:40%;
    background-color:white;
    z-index:400;
  }
  .changeStatus p{
    font-size:10px;
    color:rgba(7,17,27,0.7);
    padding: 10px 0;
  }
  .changeStatus p:first-child{
    border-bottom:1px solid #eee;
  }
  .changeStatus i{
    vertical-align:middle;
    color:#6ADBCF;
    font-size:20px
  }
  .icon-close{
    margin-left:10px;
    float:left;
  }
  .icon-right{
    margin-right:10px;
    float:right;
  }
  .bg{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:350;
    background-color:rgba(0,0,0,0.6);
    transition:all 0.2s linear;
  }
</style>
