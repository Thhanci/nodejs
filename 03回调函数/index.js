// function sayHi(){
//     console.log("hi");
// }

// var sayBye =function(name){
//     console.log(name+":bye");
// }

// // sayHi();
// // sayBye("iwen");

// function callFunction(callback,name){
//     callback(name)
// }

// callFunction(sayBye,"iwen")


// function callFunction(callback,name){
//     callback(name)
// }

// callFunction(function(name){
//     console.log(name+":bye")
// },"frank")



function callFunction(callback,name){
    callback(name)
}
callFunction(function(name){
    console.log(name+":bye")
},"frank")

/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、回调函数（Callback）
 *    把函数作为参数传给另一个函数
 *    由另一个函数在合适的时机调用执行
 * 
 *    回调 vs 直接调用：
 *    goodbye()              // 直接调用：立即执行
 *    callFunction(goodbye)  // 回调调用：由函数决定何时执行
 * 
 *    用途：异步操作（读文件、发请求、定时器）
 * 
 * 二、var vs let
 *    var  → ES5，函数作用域，可重复声明，不推荐
 *    let  → ES6，块级作用域，不可重复声明，推荐
 *    const → ES6，块级作用域，值不可变，优先用
 * 
 *    现在写代码：优先 const，需要改值用 let，不用 var
 * 
 * 三、cd 命令
 *    cd .   → 当前目录（原地不动）
 *    cd ..  → 上级目录（后退一级）
 *    cd ../.. → 上上级目录（后退两级）
 * 
 * 四、查看文件列表
 *    终端是 PowerShell：ls -Force（显示隐藏文件）
 *    终端是 Git Bash：ls -la
 * 
 * 五、VS Code 快捷键
 *    注释/取消注释：Ctrl + /
 *    打开终端：Ctrl + ~
 * 
 * ============================================================
 */ 