// https://leetcode.com/problems/binary-search

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (target === nums[mid]) return mid;

    if (target > nums[mid]) {
      left = mid + 1;
      continue;
    }

    if (target < nums[mid]) {
      right = mid - 1;
      continue;
    }
  }

  return -1;
}

// time: O(n)
// space: O(1)
