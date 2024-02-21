// https://leetcode.com/problems/koko-eating-bananas

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let hours = 0;

    for (const p of piles) {
      hours += Math.ceil(p / k);
    }

    if (hours <= h) {
      res = Math.min(res, k);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return res;
}

// time: O(log(max(piles)) * piles)
// space: O(1)
