/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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
 * `Map solution`
 *
 * Set all nodes on map with key of index.
 * After setting everything, check on one behind node and change pointer of it
 * if the "one behind" node doesn't exist, switch header to the second node of the link
 *
 * * time: O(n)
 * * space: O(n)
 */
function removeNthFromEndMap(
  head: ListNode | null,
  n: number
): ListNode | null {
  if (!head) return head;

  const nMap = new Map();
  let targetIdx = -1;
  let length = 0;
  let currNode: ListNode | null = head;

  // push each node to map with index
  while (currNode) {
    length++;
    nMap.set(length, currNode);
    currNode = currNode.next;
  }

  targetIdx = length - (n - 1);

  // set pointer of preNode to one further node
  const prevNode = nMap.get(targetIdx - 1);

  if (prevNode) {
    prevNode.next = nMap.get(targetIdx + 1) ?? null;
  } else {
    head = head.next;
  }

  return head;
}

/**
 * `Two pointers`
 *
 * Iterate through the list up until the `n` with first pointer
 * and then move it with second one until first one hit the last node
 * eventually the second pointer should be pointing at the one to change reference.
 *
 * * time: O(n)
 * * space: O(1)
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return head;

  let firstP: ListNode | null = head!;
  let secondP: ListNode | null = head!;

  for (let i = 0; n > i; i++) {
    if (!firstP?.next) {
      // if there's only single item in linked list, just return null
      if (n - 1 === i) return null;
      return head;
    }
    firstP = firstP.next;
  }

  while (firstP?.next) {
    firstP = firstP.next;
    secondP = secondP!.next;
  }

  if (secondP?.next) {
    secondP.next = secondP.next.next;
  }

  return head;
}

// @lc code=end
