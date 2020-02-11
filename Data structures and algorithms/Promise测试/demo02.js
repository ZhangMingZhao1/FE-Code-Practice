let p = new Promise((resolve,reject) => {
    //...
    resolve('success');
    console.log('after resolve');
    reject('error');
});

p.then(result => {
    console.log(result);
});

p.catch(result => {
    console.log(result);
})