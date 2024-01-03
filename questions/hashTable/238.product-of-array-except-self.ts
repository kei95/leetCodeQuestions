// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
  const zeroNumberIndices: number[] = [];
  let maxProduct = -Infinity;

  nums.forEach((num: number, index) => {
    if (num === 0) {
      zeroNumberIndices.push(index);
      return;
    }

    maxProduct = maxProduct > -Infinity ? maxProduct * num : num;
  });

  for (let i = 0; i < nums.length; i++) {
    if (zeroNumberIndices.length === 1) {
      nums[i] = nums[i] === 0 ? maxProduct : 0;
      continue;
    }

    if (zeroNumberIndices.length > 1) {
      nums[i] = 0;
      continue;
    }

    nums[i] = maxProduct / nums[i];
  }

  return nums;
}

// time: O(n)
// space: O(1)
