 function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
   }
function ArrToList(l1,l2) {
  let a1 = new ListNode(l1[0]);
  let a2 = new ListNode(l2[0]);
  let head1 = a1,head2 = a2;
 
  l1.shift();
  l2.shift();
  console.log(l1,l2)
  l1.forEach((item)=>{
    console.log('item',item)
    head1.next = new ListNode(item);
    // console.log('head1',JSON.stringify(head1))
    head1 = head1.next;
  })
  l2.forEach((item)=>{
    head2.next = new ListNode(item);
    head2 = head2.next;
  })
  console.log('xxx',JSON.stringify(a1),JSON.stringify(a2))
  return [a1,a2];
}
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
  // console.log('ddddd',JSON.stringify(l1),JSON.stringify(l2))

  let a1 = [], a2 = [];
  while(l1!==null) {
    a1.push(l1.val)
    l1 = l1.next;
  }
  while(l2!== null) {
    a2.push(l2.val)
    l2 = l2.next;
  }
  // console.log(a1,a2)
  let len1 = a1.length,
    len2 = a2.length;
  if (len2 > len1) {
    let tmp = a2;
    a2 = a1;
    a1 = tmp;
  }
  let next = 0;
  // console.log('a1,a2',a1,a2)
  for (let i = 0; i < a1.length; i++) {
    if(i>=a2.length) a2.push(0);
    let cur = a1[i] + a2[i] + next;
    if (cur >= 10) {
      a1[i] = cur % 10;
      next = Math.floor(cur / 10);
    }else {
        a1[i] = cur;
        next = 0;
    }
  }
  if(next>0) a1.push(next)
  // console.log('a1',a1);
  let ans = new ListNode();
  let head = null;
  head = ans;
  for(let i = 0; i < a1.length; i++) {
    head.val = a1[i];
    if(i!==a1.length-1) head.next = new ListNode();
    head = head.next;
  }
  return ans;
};
const [a1,a2] = ArrToList([2,4,3]
  ,[5,6,4])
console.log(addTwoNumbers(a1,a2));
