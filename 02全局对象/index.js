// console.log("log:Node");
// console.info("info:信息");
// console.error("error:信息");

// setTimeout(function(){
//     console.log("timer");
// },3000)

// var i=0;
// setInterval(function(){
//     i+=1;
//     console.log(i);
// },1000)

// var time=0;
// var timer=setInterval(function(){
//     time+=2;
//     console.log("timer="+time);
//     if(time>6){
//         clearInterval(timer)
//     }
// },1000)


// var time=0;
// var timer=setInterval(function(){
//     time+=2;
//     console.log(time)
//     if(time>6)
//         clearInterval(timer)
// },1000)



                        //两个下划线
console.log(__dirname); //打印出来当前路径
console.log(__filename); //打印出来包含文件名称


/*
 * ============================================================
 * Node.js 学习笔记（精简版）
 * ============================================================
 * 
 * 一、.gitignore
 *    作用：告诉 Git 哪些文件不上传
 *    位置：必须放在项目根目录（和 .git 同一层）
 *    生效条件：文件必须在 Git 仓库根目录
 *    注意：已跟踪的文件不会忽略，需先 git rm -r --cached
 * 
 * 二、查看文件列表
 *    Windows CMD：dir
 *    Linux/macOS：ls
 *    PowerShell：两者都可（ls/dir 都是 Get-ChildItem 的别名）
 * 
 *    查看当前路径：pwd
 *    进入文件夹：cd 文件夹名
 *    返回上级：cd ..
 * 
 * 三、console 方法
 *    console.log()   → 普通日志（stdout，默认颜色）
 *    console.info()  → 信息日志（同 log）
 *    console.error() → 错误日志（stderr，红色）
 *    console.warn()  → 警告日志（黄色）
 * 
 *    stdout 和 stderr 可分别重定向：
 *    node app.js 1> log.txt 2> error.txt
 * 
 * 四、JSON 文件
 *    JSON = JavaScript Object Notation
 *    轻量级数据交换格式
 *    键必须用双引号、不能有注释
 *    常见文件：package.json、package-lock.json
 * 
 * 五、运行代码
 *    VS Code 终端：Ctrl + ~
 *    运行 Node 文件：node 文件名.js
 *    运行并调试：F5
 *    运行不调试：Ctrl + F5
 * 
 * ============================================================
 */ 