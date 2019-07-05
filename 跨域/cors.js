/* 原生 */
var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容
//前端设置是否带cookie
xhr.withCredentials = true;
xhr.open('post', 'http://www.domain2.com:8080/login', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('user=admin');

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    alert(xhr.responseText);
  }
}

/* jquery */
$.ajax({
  ...
  xhrFields: {
    withCredentials: true //前端设置是否带cookie
  },
  crossDomain: true, //会让请求头中包含跨域的额外信息，但不会含cookie
})

/* postMessage(data,origin) 方法接收两个参数 */
/* 
  a.html
  <iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none"></iframe>
*/
var iframe = document.getElementById("iframe");
iframe.onload = function () {
  var data = {
    name: 'aym'
  }
  iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com');
}
window.addEventListener("message", function (e) {
  alert('data from domain2--->' + e.data);
}, false);
/* b.html */
window.addEventListener('message', function (e) {
  alert("data from domain1 --->" + e.data);

  var data = JSON.parse(e.data);
  if (data) {
    data.number = 16;

    //处理后再发回domain1
    window.parent.postMessage(JSON.stringify(data), 'http://www.damain1.com');
  }
}, false)