/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let leftMax = new Array(height.length).fill(-1),
    rightMax = new Array(height.length).fill(-1);
  leftMax[0] = height[0];
  rightMax[0] = height[height.length-1]
  for (let i= 1; i < height.length; i++) {
    // i-1 可以保证下面累加的时候，最小left或者right都大于height[i]
    leftMax[i] = Math.max(height[i], leftMax[i - 1]);
  }
  height.reverse();
  for (let i = 1; i < height.length; i++) {
    rightMax[i] = Math.max(height[i], rightMax[i - 1]);
  }
  rightMax.reverse();
//   console.log(leftMax,rightMax)
  height.reverse();
  let sum = 0;
  height.forEach((v, i) => {
    sum += Math.min(leftMax[i], rightMax[i]) - v;
  });
  return sum;
};

var trap2 = function(height) {
    const n = height.length;
    if (n == 0) {
        return 0;
    }

    const leftMax = new Array(n).fill(0);
    leftMax[0] = height[0];
    for (let i = 1; i < n; ++i) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    const rightMax = new Array(n).fill(0);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; --i) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    console.log(leftMax,rightMax);
    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]));
