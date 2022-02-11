/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

import {
  MaxPriorityQueue,
  PriorityQueueItem,
} from "@datastructures-js/priority-queue";

/**
 * `Priority queue`
 *
 * Prepare max priority queue and store all values in the `nums`.
 * Then dequeue the item k - 1 times and eventually the top in the queue is the answer(kth largest item).
 *
 * * time: O(n)
 * * space: O(n)
 */
function findKthLargest(nums: number[], k: number): number {
  const maxPriorQueue = new MaxPriorityQueue<number>();

  // iterate the array and enqueue them
  for (const num of nums) {
    maxPriorQueue.enqueue(num, num);
  }

  // dequeue items k - 1 times
  while (k > 1) {
    maxPriorQueue.dequeue();
    k--;
  }

  // eventually, the item at front is the answer
  const resFront = maxPriorQueue.front() as PriorityQueueItem<number>;
  return resFront.element;
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
