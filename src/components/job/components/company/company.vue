<template>
    <div class="company-wrapper">
      <div class="company-body">
        <div class="conpany-content">
          <div class="choseBody">
            <h5>融资阶段</h5>
            <div class="chose">
            <span :class="getClass(option1.check)" @click="choseAll(option1)">{{option1.optionName}}</span>
            <span @click=selectedOption(option)
                  :class="getClass(option.check)"
                  v-for ='option in options.option1'>
              {{option.optionName}}
            </span>
            </div>
          </div>
          <div class="choseBody">
            <h5>人员规模</h5>
            <div class="chose">
            <span :class="getClass(option2.check)" @click="choseAll(option2)">{{option2.optionName}}</span>
            <span v-for ='option in options.option2'
                  @click=selectedOption(option)
                  :class="getClass(option.check)">
              {{option.optionName}}
            </span>
            </div>
          </div>
          <div class="choseBody">
            <h5>行业</h5>
            <div class="chose">
            <span :class="getClass(option3.check)" @click="choseAll(option3)">{{option3.optionName}}</span>
            <span v-for ='option in options.option3'
                  @click=selectedOption(option)
                  :class="getClass(option.check)">
              {{option.optionName}}
            </span>
            </div>
          </div>
        </div>
      </div>
      <p class="bottom">
        <span class="reset" @click="resetChose()">重置</span>
        <span class="sure">确定
          <span v-show="getChose>0">({{getChose}})</span>
        </span>
      </p>
    </div>
</template>

<script>
    import {jobData} from '../../../common/js/jobData';
    export default {
      data(){
        return{
          option1:{
            optionName:"全部",
            check:true,
            type:0,
          },
          option2:{
            optionName:"全部",
            check:true,
            type:1,
          },
          option3:{
            optionName:"全部",
            check:true,
            type:2,
          },
          options:jobData
        }

      },
      computed:{
        getChose(){
            let p1L = this.options.option1.filter((item)=>{
                return item.check === true;
            }).length;
            let p2L = this.options.option2.filter((item)=>{
              return item.check === true;
            }).length;
            let p3L = this.options.option3.filter((item)=>{
              return item.check === true;
            }).length;
            return p1L+p2L+p3L;
        }
      },
      methods:{
        resetChose(){
          this.option1.check = true;
          this.option2.check = true;
          this.option3.check = true;
          this.options.option1.forEach((item)=>{
              item.check = false;
          })
          this.options.option2.forEach((item)=>{
            item.check = false;
          })
          this.options.option3.forEach((item)=>{
            item.check = false;
          })
        },
        getClass(check){
          if(check){
            return 'checkClass';
          }
        },
        choseAll(option){
          option.check = true;
          if(option.type===0){
            this.options.option1.forEach((item)=>{
                item.check = false;
            })
          }else if(option.type ===1){
            this.options.option2.forEach((item)=>{
                item.check = false;
            })
          }else if(option.type ===2){
            this.options.option3.forEach((item)=>{
                item.check = false;
            })
          }
        },
        selectedOption(option){
          option.check = !option.check;
          if(option.check){
              if(option.type ===0){
                this.option1.check = false;
              }else if(option.type ===1){
                this.option2.check = false;
              }else{
                this.option3.check = false;
              }
          }
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .company-wrapper{
    background-color:white;
    z-index:100;
  }
  .company-body{
    font-size:0;
    padding:15px;
    max-height:300px;
    overflow:auto;

  }
  h5{
    font-size:14px;
    margin-bottom:10px;
    color:rgba(7,17,27,0.7);
  }
  .chose span{
    display:inline-block;
    margin:0 5px 5px 0;
    font-size:12px;
    line-height:20px;
    border:1px solid #eee;
    padding:3px 5px;
    border-radius:4px;
    color:rgba(7,17,27,0.8);
  }
  .bottom{
    line-height:36px;
    height:36px;
    /*border:1px solid #eee;*/
    font-size:16px;
    display:flex;
  }
  .bottom span{
    flex:1;
    text-align:center;
  }
  .reset{
    border-top:1px solid #eee;
  }
  .sure{
    background-color: #6ADBCF;
    color:#fff;
  }
  .sure:active{
    background-color: #5bb6aa;
  }
  .choseBody{
    margin-bottom:20px;
  }
  .choseBody:last-child{
    margin-bottom:0 ! important;
  }
  .checkClass{
    background-color:#6ADBCF;
    color:#fff ! important;
  }
  .reset:active{
    background-color: #b4b4b4;
  }

</style>
