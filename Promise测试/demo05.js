let p = new Promise((resolve,reject) => {
    reject('error');
});

p.catch(result => {
    console.log(result);
})
