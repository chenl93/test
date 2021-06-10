let data = [];
$.ajax({
  url:"www.baidu.com",
  data:data,
  success:()=>{
    console.log("发送成功");
  }
});
console.log("代码执行结束");