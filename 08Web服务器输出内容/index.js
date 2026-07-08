// 插件：JSONView
var http = require("http");
var fs =require("fs");

var server = http.createServer(function(req,res){  //request response
    console.log("request");
    res.writeHead(200,{
        //纯文本、HTML、JSON
        // "Content-Type":"text/plain"
        // "content-type":"text/html"
        "content-type":"application/json"
    })

    // res.end("Hello from out application")

    // var myReadStream = fs.createReadStream(__dirname+"/index.html","utf-8")
    // myReadStream.pipe(res)

    var obj={
        name:"iwen",
        age:20
    }
    res.end(JSON.stringify(obj));
})

server.listen(3000,"127.0.0.1");//监听 启动服务器
console.log("服务器运行在3000端口上");

/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、HTTP 服务器
 *    http.createServer() → 创建服务器
 *    server.listen(端口, IP) → 启动服务器
 * 
 *    例子：
 *    server.listen(3000, "127.0.0.1")
 *    3000 → 端口号（访问入口）
 *    127.0.0.1 → IP地址（本机，只有自己能访问）
 * 
 * 二、IP 地址区别
 *    127.0.0.1 → 只有本机能访问
 *    0.0.0.0 → 所有设备都能访问（同一网络）
 *    :: → IPv6 所有设备
 * 
 * 三、res.writeHead()
 *    设置响应头（状态码 + Content-Type）
 *    res.writeHead(200, { "Content-Type": "text/html" })
 * 
 *    Content-Type 常见值：
 *    text/plain    → 纯文本
 *    text/html     → HTML 网页
 *    application/json → JSON 数据
 * 
 *    头部名称不区分大小写：Content-Type / content-type 都可以
 * 
 * 四、res.end()
 *    发送响应内容并结束请求
 *    res.end("Hello") → 返回内容
 *    必须有 res.end()，否则浏览器会一直等待
 * 
 * 五、MIME 类型
 *    全称：Multipurpose Internet Mail Extensions
 *    作用：告诉浏览器返回的是什么类型的数据
 * 
 * 六、JSON
 *    数据交换格式，键值对
 *    JSON.stringify(obj) → 对象转 JSON 字符串
 *    JSON.parse(str) → JSON 字符串转对象
 * 
 * 七、服务端 vs 客户端
 *    客户端：浏览器（发起请求）
 *    服务器：运行 Node.js 的电脑（处理请求返回数据）
 * 
 * 八、Node.js 输出 HTML
 *    fs.readFile() 读取 HTML 文件
 *    通过 res.end() 返回给浏览器
 *    不能直接 node index.html 运行
 * 
 * 九、HTTP 请求次数
 *    console.log("request") 的次数 = 浏览器请求次数
 *    不是 TCP 三次握手
 * 
 * 十、计网 5 层
 *    应用层 → 传输层 → 网络层 → 数据链路层 → 物理层
 * 
 * 十一、utf8 vs utf-8
 *    没有区别，写法不同，Node.js 推荐用 'utf8'
 * 
 * ============================================================
 * 常用英文
 *    HTTP = HyperText Transfer Protocol
 *    MIME = Multipurpose Internet Mail Extensions
 *    JSON = JavaScript Object Notation
 *    HTML = HyperText Markup Language
 *    req = request（请求）
 *    res = response（响应）
 *    fs = File System（文件系统）
 *    ip = Internet Protocol（互联网协议）
 * ============================================================
 */ 