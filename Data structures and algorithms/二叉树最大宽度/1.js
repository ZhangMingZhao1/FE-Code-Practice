/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  let ans = 0;
  let left = {};
  function dfs(node, depth = 0, pos = 0) {
    if (node) {
      if (left[depth] === undefined) {
        left[depth] = pos;
      }
      ans = Math.max(ans, pos - left[depth] + 1);
      dfs(node.left, depth + 1, pos * 2);
      dfs(node.right, depth + 1, pos * 2 + 1);
    }
  }
  dfs(root);
  if (isNaN(ans)) return 1;
  return ans;
};
let root = new TreeNode(1);
root.left = null;
root.right = new TreeNode(1);
root.right.right = new TreeNode(1);

const ans = widthOfBinaryTree(root);
console.log(ans);
