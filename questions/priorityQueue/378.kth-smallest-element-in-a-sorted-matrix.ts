/*
 * @lc app=leetcode id=378 lang=typescript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

import {
  MinPriorityQueue,
  PriorityQueueItem,
} from "@datastructures-js/priority-queue";

// @lc code=start
/**
 * `Priority Queue`
 * Enqueue all elements in `matrix` array to minimum priority queue.
 * Than dequeue it k - 1 times so the front of the queue will be the answer
 *
 * time: O(n)
 * space: O(n)
 */
function kthSmallest(matrix: number[][], k: number): number {
  const minPriorityQueue = new MinPriorityQueue();

  for (const eachMatrix of matrix) {
    for (const element of eachMatrix) {
      minPriorityQueue.enqueue(element);
    }
  }

  while (k > 1) {
    minPriorityQueue.dequeue();
    k--;
  }

  const resFront = minPriorityQueue.front() as PriorityQueueItem<number>;

  return resFront.element;
}

console.log(
  kthSmallest(
    [
      [1, 2],
      [1, 3],
    ],
    1
  )
);

// @lc code=end
