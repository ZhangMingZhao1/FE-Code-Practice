// 思路：设置一个flag，表明区间的开始，然后控制start和next根据区间成立和不成立模拟情况即可。注意最后一位做特殊判断或者补0处理

// 下面其实不必转成时间。。反正最后都要格式化，记录区间下标位置即可。比如[111000],记录为0,3 即可
function timeBitmapToRanges(timeStr) {
    timeStr+="0"
    let ans = [];
    let len = timeStr.length;
    let start = 0,next = 0;
    let flag = false;
    for(let i = 0; i < len; i++) {
        if(timeStr[i]==="1") {
            // 如果不补0，那么就要对最后一个做处理。
            // if(i===len-1) {
            //     if(flag) {
            //         next+=30;
            //         ans.push(`${start}:${next}`)
            //     }else {
            //         next+=30;
            //         ans.push(`${next}:${next}`)
            //     }
            // }
            if(!flag) {
                start = i*30;
                flag = true;
            }
            next+=30;
            continue;
        }else {
            if(flag===true) {
                ans.push(`${start}:${next}`)
                flag = false;
                start=next;
            }else {
                next = start = (i+1) * 30
            }
        }
    }
    return formatTime(ans);
}
function formatTime(arr) {
    return arr.map(item=>{
        const se = item.split(":");
        const s = se[0], e = se[1];
        let start , end;
        if(s==="0") start = "00:00~";
        else {
            let a = Math.floor(+s/60).toString().padStart(2,"0");
            let b = (+s%60).toString().padStart(2,"0");
            start = `${a}:${b}~`
        } 
        let a = Math.floor(+e/60).toString().padStart(2,"0");
        let b = (+e%60).toString().padStart(2,"0");
        
        end = `${a}:${b}`
        return start+end;
    })
}
console.log(timeBitmapToRanges("011000000000000000000000000000000100000000000001"))