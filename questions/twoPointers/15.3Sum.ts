// https://leetcode.com/problems/3sum

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    let remaining = 0 + nums[i];
    let headIndex = i + 1;
    let tailIndex = nums.length - 1;

    // when i and headIndex is the same, home headIndex to last of it
    if (i > 0 && nums[i] === nums[i - 1]) {
      headIndex++;
      continue;
    }

    while (headIndex < tailIndex) {
      const sum = nums[headIndex] + nums[tailIndex] + remaining;
      // skip duplicate nums in tail
      if (nums[tailIndex] === nums[tailIndex + 1]) {
        tailIndex--;
        continue;
      }

      if (sum === 0) {
        res.push([nums[i], nums[headIndex], nums[tailIndex]]);
        headIndex++;
        // Once find a solution for current start position, skip all duplicates as
        // the same base number means the same answer
        while (
          nums[headIndex] === nums[headIndex - 1] &&
          headIndex < tailIndex
        ) {
          headIndex++;
        }
        continue;
      }

      if (sum > 0) {
        tailIndex--;
        continue;
      }

      if (sum < 0) {
        headIndex++;
        continue;
      }
    }
  }

  return res;
}

// time O(n^2)
// space O(n)
