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

function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Get the middle part of the array to divide
    let mid = Math.floor((right + left) / 2);

    if (target === nums[mid]) return mid;

    // if the middle element is smaller than the target
    // left should be where mid + 1 so that you can shrink and get
    // another middle position
    if (target > nums[mid]) {
      left = mid + 1;
      continue;
    }

    // if the middle element is greater than the target
    // right should be where mid - 1 so that you can shrink and get
    // another middle position
    if (target < nums[mid]) {
      right = mid - 1;
      continue;
    }
  }

  return -1;
}

// time: O(log n)
// space: O(1)
