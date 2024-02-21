// https://leetcode.com/problems/koko-eating-bananas

function minEatingSpeed(piles: number[], h: number): number {
  // The range of the binary search should be 1 to the greatest num from given array
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  // Do the binary search with division factor to be "K"
  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let hours = 0;

    // Sum up "hours" with "Math.ceil" (round up) to determine whether if it satisfies the base requirement
    for (const p of piles) {
      hours += Math.ceil(p / k);
    }

    // If the hours is smaller than "h", we might need to update res
    if (hours <= h) {
      res = Math.min(res, k);
      right = k - 1;
    } else {
      // skipping check for this case as it's greater than the current response
      // since this case indicates it didn't satisfy base requirement (hours <= h)
      left = k + 1;
    }
  }

  return res;
}

// time: O(log(max(piles)) * piles)
// space: O(1)
