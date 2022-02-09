/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */

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

/**
 * `Swapping each node`
 *
 * Set two pointers which starts from head and its next node.
 * Iterate through the list by swapping link from current node to previous one.
 * When it hits the end of the list, return "previous(second pointer)" node since it's eventually the head.
 *
 * This solution changes original list's values rather making new ones. Thus space is constraint(O(1))
 *
 * * time: O(n)
 * * space: O(1)
 */
function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let currNode: ListNode | null = head.next;
  let prevNode = head;

  // Remove head's next reference to make it last node
  head.next = null;

  while (currNode) {
    const tempNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }

  return prevNode;
}
// @lc code=end
