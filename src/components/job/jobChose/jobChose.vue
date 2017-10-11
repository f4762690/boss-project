<template>
    <div class="jobChose">
      <ul>
        <li @click="chose('recommend')" :class="{activeChose:defaultCommend == 'recommend'}">
          <a>最新<i class="icon-more_unfold"></i>
          </a>
        </li>
        <li @click="chose('location')" :class="{activeChose:defaultCommend == 'location'}">
          <a>深圳<i class="icon-more_unfold" ></i>
          </a>
        </li>
        <li @click="chose('company')" :class="{activeChose: defaultCommend == 'company'}">
          <a>公司<i class="icon-more_unfold"></i>
          </a>
        </li>
        <li @click="chose('condition')" :class="{activeChose: defaultCommend == 'condition'}">
          <a>要求<i class="icon-more_unfold"></i>
          </a>
        </li>
      </ul>
      <comment :is="defaultCommend" v-show="showChose"></comment>
      <div class="bg"  @click="hideBg" v-show="showChose"></div>
    </div>
</template>

<script>
  import recommend from '../components/recommend/recommend.vue';
  import company from '../components/company/company.vue';
  import condition from '../components/condition/condition.vue';
  import location from '../components/location/location.vue';
    export default {
      data(){
        return {
          showChose:false,
          defaultCommend:'recommend'
        }
      },
      methods:{
        hideBg(){
          this.showChose = false;
        },
        chose(content){
          this.showChose = true;
          this.defaultCommend = content;
        }
      },
      components:{
        recommend,company,condition,location
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .jobChose{
      position:absolute;
      top:48px;
      left:0;
      font-size:0;
      width:100%;
      height:30px;
      z-index:100;
      /*padding:0 20px;*/
    }
    .jobChose ul{
      display:flex;
      text-align:center;
      line-height:30px;
      border-bottom:1px solid #eee;
    }
    .jobChose ul li{
      display:inline-block;
      flex:1;
      font-size:14px;
      color:rgba(7,17,27,0.6);
    }
    .jobChose ul li a{
      padding-right:8px;
      border-right:1px solid #eee;
    }
    .jobChose ul li:last-child a{
      padding-right:0 ! important;
      border-right:0 ! important;
    }
    .icon-more_unfold{
      padding-left:2px;
      vertical-align:middle;
      font-size:10px;
    }
    .bg{
      position:fixed;
      left:0;
      z-index:20;
      width:100%;
      height:100%;
      background-color:rgba(0,0,0,0.7);
    }
  .activeChose{
    color:#6ADBCF ! important;
  }
</style>
