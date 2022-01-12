var http = require("http");

/* 
  创建服务器
 */
http.createServer(function(request, response){
  /* 
    发送HTTP头部
    Http状态值：200 
    内容类型：text/plain
  */
  response.writeHead(200, {'Content-Type': 'text/plan'});

  response.end("Hello World\n11"); 
}).listen(8888)

console.log(`Server running at http://127.0.0.1:8888`);

// console.log("Hello World");