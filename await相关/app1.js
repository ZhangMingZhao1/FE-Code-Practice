let promiseDemo = new Promise((resolve, reject) => {
    setTimeout(() => {
        let random = 0.4
        if (random >= 0.5) {
            resolve('success')
        } else {
            reject('failed')
        }   
    }, 1000)
})

async function test() {
    try {
        let result = await promiseDemo;
    } catch (err) {
        console.log('err',err);
    }
    
    // return result  //这里的result是promiseDemo成功状态的值，如果失败了，代码就直接跳到下面的catch了
}

test()