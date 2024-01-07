// 给定数组【2，3，4，6，7】，target=7 输出数组中和等于目标的所有组合
// 思路：爆搜+剪枝，比穷举法的好处就是如果大于target就不对树向下深搜了 ，
// 注意可以选自己，下一层搜索是=start，如果不能重复，那就是i=start+1



const combinationSum = (candidates, target) => {
    const res = [];
    const dfs = (start, temp, sum) => { // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
      if (sum <= 0) {
        if (sum == 0) {
          res.push(temp.slice()); // temp的拷贝 加入解集
        }
        // 如果大于或者等于 都要结束
        return;   // 结束当前递归
      }
      for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
        temp.push(candidates[i]);          // 选这个数
        dfs(i, temp, sum - candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数
        temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
      }
    };
    dfs(0, [], target); 
    return res;
  
}

console.log(combinationSum([2,3,4,6,7],7))