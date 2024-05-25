// https://leetcode.com/problems/reorder-list

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
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head?.next ?? null;

  // get the node in the middle to reverse the second half
  while (fastPointer && fastPointer.next && slowPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // reverse second half of the list
  let reverseTail = slowPointer;
  let reverseHead = reverseTail?.next ?? null;
  if (reverseTail) reverseTail.next = null;

  while (reverseHead) {
    const tempNode = reverseHead.next;
    reverseHead.next = reverseTail;
    reverseTail = reverseHead;
    reverseHead = tempNode;
  }

  // stich the first / second half together
  let resultHead = head;
  let resultTail = reverseTail;
  while (resultHead) {
    const headNext = resultHead.next;
    const tailNext = resultTail?.next ?? null;

    resultHead.next = resultTail;
    if (resultTail) resultTail.next = headNext;

    resultHead = headNext;
    resultTail = tailNext;
  }
}
// O(n)
// O(1)
