// //01
// var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt");
// myReadStream.setEncoding("utf-8");
// // var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf-8");


// var data="";

// myReadStream.on("data",function(chunk){
//     data+=chunk;
//     // console.log(chunk);
//     //还没有读取完毕
// })

// myReadStream.on("end",function(){
//     console.log(data);
// })


// // 02
// var fs=require("fs");

// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf-8");
// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt");

// var data = ""
// myReadStream.on('data',function(chunk){
//     myWriteStream.write(chunk)
// })

// myReadStream.on("end",function(){
//     console.log("读取完成");
// })




// //03
// var fs = require("fs");
// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt",{flags:'a'});

// var myData ="Hello Node";
// myWriteStream.write(myData);
// myWriteStream.end();//用来结束写入流，告诉 Node.js：数据已经全部写完了，可以关闭文件了。
// myWriteStream.on("finish",function(){
//     console.log("写入完成");
// })



// //04
// var fs= require("fs");

// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf-8");
// // var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt");
// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt",{flags:'a'});


// myReadStream.pipe(myWriteStream);


//05
// 压缩
// var crypto = require('crypto');
// var fs = require('fs');
// var zlib = require('zlib');

// var password = new Buffer(process.env.PASS || 'password');
// var encryptStream = crypto.createCipher('aes-256-cbc', password);

// var gzip = zlib.createGzip();
// var readStream = fs.createReadStream(__dirname + '/readMe.txt'); // current file
// var writeStream = fs.createWriteStream(__dirname + '/readMe.gz');

// readStream // reads current file
//     .pipe(encryptStream) // encrypts
//     .pipe(gzip) // compresses
//     .pipe(writeStream) // writes to out file
//     .on('finish', function () { // all done
//     console.log('done');
// });

// //05 
// //压缩-window
// //npm install archiver(用不了，不用装)
// // npm install adm-zip
// var fs = require('fs');
// var AdmZip = require('adm-zip');

// // 读取文件
// var data = fs.readFileSync(__dirname + '/readMe.txt');

// // 创建 zip
// var zip = new AdmZip();
// zip.addFile('readMe.txt', data);
// zip.writeZip(__dirname + '/readMe.zip');

// console.log('压缩完成！生成 readMe.zip');




// //06解压
// // 解压
// var crypto = require('crypto');
// var fs = require('fs');
// var zlib = require('zlib');

// var password = new Buffer(process.env.PASS || 'password');
// var decryptStream = crypto.createDecipher('aes-256-cbc', password);

// var gzip = zlib.createGunzip();
// var readStream = fs.createReadStream(__dirname + '/out.gz');

// readStream // reads current file
//     .pipe(gzip) // uncompresses
//     .pipe(decryptStream) // decrypts
//     .pipe(process.stdin) // writes to terminal
//     .on('finish', function () { // finished
//     console.log('done');
// });

// //06解压-window
var fs = require('fs');
var AdmZip = require('adm-zip');

// 读取 zip
var zip = new AdmZip(__dirname + '/readMe.zip');
var data = zip.readFile('readMe.txt');

if (data) {
    // 写入文件
    fs.writeFileSync(__dirname + '/output.txt', data);
    console.log('解压完成！生成 output.txt');
    console.log('内容：');
    console.log(data.toString('utf8'));
} else {
    console.log('错误：readMe.zip 中没有 readMe.txt');
}















// on("事件名", 回调函数)


// 方法	作用	示例
// on	监听事件（每次触发都执行）	emitter.on('data', fn)
// once	监听事件（只执行一次）	emitter.once('data', fn)
// emit	触发事件	emitter.emit('data', chunk)
// removeListener	移除监听器	emitter.removeListener('data', fn)
// off	移除监听器（同 removeListener）	emitter.off('data', fn)
// removeAllListeners	移除所有监听器	emitter.removeAllListeners('data')
// listeners	查看所有监听器	emitter.listeners('data')



// // 这些都是字符串（事件名）
// 'data'
// 'end'
// 'error'
// 'finish'
// 'close'
// 'drain'
// 'pipe'

