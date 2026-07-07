var fs = require("fs");


//Sync
// var readMe = fs.readFileSync("./readMe.txt","utf-8");

// // console.log(readMe); 
// fs.writeFileSync("writeMe.txt",readMe)
// console.log(readMe);

// console.log("finished");


//Async
// var readMe = fs.readFile("./readMe.txt","utf8",function(err,data){
//     console.log(data);
// })

// var waitTill = new Date(new Date().getTime()+4*1000);
// while (waitTill>new Date()){}

// console.log("finished");

var readMe = fs.readFile("./readMe.txt","utf8",function(err,data){
    fs.writeFile("writeMe.txt",data,function(){
            console.log("读取数据完成")
    })
})

/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、路径写法
 *    ./  → 当前目录
 *    ../ → 上级目录
 *    ../../ → 上上级目录
 *    不加前缀 → node_modules 查找
 * 
 * 二、fs.readFile 回调参数
 *    function(err, data)
 *    err  → 错误对象（成功时为 null）
 *    data → 文件内容
 * 
 *    参数名可自定义，位置固定：
 *    第1个参数：永远是错误
 *    第2个参数：成功返回的数据
 * 
 *    可能有第3、4个参数（特定函数）
 *    exec('ls', (err, stdout, stderr) => {})
 * 
 * 三、回调函数
 *    把函数作为参数传给另一个函数
 *    由调用者在合适时机执行
 *    用于处理异步操作结果
 * 
 * 四、防抖（Debounce）
 *    等用户停止操作后再执行
 *    场景：搜索框输入、窗口resize
 * 
 * 五、os 模块
 *    全称：Operating System（操作系统）
 *    获取系统信息：平台、CPU、内存等
 * 
 * 六、fs.writeFile
 *    回调只有 err 一个参数
 *    fs.writeFile('file.txt', data, (err) => {})
 * 
 * ============================================================
 * 常用模块全称
 *    fs = File System（文件系统）
 *    os = Operating System（操作系统）
 *    path = Path（路径）
 *    http = HyperText Transfer Protocol
 *    util = Utilities（工具）
 * ============================================================
 */ 