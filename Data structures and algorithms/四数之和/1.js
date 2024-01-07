/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b); // 注意这里必须要写排序函数 默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。
    const n = nums.length;
    let ans = [];
    // 下标0开始，开始枚举第一个数
    for (let a = 0; a < n - 3; a++) {
        const element = nums[a];
        const x1 = nums[a];
        if (a > 0 && x1 === nums[a-1] ) continue
        if (x1 + nums[a+1] + nums[a+2] + nums[a+3] > target) break
        if (x1 + nums[n-1] + nums[n-2] + nums[n-3] < target) continue
        for (b = a + 1; b < n - 2; b++) {
            const x2 = nums[b];
            if (b > a + 1 && x2 === nums[b - 1]) continue
            if (x1 + x2 + nums[b+1] + nums[b+2] > target) break
            if (x1 + x2 + nums[n-2] + nums[n-1] < target) continue
            // 双指针第三个数和第四个数下标
            let t1 = b + 1, t2 = n - 1
            while(t1 < t2) {
                const s = x1 + x2 + nums[t1] + nums[t2]
                if(s > target) t2--
                else if(s < target) t1++
                else { // s===target
                    ans.push([x1, x2, nums[t1], nums[t2] ])
                    // 跳过重复数字,比如 1 2 3 3 3 4，taget 10, 123 3都是无效的
                    for (t1++; t1<t2 && nums[t1]===nums[t1-1]; t1++);
                    for (t2--; t2>t1 && nums[t2]===nums[t2+1]; t2--);
                }
            }
        }
    }
    return ans;
};