// 'end'、'data' 这些不是 JavaScript 关键字，也不是你自己定义的变量。它们是 Node.js 内置的事件名称（字符串），由 Node.js 预先定义好，你用 .on() 去监听它们。
// myReadStream.on('end', function() {}) 的意思就是：当 myReadStream 触发 'end' 事件时，就执行这个回调函数。



// flags	含义	说明
// 'w'	写入	覆盖（默认），文件不存在则创建
// 'a'	追加	追加，文件不存在则创建
// 'r'	读取	读取文件
// 'w+'	读写	覆盖读写
// 'a+'	读写追加	追加+读取



/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、流（Stream）
 *    数据分段传输，不一次性加载到内存
 *    适合处理大文件（视频、日志等）
 * 
 *    类型：
 *    可读流：fs.createReadStream()
 *    可写流：fs.createWriteStream()
 *    双工流：可读可写
 * 
 *    常用事件：
 *    'data'   → 有新数据块到达
 *    'end'    → 数据全部读完了（可读流）
 *    'finish' → 数据全部写完了（可写流）
 *    'error'  → 出错
 * 
 * 二、管道（pipe）
 *    把读流接到写流，数据自动传输
 *    readStream.pipe(writeStream)
 * 
 *    可以链式调用：
 *    readStream.pipe(encrypt).pipe(gzip).pipe(writeStream)
 * 
 * 三、fs 流操作
 *    createReadStream(path, options)
 *    createWriteStream(path, options)
 * 
 *    options.flags：
 *    'w'   → 覆盖（默认）
 *    'a'   → 追加
 *    'wx'  → 覆盖 + 文件存在报错
 *    'ax'  → 追加 + 文件存在报错
 * 
 *    encoding 参数：
 *    readStream 支持简写：'utf8'
 *    writeStream 不支持简写，必须用对象：{ encoding: 'utf8' }
 * 
 * 四、压缩与解压
 *    .gz（Gzip）：Linux 常用，压缩单个文件
 *    .zip：通用格式，可压缩多个文件
 * 
 *    内置库 zlib → .gz
 *    zlib.createGzip()    压缩
 *    zlib.createGunzip()  解压
 * 
 *    外部库 adm-zip → .zip
 *    new AdmZip()
 *    zip.addFile('名', 数据)   添加文件
 *    zip.readFile('名')        读取文件
 *    zip.writeZip('路径')      保存
 * 
 * 五、加密与解密
 *    crypto 模块
 *    createCipheriv('算法', key, iv)   加密
 *    createDecipheriv('算法', key, iv) 解密
 *    key 需 32 字节：crypto.scryptSync(password, 'salt', 32)
 *    iv 需 16 字节：crypto.randomBytes(16)
 * 
 *    注意：加密和解密必须用相同的 key 和 iv
 * 
 * 六、路径
 *    __dirname    当前文件所在目录（绝对路径）
 *    __filename   当前文件的完整路径
 *    process.cwd() 执行命令时的目录
 * 
 *    推荐用 path.join(__dirname, 'file.txt')
 * 
 * 七、流的事件监听
 *    readStream.on('data', (chunk) => {})
 *    readStream.on('end', () => {})
 *    writeStream.on('finish', () => {})
 *    readStream.on('error', (err) => {})
 * 
 * 八、加密+压缩+解压完整流程
 *    加密压缩：
 *    原始文件 → 加密 → 压缩 → .zip（含 IV）
 * 
 *    解密解压：
 *    .zip → 解压 → 解密 → 原始文件
 * 
 * ============================================================
 * 常用英文缩写
 *    fs = File System（文件系统）
 *    os = Operating System（操作系统）
 *    path = Path（路径）
 *    crypto = Cryptography（加密）
 *    zlib = 压缩库名称
 *    gz = Gzip（压缩格式）
 *    exe = Executable（可执行文件）
 *    cb = callback（回调函数）
 *    iv = Initialization Vector（初始化向量）
 * ============================================================
 */ 