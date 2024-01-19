// https://leetcode.com/problems/trapping-rain-water

// Iteratively check max left and max right vs current left or right index in height[].
// when the current place is smaller than the right(left) max number, means there's a space to fill in with "water"
function trap(height: number[]): number {
  let leftHand = 0;
  let rightHand = height.length - 1;
  let maxLeft = height[leftHand];
  let maxRight = height[rightHand];
  let answer = 0;

  while (leftHand <= rightHand) {
    if (maxLeft <= maxRight) {
      const currentSpace = maxLeft - height[leftHand];
      if (currentSpace < 0) maxLeft = height[leftHand];
      if (currentSpace > 0) answer += currentSpace;
      leftHand++;
      continue;
    }

    const currentSpace = maxRight - height[rightHand];
    if (currentSpace < 0) maxRight = height[rightHand];
    if (currentSpace > 0) answer += currentSpace;
    rightHand--;
  }

  return answer;
}

// time(n)
// space(1)
