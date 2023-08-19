const tree = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: {
        data: 8
      },
      right: {
        data: 9
      }
    },
    right: {
      data: 5,
      left: {
        data: 10
      },
      right: {
        data: 11
      }
    }
  },
  right: {
    data: 3,
    left: {
      data: 6,
      left: {
        data: 12
      }
    },
    right: {
      data: 7
    }
  }
};

const tree2 = {
  data: 1,
  left: {
    data: 2,
    left: null,
    right: null
  },
  right: {
    data: 3,
    left: null,
    right: null
  }
};

/**
 * 递归法前序遍历
 */
function dfsPreorderByRcs(tree) {
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      // 先搜索出根节点的值，push进结果列表
      output.push(node.data);
      // 访问左子节点树，左子节点开始作为根节点进行下一轮递归
      visitLoop(node.left);
      // 同上述，递归遍历右子节点
      visitLoop(node.right);
    }
  };
  visitLoop(tree);
  return output;
}

console.log('递归法DFS(前序): ', dfsPreorderByRcs(tree));
// 递归法DFS(前序):  [ 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 7 ]

/**
 * 递归法中序遍历
 */
function dfsInorderByRcs(tree) {
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      if (node.left) {
        visitLoop(node.left);
      }
      output.push(node.data);
      if (node.right) {
        visitLoop(node.right);
      }
    }
  };
  visitLoop(tree);
  return output;
}

console.log('递归法DFS(中序): ', dfsInorderByRcs(tree));
// 递归法DFS(中序):  [ 8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 3, 7 ]

/**
 * 递归法广度优先遍历，模拟栈，后进的先出。和栈相反，先进先出
 */
function bfsByRcs(tree) {
  const queue = [];
  const output = [];
  const visitLoop = (node) => {
    if (node) {
      output.push(node.data);
      if (node.left) {
        // 2进队列 先进先出
        queue.unshift(node.left);
      }
      if (node.right) {
        // 3进队列 后进后出
        queue.unshift(node.right);
      }
      console.log('xxxxx', output);
      visitLoop(queue.pop());
    }
  };
  visitLoop(tree);
  return output;
}
console.log('递归法BFS: ', bfsByRcs(tree));
// 递归法BFS:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

//遍历法
var bfsByWhile = function (root) { 
  if (!root) return;
  const queue = [];
  const output = [];
  queue.push(root);
  while (queue.length) {
    let node = queue.shift();
    output.push(node.data);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  console.log('bfsByWhile',output)
}
bfsByWhile(tree);