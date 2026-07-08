// 插件：JSONView
var http = require("http");
var data = require("./data.json")
var fs =require("fs");

function startServer(){
    var server = http.createServer(function(request,res){  //request response
        console.log(request.url);

        if(request.url==="/" || request.url=== "/home"){
            res.writeHead(200,{"Content-Type":'text/html'})
            fs.createReadStream(__dirname+"/home.html","utf-8").pipe(res)
        }
        else if(request.url === "/api/user"){
            res.writeHead(200,{"content-type":"application/json"})
            res.end(JSON.stringify(data));
        }
        else{
            res.writeHead(404,{"content-type":'text/html'});
            fs.createReadStream(__dirname+"/404.html",'utf-8').pipe(res)
        }

    })

    server.listen(3000,"127.0.0.1");//监听 启动服务器
    console.log("服务器运行在3000端口上");
}

module.exports = {
    startServer
}

