// 插件：JSONView
var http = require("http");
// var fs =require("fs");
var data = require("./data.json")

function startServer(){
    var server = http.createServer(function(req,res){  //request response
        console.log("request");
        res.writeHead(200,{
            "content-type":"application/json"
        })

        res.end(JSON.stringify(data));
    })

    server.listen(3000,"127.0.0.1");//监听 启动服务器
    console.log("服务器运行在3000端口上");
}

module.exports = {
    startServer
}

