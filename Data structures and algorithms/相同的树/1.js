/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 后根思想
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null && q) return false;
  if (p && (q === null)) return false;
  // 子树和叶子结点的return是递归返回，最外面最上面即真正的根是返回这题的结果两个大树的结果。中间遍历到叶子结点所有只要有false，都会变成false
  if(p.val===q.val)return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  else return false
};
