
//  var minDepth = function (root) {
//   const queue = [];
//   let ans = 0;
//   const visitLoop = (node) => {
//     if (node) {
//       if (node.left === null && node.right === null)
//         return ans;
//       if (node.left) {
//         queue.unshift(node.left);
//       }
//       if (node.right) {
//         queue.unshift(node.right);
//       }
//       ans++;
//       visitLoop(queue.pop(),ans);
//     }
//   };
//   return visitLoop(root,0);
// }

var minDepth = function (root) { 
  if (!root) return 0;
  const queue = [[root, 1]];
  while (queue.length) {
    let [node,depth] = queue.shift();
    if (!node.left && !node.right) {
      return depth;
    }
    if (node.left) queue.push([node.left, depth+1]);
    if (node.right) queue.push([node.right, depth+1]);
  }
}



