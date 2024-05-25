// https://leetcode.com/problems/copy-list-with-random-pointer/

class RandomNode {
  val: number;
  next: RandomNode | null;
  random: RandomNode | null;
  constructor(val?: number, next?: RandomNode, random?: RandomNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: RandomNode | null): RandomNode | null {
  const copiedNodeMap = new Map();

  let currentHead = head;
  while (currentHead) {
    const clonedNode = new RandomNode(currentHead.val);
    copiedNodeMap.set(currentHead, clonedNode);
    currentHead = currentHead.next;
  }

  let copyHead = head;
  while (copyHead) {
    const reference = copiedNodeMap.get(copyHead);
    reference.next = copiedNodeMap.get(copyHead.next) ?? null;
    reference.random = copiedNodeMap.get(copyHead.random) ?? null;
    copyHead = copyHead.next;
  }

  return copiedNodeMap.get(head);
}

// O(2n)
// O(n)
