<template>
    <div class="multiChose-wrapper">
      <span v-for="option in options"
            @click="selectedOption(option)"
            :class="getClass(option)">
        option
      </span>
    </div>
</template>

<script>
    export default {
      props:{
        options:{
          type:Array,
          default(){
            return []
          }
        }
      },
      methods:{
        getClass(option){
          if(option.check){
            return 'select-option';
          }
        },
        selectedOption(option){
          if(option.optionName!=='全部'){
            this.options[0].check = false;
            option.check = !option.check;
          }else{
            this.options.forEach((option) =>{
              option.check = false;
            })
          }
        },
        getSelectedOption(){   //获取选中
          return this.options.filter((option) =>{
            return option.check === true;
          })
        }
      }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .select-option{
    background-color:#6ADBCF;
  }

</style>
