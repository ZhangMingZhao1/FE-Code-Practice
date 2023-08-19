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
 * @return {boolean}
 */
// https://leetcode.cn/problems/symmetric-tree/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-hnjo/
 var isSymmetric = function(root) {
   if (root === null) return true;
   return dfs(root.left, root.right)
   function dfs(left, right) {
     if (left === null && right !== null) return false;
     else if (left !== null && right === null) return false;
     else if (left === null && right === null) return true;
     else if (left.val !== right.val) return false;
     else return dfs(left.left, right.right) && dfs(left.right, right.left)
   }
 };
 var isSymmetric = function(root) {
  if (root === null) return true;
   let q = [];
   q.push(root.left, root.right);
   while (q.length) {
     const l = q.shift(); //出队左节点
     const r = q.shift(); // 出队右节点
     if (l === null && r === null) continue;
     if (l === null || r === null || l.val !== r.val) return false;
     // 外侧对称
     q.push(l.left);
     q.push(r.right);
     //内侧对称
     q.push(l.right);
     q.push(r.left);
   }
   return true;
};