/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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
 * `Swap values`
 *
 * Iterate through nodes and check its "index" number counting from head node.
 * Swap nodes' value with next one when index is even number.
 *
 * * time: O(n)
 * * Space: O(1)
 */
function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return head;

  // "index" of node
  let currIdx = 0;
  let currNode: ListNode | null = head;

  while (currNode) {
    // Swap values when index is even number
    if (currNode.next && currIdx % 2 === 0) {
      const nextNodeVal = currNode.next?.val;
      const currNodeVal = currNode.val;
      currNode.val = nextNodeVal;
      currNode.next.val = currNodeVal;
    }
    currNode = currNode.next;
    currIdx++;
  }

  return head;
}

// @lc code=end
