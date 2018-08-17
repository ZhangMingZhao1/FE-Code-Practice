let p = new Promise((resolve,reject) => {
    //...
    resolve('success')
});

p.then(result => {
    console.log(result);
});