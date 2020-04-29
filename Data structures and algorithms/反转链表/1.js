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
