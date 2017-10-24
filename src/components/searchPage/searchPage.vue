<template>
    <div class="search-wrapper">
      <div class="search-header">
        <span class="search-input">
          <span class="location-wrapper">
            {{choseLocation}}
            <i class="icon-more_unfold">
            </i>
          </span>
          <input id="searchContent" type="text" placeholder="请输入职位或公司">
        </span>
        <span @click="hidePage" class="width-50">取消</span>
      </div>
      <div class="body-content">
        <ul>
          <li class="content-item">
            <p class="title">
              <span class="hot">hot</span>
              <span class="hot-text">热门职位</span>
            </p>
            <span v-for="job in hot.hotJob" class="hotChose">
              {{job}}
            </span>
          </li>
          <li class="content-item">
            <p class="title">
              <span class="hot">hot</span>
              <span class="hot-text">热门公司</span>
            </p>
            <span v-for="company in hot.hotCompany" class="hotChose">
              {{company}}
            </span>
          </li>
          <li>
            <p class="title">
              <span class="hot-text">最近搜索</span>
            </p>
            <ul>
              <li v-for="historySearch in getHistory" class="history-item">
                <i class="icon-search"></i>
                <span class="history-text">{{historySearch}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-show="getHistory.length>0" class="clear history-text" @click="clearHistory">
        清除搜索记录
      </div>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
          return{
              historySearch:[],
              hot:{},
          }
        },
        computed:{
          getHistory(){
              return ["会计助理","腾讯"]
          }
        },
        props:{
          choseLocation:{
              type:String,
              default:''
          }
        },
        created(){
          axios.get('/api/get/hotSearch').then((response) =>{
            this.hot = response.data.data;
          })
        },
        methods:{
            clearHistory(){

            },
            hidePage(){
              this.$router.go(-1);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-wrapper{
    transition:all 0.2s linear;
    background-color:#eee;
    width:100%;
    height:100%;
    z-index:1000;
    position:absolute;
    top:0;
    left:0;
  }
  .search-header{
    box-sizing:border-box;
    padding:8px 10px;
    background-color:#6ADBCF;
    height:48px;
    line-height:48px;
    display:flex;
  }
  .search-input{
    flex:1;
    line-height:28px;
    box-sizing:border-box;
    border-radius:20px;
    color:#6ADBCF;
    background-color:#fff;
    font-size:10px;
    padding:0 15px;
  }
  .hot{
    font-size:6px;
    background-color:red;
    color:#fff;
    padding:2px;
    border-radius:3px;
  }
  input{
    border:none;
    outline:none;
  }
  .width-50{
    line-height:32px;
    text-align:center;
    flex:0 0 50px;
    width:50px;
    color:#fff;
  }
  .location-wrapper{
    border-right:1px solid #eee;
    padding-right:5px;
  }
  .icon-more_unfold{
    vertical-align: middle;
  }
  .hotChose{
    border:1px solid #ccc;
    color:rgba(7,17,27,0.7);
    border-radius:5px;
    padding:5px;
    font-size:10px;
    background-color:#fff;
    display:inline-block;
    margin:0 5px 5px 0;
  }
  .body-content{
    box-sizing:border-box;
    padding:0 10px;
  }
  .title{
    margin:15px 0;
  }
  .content-item{
    border-bottom:1px solid rgba(204,204,204,0.3);
    padding-bottom:10px;
  }
  .history-item{
    border-bottom:1px solid rgba(204,204,204,0.3);
    padding:10px 0;
  }
  .history-item:first-child{
    padding-top:0 ! important;
  }
  .clear{
    text-align:center;
    margin-top:10px;
  }
  .hot-text{
    font-size:14px;
    font-weight:500;
  }
  .history-text{
    font-size:12px;
    color:rgba(7,17,27,0.5);
  }
</style>
