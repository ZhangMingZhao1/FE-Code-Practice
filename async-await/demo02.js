function sleep(wait) {
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(wait);
        },wait);
    });
}

/*
let p1 = sleep(100);
let p2 = sleep(200);
let p =*/

// sleep(100).then(result => {
//     return sleep(result + 100);
// }).then(result02 => {
//     return sleep(result02 + 100);
// }).then(result03 => {
//     console.log(result03);
// })

async function demo() {
    let result01 = await sleep(100);
    //上一个await执行之后才会执行下一句
    let result02 = await sleep(result01 + 100);
    let result03 = await sleep(result02 + 100);
    // console.log(result03);
    return result03;
}

demo().then(result => {
    console.log(result);
});

demo();