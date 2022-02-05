/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
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

/**
 * `String conversion`
 *
 * return head node of newly created linked list which is sum of two passed nodes in reverse order.
 * It creates string from both list, and iterate through it to create new node with sum of each digit.
 * * time: O(n) - Need to iterate through each passed linked list
 * * space: O(n) - Creates a new linked list, since it grows up to N/2+1
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let currL1 = l1;
  let currL2 = l2;
  let l1Str = "";
  let l2Str = "";

  // Make string from nodes values
  while (currL1 || currL2) {
    if (currL1) {
      l1Str = l1Str + `${currL1.val}`;
      currL1 = currL1.next;
    }
    if (currL2) {
      l2Str = l2Str + `${currL2.val}`;
      currL2 = currL2.next;
    }
  }

  // With the string made above, calculate sum and carry each by each chars
  let i = 0;
  let carry = 0;

  // Answer's new list nodes
  let headNode: ListNode | null = null;
  let currNode: ListNode | null = headNode;

  // iterate through each characters of string made above
  // create node with carry with sum
  while (i < l2Str.length || i < l1Str.length) {
    // if character doesn't exist for the index, treat as 0
    const l1Num = Number(l1Str[i]) || 0;
    const l2Num = Number(l2Str[i]) || 0;
    let sum = l1Num + l2Num + carry;

    // get carry for next round
    carry = Math.trunc(sum / 10);
    // remove first digit since carry is extracted
    sum = sum % 10;

    // create new nodes for the answer
    if (!headNode) {
      // create head node if it's not instantiated yet
      headNode = new ListNode(sum, null);
      currNode = headNode;
    } else {
      // add new node with sum to next node
      currNode!.next = new ListNode(sum, null);
      currNode = currNode!.next;
    }

    i++;
  }

  // finish the function with adding list node with leftover carry
  if (carry > 0) {
    currNode!.next = new ListNode(1, null);
  }

  return headNode;
}

// @lc code=end
