// 其实就是求多叉树最大深度

const getDepth = (node) => {
  if (!node.children || node.children.length === 0) {
    return 1;
  }
  const maxChildrenDepth = [...node.children].map((v) => getDepth(v));
  return 1 + Math.max(...maxChildrenDepth);
};
const body = document.querySelector("body");

console.log(getDepth(body));
