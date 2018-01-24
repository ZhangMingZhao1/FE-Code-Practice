/*let p1 = Promise.resolve(123);
let p2 = Promise.resolve('hello');
let p3 = Promise.resolve('success');
let p4 = Promise.reject('error');

// Promise.all([p1,p2,p3]).then(result => {
//     console.log(result);
// });

Promise.all([p1,p2,p4]).then(result => {
    console.log(result);
}).catch(result => {
    console.log(result);
});*/


//用sleep来模仿浏览器的AJAX请求
function sleep(wait) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(wait);
        },wait);
    });
}

let p1 = sleep(500);
let p2 = sleep(500);
let p3 = sleep(1000);

Promise.all([p1,p2,p3]).then(result => {
    console.log(result);
    //.....
    //loading
});