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
 * @return {number}
 */
/*
陷阱为叶子节点是指没有子节点的节点，如果是只有右子树的树，返回的不是1，根节点不是叶子节点，
所以要分类:
叶子节点的定义是左孩子和右孩子都为 null 时叫做叶子节点
当 root 节点左右孩子都为空时，返回 1
当 root 节点左右孩子有一个为空时，返回不为空的孩子节点的深度
当 root 节点左右孩子都不为空时，返回左右孩子较小深度的节点值

*/
var minDepth = function (root) {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (root.left === null || root.right === null)
    return left + right + 1;
  return Math.min(left, right) + 1;
};
