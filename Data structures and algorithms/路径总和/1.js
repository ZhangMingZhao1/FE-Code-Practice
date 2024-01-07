/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum === root.val) return true;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};


var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const queue = [[root, targetSum]];
  while (queue.length) {
    let [node, rest] = queue.shift();
    if (!node.left && !node.right && rest === node.val) {
      return true;
    }
    if (node.left) queue.push([node.left, rest - node.val]);
    if (node.right) queue.push([node.right, rest - node.val]);
  }
  return false;
};
