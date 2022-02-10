/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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
 * `Device list into half`
 *
 * Set two pointers which are fast and slow. When fast pointer hits an end, slow pointer is at the middle,
 * so divide the list into left and right. Then reverse right hand of list and check both lists from head simultaneously.
 *
 * If all the values are identical from both head until the end of the right side of the list, means it's palindrome.
 *
 * * time: O(n)
 * * space: O(1)
 */
function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  let fastP: ListNode | null = head.next;
  let slowP: ListNode | null = head;

  // When fast pointer hits an end, means slowP is at the middle
  while (fastP?.next) {
    // move pointers
    fastP = fastP.next?.next;
    slowP = slowP?.next || null;
  }

  // divide the list into half
  const secondHandLastNode = slowP?.next || null;
  slowP!.next = null;

  // reverse second half of the list
  let reverseHeadP: ListNode | null = secondHandLastNode;
  let reverseTailP: ListNode | null = null;
  while (reverseHeadP) {
    const tempNode = reverseHeadP?.next;

    reverseHeadP.next = reverseTailP;
    reverseTailP = reverseHeadP;
    reverseHeadP = tempNode;
  }

  // check list from both heads in left and right side
  let currRightP: ListNode | null = reverseTailP;
  let currLeftP: ListNode | null = head;

  while (currRightP) {
    if (currLeftP?.val !== currRightP.val) return false;
    currRightP = currRightP.next;
    currLeftP = currLeftP.next;
  }

  return true;
}

// @lc code=end
