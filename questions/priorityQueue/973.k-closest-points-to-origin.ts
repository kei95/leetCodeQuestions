/*
 * @lc app=leetcode id=973 lang=typescript
 *
 * [973] K Closest Points to Origin
 */

import {
  MinPriorityQueue,
  PriorityQueueItem,
} from "@datastructures-js/priority-queue";

// @lc code=start

/**
 * `Minimum Priority Queue`
 *
 * As Euclidean distance calculation, pass an array item of points with priority as (x**1 + x**2) to
 * since it's always compared to the original([0,0]).
 *
 * After enqueueing all elements of first argument, dequeue k(second argument) times and push it to an array.
 *
 * * time: O(n)
 * * space: O(n)
 */
function kClosest(points: number[][], k: number): number[][] {
  const minPriorQueue = new MinPriorityQueue<number[]>();
  const res: number[][] = [];

  for (const point of points) {
    minPriorQueue.enqueue(
      point,
      Math.sqrt(Math.abs(point[0] ** 2) + Math.abs(point[1] ** 2))
    );
  }

  while (k > 0) {
    const dequeuedPoint = minPriorQueue.dequeue() as PriorityQueueItem<
      number[]
    >;
    res.push(dequeuedPoint.element);
    k--;
  }

  return res;
}

console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);

// @lc code=end
