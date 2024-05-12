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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  // 1. set nodes
  let tailNode: ListNode | null = null;
  let headNode: ListNode | null = head;

  while (headNode) {
    // 2. preserve node
    const nextNode = headNode.next;
    // 3. set new pointer
    headNode.next = tailNode;
    // 4. move tail and head to the next
    tailNode = headNode;
    headNode = nextNode;
  }

  return tailNode;
}
