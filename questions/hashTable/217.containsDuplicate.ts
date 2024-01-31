// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  const hashMap = {};

  for (const num of nums) {
    if (hashMap[num]) return true;
    hashMap[num] = true;
  }

  return false;
}

// time: O(n)
// space: O(n)
