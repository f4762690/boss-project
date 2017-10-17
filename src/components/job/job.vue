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
       <div class="job-content" ref="contentId">
         <div>
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
  import BScroll from 'better-scroll';
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
        initScroll_(){
           this.contentScroll = new BScroll(this.$refs.contentId,{
               click:true,
           })
        },
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
  @import 'job.css';
</style>
