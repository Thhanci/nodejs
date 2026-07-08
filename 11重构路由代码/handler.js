var fs=require("fs");
var data = require("./data.js");
// const { json } = require("stream/consumers");

//  /   /home
function home(response){
    response.writeHead(200,{"content-type":'text/html'})
    fs.createReadStream(__dirname+"/home.html","utf-8").pipe(response)
}

//  /user
function user(response){
    response.writeHead(200,{"Content-Type":'application/json'})
    response.end(JSON.stringify(data))
}

// /list
function list(response){
    response.writeHead(200,{"Content-Type":'application/json'})
    var lists =[
        {
            name:"iwen"
        },
        {
            name:"ime"
        }
    ]
    response.end(JSON.stringify(lists))
}

module.exports={
    home,
    user,
    list
}