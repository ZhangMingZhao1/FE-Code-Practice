function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const getHeight = (root) => {
  // 0 -1 都可以 只要比较出差值
  if (root === null) return 0;
  else {
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  }
};
var isBalanced = function(root) {
  if (root === null) return true;
  return (
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
let root = new TreeNode(1);
root.left = null;
root.right = new TreeNode(2);
root.right.right = new TreeNode(3);

const ret = isBalanced(root);
console.log(ret);
