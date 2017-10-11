<template>
    <div class="recommend">
      <p class="recommend-text" @click="choseRe('recommend')">
        <span :class="{'active':defaultChose==='recommend'}">推荐</span>
        <i v-if="defaultChose==='recommend'" class="icon-selected"></i>
      </p>
      <p class="recommend-text" @click="choseRe('new')">
        <span :class="{'active':defaultChose==='new'}">最新</span>
        <i v-if="defaultChose==='new'" class="icon-selected"></i>
      </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              defaultChose:'recommend'
            }
        },
        methods:{
            choseRe(item){
              this.defaultChose = item;
              if(item === 'recommend'){

              }else if(item === 'new'){

              }
            }
        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .recommend{
      background-color:white;
      z-index:100;
    }
    .active{
      color:#6ADBCF;
    }
    .recommend-text{
      height:20px;
      vertical-align: middle;
      padding:10px 10px;
      font-size:14px;
    }
    .icon-selected{
      color:#6ADBCF;
      font-size:18px;
      font-weight:100;
      vertical-align: middle;
    }
</style>
