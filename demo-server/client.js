/**
 * Created by Administrator on 2017/9/17.
 */
var http = require('http');
http.get('http://www.imooc.com/u/loading',(res) =>{
    var data ='';
    res.on("data",(chunk) =>{
      data+=chunk;
    })
    res.on("end",()=>{
      var result = data;
      console.log(JSON.parse(result));
    })
});
