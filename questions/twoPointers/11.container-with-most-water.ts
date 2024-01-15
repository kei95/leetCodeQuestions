// https://leetcode.com/problems/container-with-most-water

function maxArea(height: number[]): number {
  let waterAmount = -Infinity;
  let headIndex = 0;
  let tailIndex = height.length - 1;

  while (headIndex < tailIndex) {
    const factor =
      height[tailIndex] > height[headIndex]
        ? height[headIndex]
        : height[tailIndex];

    if (height[headIndex] < height[tailIndex]) {
      const currentAmount = factor * (tailIndex - headIndex);
      waterAmount = currentAmount > waterAmount ? currentAmount : waterAmount;
      headIndex++;
      continue;
    }

    if (height[headIndex] >= height[tailIndex]) {
      const currentAmount = factor * (tailIndex - headIndex);
      waterAmount = currentAmount > waterAmount ? currentAmount : waterAmount;
      tailIndex--;
      continue;
    }
  }
  return waterAmount;
}
