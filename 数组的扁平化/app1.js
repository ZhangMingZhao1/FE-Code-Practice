let arr = [1, [2, [3, 4]]];
//扁平化之后：[1,2,3,4];

function convert() {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res = res.concat(convert[arr[i]]);
        }
        
    } 
}