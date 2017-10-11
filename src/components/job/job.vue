<template>
    <div class="job-wrapper">
       <div class="header">
         <span class="text">web前端</span>
         <div class="icon">
           <i class="icon-add" @click="addLookFor"></i>
           <i class="icon-search" @click="showSearchPage"></i>
         </div>
       </div>
      <div class="job-chose">
        <job-chose></job-chose>
      </div>

       <div class="job-content">
         <ul class="job-items">
           <li v-for="company in companies" class="job-item">
              <p class="title-wrapper">
               <span class="title">{{company.jobName}}</span>
                <span class="price">{{company.salary}}</span>
              </p>
             <div class="clear"></div>
             <div class="content-wrapper">
               <p class="content">
                 {{company.companyName}} {{company.status}}
               </p>
               <p class="content-detail">
                 <i class="icon-location2">
                 </i>
                 <span>
                   {{company.position}}
                 </span>
                 <i class="icon-address-book"></i>
                 <span>
                   {{company.workTime}}年
                 </span>
                 <i class="icon-user-tie">
                 </i>
                 <span>
                   {{company.education}}
                 </span>
               </p>
               <p class="content-footer">
                 <img :src="company.hrSrc" class="hr-img">
                 <span class="footer-text">{{company.hrName}} | {{company.hrJob}}</span>
               </p>
             </div>
           </li>
         </ul>
       </div>
          <look-for ref="lookFor" :userInfo="userInfo"></look-for>
          <search-page ref="searchPageDiv" :choseLocation="choseLocation"></search-page>
    </div>
</template>

<script>
  import jobChose from './jobChose/jobChose.vue';
  import searchPage from './page/searchPage/searchPage.vue';
  import lookFor from './page/lookFor/lookFor.vue';
  import axios from 'axios';
    export default {
      data(){
        return {
          choseLocation:'深圳',
          userInfo:{},
          companies:[
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'http://p1.meituan.net/40.40/mmc/9eb02e99626203347ba0237ac7699f924241.png',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/f5a35f118c5105c3ab3cc5c2f673b7678657.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/7fd99ae347a5e09febce8c3222b69f4225907.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/191a4f1e42790c1fa9ac07296eac5fb072000.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/df037b16b817cb148758d3369a0f765b113302.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/2145ee01329671dbe945e727c374942b137384.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/73332f60a55f06e5a0f780a27ecb11e9116076.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/e41b74fc52430942df3ac40ed1cb962a9064.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/b4976fdc4a8358025a7d0cd5aee57b4335925.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/fa9380def11dd53cfa03839ad17b0f2923817.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/4065a3738658409edca16f8ac97b046926215.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/7a68049581b4b2369262072ab1e8d0b233029.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/d5c776471f85efbff1ca10fe34b74b2840089.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/5412c1dc335a2aa704f2bc16a991699330986.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/30bbdc604e3628a23ac66d9ea2da92f024808.jpg',
              hrJob:'总监',
              education:'本科'
            },
            {
              id:'1001',
              jobName:'web前端',
              companyName:'华海乐盈',
              position:'深圳,南山区,科技园',
              status:'未融资',
              salary:'15-30k',
              workTime:'3-5',
              hrName:'潘校',
              hrSrc:'https://img.meituan.net/40.40/avatar/ca6613fdf19135e39702f985c147b80e27471.jpg',
              hrJob:'总监',
              education:'本科'
            }
          ]
        }
      },
      created(){
        axios.get('/api/get/userInfo').then((res) => {
            this.userInfo = res.data.data;
        })
      },
      methods:{
        addLookFor(){
          this.$refs.lookFor.toShow();
        },
        showSearchPage(){
            this.$refs.searchPageDiv.toShow();
        }
      },
      components:{
        jobChose,lookFor,searchPage
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    font-size:0;
    position:fixed;
    top:0;
    left:0;
    background-color:#6ADBCF;
    width:100%;
    height:48px;
    padding:0 15px;
    box-sizing:border-box;
    opacity:100;
  }
  .header .text{
    vertical-align:top;
    color:#fff;
    font-size:18px;
    line-height:48px;
  }
  .icon{
    float:right;
    color:white;
    display:inline-block;
    font-size:18px;
    line-height:48px;
  }
  .icon-add{
    font-size:20px;
    border-right:1px solid #fff;
    padding-right:10px;
  }
  .icon-search{
    margin-left:5px;
  }
  .job-content{
    position:fixed;
    top:78px;
    left:0;
    font-size:0;
    width:100%;
    height:100%;
    overflow:auto;
  }
  .job-items{
    padding:6px;
    background-color:#eee;
  }
  .job-item{
    background-color:white;
    padding: 10px;
    margin-bottom:6px;
  }
  .title{
    font-size:16px;
  }
  .price{
    color:red;
    font-size:14px;
    float:right;
  }
  .content{
    margin:10px 0;
    font-size:14px;
    color:rgba(7,17,27,0.7);
  }
  .content-wrapper{
  }
  .content-detail{
    margin-bottom:10px;
  }
  .content-detail span{
    font-size:10px;
    margin-right:10px;
  }
  .content-footer{
    border-top:1px solid #eee;
    padding-top:10px;
  }
  .hr-img{
    width:24px;
    height:24px;
    border-radius:50%;
    margin-right:10px;
    vertical-align:middle;
  }
  .footer-text{
    vertical-align:middle;
    color:#6ADBCF;
    font-size:14px;
  }
  .clear{
    clear:both;
  }
  .content-detail i{
    font-size:10px;
    color:rgba(7,17,27,0.7);
    margin-right:5px;
  }
  /*.icon-location2{*/
    /*font-size:10px;*/
    /*color:rgba(7,17,27,0.7);*/
    /*margin-right:5px;*/
  /*}*/
  /*.icon-address-book{*/
    /*font-size:10px;*/
    /*color:rgba(7,17,27,0.7);*/
  /*}*/
  /*.icon-user-tie{*/
    /*font-size:10px;*/
    /*color:rgba(7,17,27,0.7);*/
  /*}*/
</style>
