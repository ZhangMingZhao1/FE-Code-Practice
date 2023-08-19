/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;
  let ans = reverseList(head.next);
  // head.next 是当前节点的下一个节点 head.next.next = head 即把下一个节点的下一个指向发生了转换
  head.next.next = head;
  head.next = null;
  return ans;
};

// 迭代

var reverseList = function (head) {
  let cur = head;
  let pre = null;
  while (cur !== null) {
    let tmpNext = cur.next; // 保存值
    cur.next = pre; // 指向前链
    pre = cur; //保存前链
    cur = tmpNext; // 移动指针
  }
  return pre;
};

let revserList = (head) => {
  let cur = head,
    pre = null
  while (cur !== null) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur
    cur = tmp
  }
  return pre
}

let reversDfs = (head) => {
  if (head === null || head.next === null) return head
  let ans = reversDfs(head.next)
  head.next.next = head
  head.next = null
  return ans
}