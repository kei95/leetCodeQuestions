/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start

/**
 * `Splice with while`
 *
 * Iterate through passed array with while loop, and remove elements which is equivalent to `val`
 * Since array's length gets differed by removing an element,
 * index should stay as is if deletion occurred
 * * time: O(n)
 * * space: O(1)
 */
function removeElement(nums: number[], val: number): number {
  let currIdx = 0;

  while (currIdx < nums.length) {
    if (nums[currIdx] === val) {
      nums.splice(currIdx, 1);
      continue;
    }

    currIdx++;
  }

  return nums.length;
}
// @lc code=end
