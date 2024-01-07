// 给定数组【2，3，4，6，7】，target=7 输出数组中和等于目标的所有组合
// 思路：爆搜+剪枝，比穷举法的好处就是如果大于target就不对树向下深搜了 ，
// 注意可以选自己，下一层搜索是=start，如果不能重复，那就是i=start+1

function outputAns(arr,target) {
  let res = [];
  const dfs = (sum, start, tmp)=>{
    // 这里判断不能放在下面for里面，因为要return的是递归
    if(sum===target) {
      res.push(tmp.slice())
      return;
    }
    for(let i = start; i < arr.length; i++) {
      // 在这判断就不用在上面退出递归条件处判断，如果这里没有就要在上面判断是否大于然后return
      if(arr[i] + sum <= target) {
        tmp.push(arr[i]);
        dfs(arr[i]+sum, i,tmp);
        tmp.pop();
      }
    }
  }
  dfs(0,0,[])
  return res;
}

console.log(outputAns([2,3,4,6,7],7))