/* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

 

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

*/


// 暴力循环 N*2 -> 排序+前后指针 nlogn -> 哈希 N
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let ans = {};
    let a,b;
    
    // 每次以当前值为value，减去这个值，查看是否存过即可
    for(let i = 0; i < nums.length; i++) {
        if(ans[target - nums[i] ] !== undefined) {
            return [ans[target - nums[i] ],i];
        }   
        ans[nums[i]] = i;
    }
};

console.log(twoSum([3,2, 4],6))