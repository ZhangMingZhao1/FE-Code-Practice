console.log('代码执行开始');
setTimeout(function(){
    console.log('定时器开始啦')
});

new Promise(function(resolve){
    console.log('马上执行for循环啦');
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve();
    }
}).then(function(){
    console.log('执行then函数啦')
});

console.log('代码执行结束');
/**

 代码执行开始
 马上执行for循环啦
 代码执行结束
 执行then函数啦//第一个宏任务结束
 定时器开始啦

 */
//详情看这个：https://segmentfault.com/a/1190000012806637