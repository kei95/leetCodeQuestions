// https://leetcode.com/problems/remove-nth-node-from-end-of-list

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head?.next) return null;

  // increment the number of codeCount
  let headPointer = head;
  let nodeCount = 1;
  while (headPointer.next) {
    headPointer = headPointer.next;
    nodeCount++;
  }

  // Traverse nodes and increment currentNodeCount
  // When nodeCount - currentNodeCount === n, it means the next node should be skipped
  let currentNode: ListNode | null = head;
  let prevNode: ListNode | null = null;
  let currentNodeCount = 0;
  while (currentNode) {
    if (nodeCount - currentNodeCount === n) {
      if (prevNode) {
        prevNode.next = currentNode.next;
      } else {
        return currentNode.next;
      }
      currentNode = null;
      break;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
    currentNodeCount++;
  }

  return head;
}

// time: O(n)
// space: O(1)
