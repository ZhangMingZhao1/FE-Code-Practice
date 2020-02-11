//实现mergePromise函数，把传进去的数组顺序先后执行， //并且把返回的数据先后放到数组data中 
const timeout = ms => new Promise((resolve, reject) => { setTimeout(() => { resolve(); }, ms); });
const ajax1 = () => timeout(2000).then(() => { console.log('1'); return 1; }); 
const ajax2 = () => timeout(1000).then(() => { console.log('2'); return 2; }); 
const ajax3 = () => timeout(2000).then(() => { console.log('3'); return 3; });
const mergePromise = ajaxArray => { // 在这里实现你的代码 
    var data = [];
    var sequence = Promise.resolve(); 
    ajaxArray.forEach(function (item) { 
        sequence = sequence.then(item).then(function (res) { 
            data.push(res); 
            return data; 
        });
     }) 
     return sequence;
}; 
mergePromise([ajax1, ajax2, ajax3])
    .then(data => { console.log('done'); console.log(data)});
    // data 为 [1, 2, 3] }); // 分别输出 // 1 // 2 // 3 // done // [1, 2, 3]