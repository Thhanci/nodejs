var http=require("http");
var url=require("url");
var querystring =require("querystring");

function startServer(route,handle){
    var server = http.createServer(function(request,response){
        var pathname=url.parse(request.url).pathname
        //post
        var data=[];
        request.on("error",function(err){
            console.log(err);
        }).on("data",function(chunk){
            data.push(chunk)
        }).on("end",function(){
            // console.log(request.method);
            if(request.method==="POST"){
                data=Buffer.concat(data).toString();
                console.log(data);
                route(handle,pathname,response,querystring.parse(data))
            }
            else{
                var params=url.parse(request.url,true).query;
                route(handle,pathname,response,params)
            }
        })
        
        
        
        
        // //get
        // // console.log(url.parse(request.url).pathname);  
        // console.log(pathname,request.url) 
        // var params=url.parse(request.url,true).query;
        // route(handle,pathname,response,params)
        // // console.log(params);
    })

    server.listen(3000,"127.0.0.1")
    console.log("服务器运行在3000端口上");
}

module.exports ={
    startServer
}