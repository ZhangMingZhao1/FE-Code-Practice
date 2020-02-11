let timeout = function (num, ms) {
    return new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve(num);
        }, ms)
    });
}

let timeout1 = timeout(1, 500);
let timeout2 = timeout(2, 2000);
let timeout3 = timeout(3, 1000);

let myPromise = new Promise(function (resolve,reject) {
   
    let arr = [];
    let timeouts = [timeout1,timeout2,timeout3];
    runIndex(0);
    function runIndex(index){
        timeouts[index].then(data=>{
            console.log(data)
            arr.push(data);
            if(index<timeouts.length-1) {
                console.log('index',index);
                index++;
                runIndex(index);
            }else {
                resolve(arr);
            }
            
        })
    }
});


myPromise.then(data => {
    console.log(data);
    console.log("done!");
})