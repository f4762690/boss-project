<template>
  <transition name="bottomToTop">
    <div class="chose-wrapper" v-show="showPage" @click="toHide">
      <div class="header">
        <i class="icon-back"></i>
        <span>选择城市</span>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        data(){
            return {
                showPage:false,
                city:[
                  {

                  }
                ]
            }
        },
        methods:{
            toHide(){
                this.showPage = false;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    height:48px;
    background-color:#6ADBCF;
    color:#fff;
    font-size:20px;
    text-align:center;
  }

</style>
