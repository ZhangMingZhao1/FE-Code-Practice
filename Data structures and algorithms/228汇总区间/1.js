/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    let ans = [];
    // console.log(1);
    let len = nums.length;
    if(len===1) return [nums[0].toString()];
    if(len===0) return [];
    let start = nums[0],tmp = 1;
    for(let i = 1; i < len; i++) {
        let next = nums[i];
        // console.log('i',i);
        if(next-start===tmp) {
            tmp++;
            if(i===len-1) ans.push(`${start}->${nums[i]}`)
            continue
        }
        else {
            console.log(`start,next,tmp`,start,next,tmp);
            if(tmp===1) ans.push(`${start}`)
            else ans.push(`${start}->${nums[i-1]}`)
            start = next;
            tmp = 1;
            // console.log(i)
            // 最后一个单独元素的情况
            if(i===len-1) ans.push(`${start}`);
        }
    }
    return ans;
};

console.log(summaryRanges([-1]))