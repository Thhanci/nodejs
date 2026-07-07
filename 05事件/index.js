// // nodejs中文网
// var events = require("events");

// //创建事件对象
// var myEmitter = new events.EventEmitter();

// //设置事件监听器
// myEmitter.on("someEvent",function(message){
//     console.log(message);
// })

// //触发事件
// myEmitter.emit("someEvent","the event was emitted");

var events = require("events");
var util = require("util")

// var Person = function(name){
//     this.name = name;
// }

// util.inherits(Person,events.EventEmitter);

// var xiaoming = new Person("xiaoming");
// var lilei = new Person("lilei");

// var person = [xiaoming,lilei];

// person.forEach(function(item){
//     item.on("speak",function(message){
//         console.log(item.name+" say: "+message);
//     })
// })

// xiaoming.emit("speak","hi")
// lilei.emit("speak","my name is lilei")

// console.log(typeof "speak") 

const EventEmitter = require('events');

class Person extends EventEmitter{
    constructor(name){
        super();
        this.name=name;
    }
}

var xiaoming = new Person("xiaoming");
var lilei = new Person("lilei");

var person = [xiaoming,lilei];

person.forEach(function(item){
    item.on("speak",function(message){
        console.log(item.name+" say: "+message);
    })
})

xiaoming.emit("speak","hi")
lilei.emit("speak","my name is lilei")



/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、EventEmitter（事件发射器）
 *    Node.js 事件驱动的核心类
 *    用法：on 监听事件，emit 触发事件
 *    const EventEmitter = require('events')
 *    const emitter = new EventEmitter()
 *    emitter.on('事件名', () => {})
 *    emitter.emit('事件名')
 * 
 *    事件名是字符串，回调是函数
 * 
 * 二、util.inherits（继承）
 *    让一个构造函数继承另一个
 *    util.inherits(子, 父)
 *    现在推荐用 ES6 class + extends
 * 
 * 三、express（Web 框架）
 *    Node.js 最流行的 Web 框架
 *    处理 HTTP 请求，搭建 API
 *    npm install express
 * 
 *    const app = express()
 *    app.get('/', (req, res) => res.send('Hello'))
 *    app.listen(3000)
 * 
 * 四、fs（文件系统）
 *    全称：File System
 *    用于读写文件、操作目录
 *    const fs = require('fs')
 *    fs.readFile('file.txt', 'utf8', callback)
 * 
 * 五、.forEach()
 *    数组遍历方法
 *    对每个元素执行一次函数
 *    arr.forEach(item => { ... })
 * 
 * 六、函数声明 vs 函数表达式
 *    函数声明可提前调用（提升）
 *    函数表达式必须定义后调用
 *    两者类型都是 function
 * 
 * 七、super 和 extends
 *    extends：继承父类
 *    super：调用父类构造函数或方法
 * 
 * ============================================================
 * 常用模块全称
 *    fs = File System（文件系统）
 *    util = Utilities（工具）
 *    events = Events（事件）
 *    http = HyperText Transfer Protocol
 *    path = Path（路径）
 * ============================================================
 */ 











// 是的，这里的 function(message) { ... } 是一个函数（匿名函数），它在 "speak" 事件被触发时执行。
// // 函数名：标识一个函数
// function speak() { ... }     // speak 是函数名
// const speak = function() {}  // speak 也是函数名

// // 事件名：标识一个事件（只是字符串）
// item.on("speak", function() {})  // "speak" 是字符串
// //       ↑
// //   用来标记这个事件叫什么名字


// // 写法1：匿名函数
// item.on("speak", function(message) {
//   console.log("说：" + message)
// })

// // 写法2：箭头函数
// item.on("speak", (message) => {
//   console.log("说：" + message)
// })

// // 写法3：先定义再传入
// function sayMessage(message) {
//   console.log("说：" + message)
// }
// item.on("speak", sayMessage)  // sayMessage 是函数