let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('error');
    },1000);
});

async function demo(params) {
    // try {
        let result = name;
    // }catch(e) {
    //     console.log(e);
    // }
}

demo().catch((err) => {
    console.log(err);
});