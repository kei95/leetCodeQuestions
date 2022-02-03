/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// Go through each item with last item.
// Reference last item's next value to current one if value is different
// If they have same values, it's skip current one and check on next one with current "last" node.
function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;

  function check(lastHead: ListNode, currNode: ListNode | null) {
    if (!currNode) {
      lastHead.next = null;
      return;
    }

    if (lastHead.val === currNode.val) {
      check(lastHead, currNode.next);
      return;
    }

    lastHead.next = currNode;
    check(currNode, currNode.next);
  }

  check(head, head.next);

  return head;
}
// @lc code=end
