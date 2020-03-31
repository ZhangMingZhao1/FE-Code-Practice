/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1 && nums[0] <= 0) return nums[0];
  let sum = 0;
  let max = -99999999;
  let cnt = 1;
  for (let i of nums) {
    sum += i;
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) sum = 0;
    cnt++;
  }
  return max;
};
