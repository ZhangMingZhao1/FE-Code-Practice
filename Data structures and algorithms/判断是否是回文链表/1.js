/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let frontP = head;
  return myCheck(head);
  function myCheck(curNode) {
    if (curNode !== null) {
      // 递归进去出来的时候从最后一个开始
      if (!myCheck(curNode.next)) return false;
      if (curNode.val !== frontP.val) return false;
      frontP = frontP.next;
    }
    return true;
  }
};
