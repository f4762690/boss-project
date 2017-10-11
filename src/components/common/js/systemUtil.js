/**
 * Created by Administrator on 2017/9/17.
 */
var  checkPlatform =  function checkPlatform(){
  if(/android/i.test(navigator.userAgent)){
    // alert("这是Android平台下浏览器.");//这是Android平台下浏览器
  }
  if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
    // alert("这是iOS平台下浏览器.");//这是iOS平台下浏览器
  }
  if(/Linux/i.test(navigator.userAgent)){
    alert("这是Linux平台下浏览器.");//这是Linux平台下浏览器
  }
  if(/Linux/i.test(navigator.platform)){
    // alert("这是Linux操作系统平台.");//这是Linux操作系统平台
  }
  if(/MicroMessenger/i.test(navigator.userAgent)){
    // alert("这是微信平台下浏览器.");//这是微信平台下浏览器
  }
}
let a = 'testA';
export {checkPlatform,a};
