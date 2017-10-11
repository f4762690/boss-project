/**
 * Created by Administrator on 2017/9/17.
 */
var user = require('./user');
console.log("username:"+user.username);
console.log("username:"+user.sayHello());
var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
var server = http.createServer((req,res) => {
  res.statusCode = 200;
  var urlName = url.parse(req.url).pathname.substring(1);
  fs.readFile(urlName,(err,data)=>{
    if(err){
      res.writeHeader(404,{
        "Content-type":'text/html'
      })
    }else{
      res.writeHeader(200,{
        "Content-type":'text/html'
      })
      res.write(data.toString());
    }
    res.end();
  });
}).listen(3000,'127.0.0.1',() =>{
  console.log("test");
});
