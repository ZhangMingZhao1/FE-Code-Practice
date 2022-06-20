/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let len1 = l1.length,
    len2 = l2.length;
  if (len2 > len1) {
    let tmp = l2;
    l2 = l1;
    l1 = tmp;
  }
  let next = 0;
  for (let i = 0; i < l1.length; i++) {
    if(i>=l2.length) l2.push(0);
    let cur = l1[i] + l2[i] + next;
    if (cur >= 10) {
      l1[i] = cur % 10;
      next = Math.floor(cur / 10);
    }else {
        l1[i] = cur;
        next = 0;
    }
  }
  if(next>0) l1.push(next)
  return l1;
};

console.log(addTwoNumbers([2,4,3]
  ,[5,6,4]));
