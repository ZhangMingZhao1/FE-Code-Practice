//用sleep来模仿浏览器的AJAX请求
function sleep(wait) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(wait);
        },wait);
    });
}

let p1 = sleep(500);
let p0 = sleep(2000);

Promise.race([p1,p0]).then(result => {
    console.log(result);
});

let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject('error');
    },1000);
});

Promise.race([p0,p2]).then(result => {
    console.log(result);
}).catch(result => {
    console.log(result);
});