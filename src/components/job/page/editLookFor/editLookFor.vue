<template>
  <transition name="page">
    <div class="lookFor-wrapper" v-show="showPage">
      <div class="header">
        <i class="icon-back" @click="toHide()"></i>
        <span>{{title}}</span>
      </div>
      <div class="bossSee" v-show="addShow">
        <p>你的多个意向都会被Boss看到,请认真填写。</p>
      </div>
      <div class="page-body">
        <p class="text" @click="showHopePosition">
          <span>期望职业</span>
          <span class="status">
             <span>{{userInfo.job}}</span>
          <i class="icon-more"></i>
          </span>

        </p>
        <p class="text" @click="changeStatus(userInfo.status)">
          <span>期望行业</span>
          <span class="status">
             <span>{{getIndustry}}</span>
          <i class="icon-more"></i>
          </span>

        </p><p class="text" @click="changeStatus(userInfo.status)">
        <span>工作城市</span>
        <span class="status">
             <span>{{userInfo.location}}</span>
          <i class="icon-more"></i>
          </span>

        </p>
        <p class="text" @click="changeStatus(userInfo.status)">
          <span>薪资要求</span>
          <span class="status">
               <span>{{userInfo.salary}}</span>
            <i class="icon-more"></i>
            </span>

        </p>
        <div class="bgTranslate" v-show="addShowBgt" @click="hideBgT">
          <p> 80%的Boss希望了解您的真实期望薪资,填写后有利于要理想的薪水哦!</p>
          <i class="icon-close"></i>
        </div>
        <div class="footer">
          <p>
            <span>完成</span>
          </p>
        </div>
      </div>
      <transition name="bottomToTop">
        <div class="changeStatus" v-show="ifShow">
          <p>
            <i class="icon-close" @click="hideChangeStatus"></i>
            <span>薪资要求()</span>
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
      <transition name="page">
      <hope-position ref="hopePositionRef"></hope-position>
      </transition>
    </div>
  </transition>
</template>

<script>
  import hopePosition from '../hopePosition/hopePosition.vue';
  export default {
    data(){
      return {
        addShowBgt:false,
        addShow:false,
        title:"编辑求职意向",
        ifShow:false,
        showPage:false
      }
    },
    computed:{
      getIndustry(){
        if(!this.userInfo.industry){
          return "不限"
        }else{
          return this.userInfo.industry.length+"个标签"
        }
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
      showHopePosition(){
        this.$refs.hopePositionRef.toShowHope();
      },
      hideBgT(){
        this.addShowBgt = false;
      },
      addLookFor(){
          this.title="添加求职意向";
          this.addShowBgt = true;
          this.showPage = true;
          this.addShow = true;
          this.$emit('addLookFor');
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
        this.title="编辑求职意向";
        this.addShowBgt = false;
        this.showPage = false;
        this.addShow = false;
        this.showPage = true;
      }
    },
    components:{
      hopePosition
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
    padding:0 10px 10px 10px;
    box-sizing:border-box;
    background-color:white;
    width:100%;
    height:100%;
    z-index:200;
  }
  .location{
    margin:10px 0;
    color:rgb(7,17,27);
  }
  .page-body .text{
    border-bottom:1px solid #eee;
    padding:10px 0;
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
  .bossSee{
    height:36px;
    color:#FFA500;
    font-size:14px;
    text-align:center;
    line-height:36px;
    background-color:rgba(255,165,0,0.1)
  }
  .bgTranslate:before{
    content:'';    /*必须加上这个*/
    width: 0;
    height: 0;
    position:absolute;
    top:-10px;
    right:30px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid rgba(7,17,27,0.6);
    z-index:5;
  }
  .bgTranslate{
    z-index:10;
    position:relative;
    display:flex;
    font-size:14px;
    color:white;
    background-color:rgba(7,17,27,0.6);
    padding:10px;
    border-radius:5px;
  }
  .bgTranslate p{
    flex:1;
    line-height:18px;
  }
  .bgTranslate .icon-close{
    vertical-align:sub;
    flex:0 0 20px;
    width:20px;
    line-height:36px;
    font-size:20px;
  }
</style>
