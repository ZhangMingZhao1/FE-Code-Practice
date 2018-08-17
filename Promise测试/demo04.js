/*
let p = new Promise((resolve,reject) => {
        resolve('success');
});

p.then(result => {
    console.log(result);
});
*/

let p = new Promise((resolve,reject) => {
    reject('error');
});

let resultP = p.then(null,result => {
    console.log(result);
    return 123;
});

// console.log(resultP);
resultP.then(tmp => {
    console.log(tmp);
})