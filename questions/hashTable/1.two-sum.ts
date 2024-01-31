function twoSum(nums: number[], target: number): number[] {
  const hashMap = {}; // store required remaining number (target - number) and value of index

  for (let i = 0; i < nums.length; i++) {
    const focusedNum = nums[i];
    const requiredRemaining = target - focusedNum;

    // When there's a match for the remaining number
    if (hashMap[requiredRemaining] >= 0) {
      return [hashMap[requiredRemaining], i];
    }

    hashMap[focusedNum] = i;
  }

  return [];
}

// time: O(n)
// space: O(n)
