// 插件：JSONView
// npm install -g nodemon
// npm run dev
var http = require("http");

var server = http.createServer(function(req,res){  //request response
    console.log("request");
    console.log(req.url);
    res.writeHead(200,{
        "content-type":"application/json"
    })
    var obj={
        name:"iwen",
        age:20,
        sex:"沃尔玛购物袋",
        demo:"hah",
        hello:"hello"
    }
    res.end(JSON.stringify(obj));
})

server.listen(3000,"127.0.0.1");//监听 启动服务器
console.log("服务器运行在3000端口上");
