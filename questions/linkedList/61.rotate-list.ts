/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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
 * `Two pointers`
 *
 * Set first pointer at kth node and second at head.
 * Move both pointers until first one hits the last node of the list.
 * Once hit the end, bring second pointer's next node to head and update its next to `null`
 * Then make last node of the list(first pointer node) pointing at previous head node.
 *
 * * time: O(n); (n = k)
 * * space: O(1);
 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || !head) return head;

  let firstP: ListNode | null = head;
  let secondP: ListNode = head;

  // move first pointer to kth node
  for (let i = 0; i < k; i++) {
    firstP = firstP.next ? firstP.next : head;
  }

  // Move pointers until first pointer hits the end of the list
  while (firstP.next) {
    firstP = firstP.next;
    secondP = secondP.next!;
  }

  // move second pointer's next node to the beginning position
  // then remove second pointer's next value to make it the last node
  firstP.next = head;
  head = secondP.next || null;
  secondP.next = null;

  return head;
}

//[0,1,2]\n4
// @lc code=end
