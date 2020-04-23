/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * 
 尽量从右边开始递归遍历，当深度刚好是数组的下一个元素长度时，push，perfect!
 */
var rightSideView = function (root) {
  if (root === null) return [];
  let res = [];
  dfs(root, 1, res);
  return res;
};
function dfs(node, depth, res) {
  if (node) {
    if (res.length === depth - 1) {
      res.push(node.val);
    }
    dfs(node.right, depth + 1, res);
    dfs(node.left, depth + 1, res);
  }
}
