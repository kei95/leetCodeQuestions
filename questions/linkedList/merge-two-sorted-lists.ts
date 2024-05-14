// https://leetcode.com/problems/merge-two-sorted-lists

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let dummyNode = new ListNode();
  let tailNode = dummyNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tailNode.next = l1;
      l1 = l1.next;
    } else {
      tailNode.next = l2;
      l2 = l2.next;
    }
    tailNode = tailNode.next;
  }

  if (l1) tailNode.next = l1;
  if (l2) tailNode.next = l2;

  return dummyNode.next;
}

// time: O(n)
// space: O(n+1)
