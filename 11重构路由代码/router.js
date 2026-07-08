var fs = require("fs");

function route(handle,pathname,response){
    if(typeof handle[pathname]==='function'){
        handle[pathname](response)
        // console.log("1"); 
        
    }
    else{
        response.writeHead(404,{"content-type":'text/html'});
        fs.createReadStream(__dirname+"/404.html",'utf-8').pipe(response)
    }
}

module.exports=route;