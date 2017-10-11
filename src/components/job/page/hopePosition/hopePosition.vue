<template>
    <div class="hope-wrapper" v-show="showHope">
      <div class="header">
        <i class="icon-back" @click="back"></i>
        <span class="title">选择职位类型</span>
      </div>
      <div>
      <div class="search">
        <p class="search-content" @click="startSearch" v-show="showSearch">
          <i class="icon-search"></i>
          <span>搜索</span>
        </p>
        <p class="search-content" v-show="showStartSearch">

        </p>
      </div>
      <div class="hope-content">
        <p v-for="position in positions" class="item">
          <span>
            {{position.title}}
          </span>
        </p>
      </div>

      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              showSearch:true,
              showHope:false,
              showStartSearch:false,
              positions:[
                {
                  title:"技术",
                  child:[
                    {
                        name:"后端开发",
                        child:[
                            "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                          "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                        ]
                    }
                    ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
                {
                  title:"技术",
                  child:[
                    {
                      name:"后端开发",
                      child:[
                        "PHP","C++",".NET","Python","C#","C","数据挖掘","Hadoop","Node.js","算法工程师","Golang",
                        "Ruby","推荐算法","自然语言处理","Delphi","数据采集","Erlang","VB","Perl"

                      ]
                    }
                  ]
                },
              ]


            }
        },
        methods:{
            back(){
                this.showHope = false;
            },
            startSearch(){
                this.showSearch = false;
                this.showStartSearch = true;
            },
            toShowHope(){
                this.showHope = true;
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hope-wrapper{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:500;
    background-color:white;
  }
  .header{
    height:48px;
    line-height:48px;
    color:white;
    text-align:center;
    font-size:16px;
    background-color:#6ADBCF;
  }
  .search{
    box-sizing:border-box;
    padding:10px 20px;
    height:48px;
    text-align:center;
    border-bottom:1px solid #eee;
  }
  .search-content{
    padding:5px 0;
    border-radius:5px;
    font-size:10px;
    background-color:#eee;
  }
  .icon-back{
    line-height:48px;
    float:left;
    font-size:20px;
    margin-left:10px;
  }
  .hope-content{
    padding:0 5px;
  }
  .hope-content .item{
    font-size:14px;
    padding:15px 0;
    border-bottom:1px solid #eee;
  }

</style>
