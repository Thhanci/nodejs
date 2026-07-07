// var adder=function(a,b){
//     return `this num of the 2 numbers is ${a+b}`;
// }

// console.log(adder(10,20));

var counter=function(arr){
    return "there are "+arr.length+" elements in the array"
}

// module.exports=counter

//默认认为是导出了一个对象{counter,adder}
// module.exports.adder=adder
// module.exports.counter=counter

// module.exports={
//     counter:counter,
//     adder:adder
// }

module.exports={
    counter,
    adder:function(a,b){
    return `this num of the 2 numbers is ${a+b}`;
    }
}

// import utils from "./utils.js"
// export default{}