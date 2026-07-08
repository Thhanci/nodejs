var http=require("http");

function startServer(route,handle){
    var server = http.createServer(function(request,response){
            route(handle,request.url,response)
    })

    server.listen(3000,"127.0.0.1")
    console.log("服务器运行在3000端口上");
}

module.exports ={
    startServer
}