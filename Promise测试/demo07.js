let p = Promise.reject(123);

console.log(p);

p.then(result => {
    console.log(result);
}).catch(result => {
    console.log('catch',result);
})