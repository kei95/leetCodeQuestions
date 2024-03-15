// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array

function findMin(nums: number[]): number {
  let res = Infinity;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }

    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
      res = Math.min(res, nums[mid]);
      continue;
    }

    right = mid - 1;
    res = Math.min(res, nums[mid]);
  }

  return res;
}

// time: O(log n)
// space: O(1)
