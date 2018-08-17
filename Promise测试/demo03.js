let p = new Promise((resolve,reject) => {
    //...
    let random = Math.random();//小于1大于0
    if(random > 0.4) {
        resolve('random > 0.4');
    }else {
        reject('random <= 0.4');
    }
});

p.then(result => {
    console.log('resolve',result);
}, result => {
    console.log('reject',result);
});

