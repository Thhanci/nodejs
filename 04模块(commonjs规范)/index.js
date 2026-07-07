// const counter=require("./utils.js")
const utils=require("./utils.js")

console.log(utils.counter([10,20,30]));
console.log(utils.adder(100,200));




/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、$ 在不同场景的含义
 *    JS 中：合法变量名（如 let $ = 10）
 *    模板字符串：${变量} 插值语法
 *    正则表达式：匹配结尾 /abc$/
 *    jQuery：核心函数 $('div')
 *    PHP：变量前缀 $name
 *    Linux/Shell：引用变量 $PATH
 * 
 * 二、jQuery
 *    轻量级 JS 库，简化 DOM 操作
 *    核心：$ 函数
 *    写法：$('#id').hide()
 *    现状：老项目在用，新项目用 Vue/React 替代
 * 
 * 三、require
 *    Node.js 内置函数，用于加载模块
 *    加载内置模块：require('fs')
 *    加载第三方包：require('axios')
 *    加载本地文件：require('./a.js')
 * 
 *    require vs import：
 *    require → Node.js 同步加载（默认）
 *    import → ES6 异步加载（Vue/React 项目用）
 * 
 * 四、回调函数
 *    把函数作为参数传给另一个函数
 *    由另一个函数决定何时执行
 *    用途：异步操作（读文件、发请求、定时器）
 * 
 * 五、var vs let vs const
 *    var   → 老写法，函数作用域，不推荐
 *    let   → 新写法，块级作用域（值会变时用）
 *    const → 新写法，块级作用域（值不变时用，优先）
 * 
 * ============================================================
 */ 
