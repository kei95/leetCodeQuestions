// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

function twoSum(numbers: number[], target: number): number[] {
  let tailIndex = numbers.length - 1;
  let headIndex = 0;

  while (headIndex < tailIndex) {
    if (numbers[headIndex] + numbers[tailIndex] > target) {
      tailIndex--;
      continue;
    }

    if (numbers[headIndex] + numbers[tailIndex] < target) {
      headIndex++;
      continue;
    }

    return [headIndex + 1, tailIndex + 1];
  }

  return [0, 0];
}

// time: O(n)
// space: O(1)
