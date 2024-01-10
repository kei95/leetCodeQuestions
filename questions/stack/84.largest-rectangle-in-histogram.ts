// https://leetcode.com/problems/largest-rectangle-in-histogram

function largestRectangleArea(heights: number[]): number {
  let stack: { index: number; height: number }[] = [];
  let largestRectangle = 0;

  heights.forEach((height, index) => {
    const bar = { index, height };
    if (stack.length === 0) {
      stack.push(bar);
      largestRectangle = height;
      return;
    }

    // When the bar is smaller than previous one
    // Pop the bar in the stack to get the area to update the largest.
    // There's no reason to keep track on the previous one as it's dead end
    if (stack[stack.length - 1].height > height) {
      while (stack.length > 0 && stack[stack.length - 1].height > height) {
        const poppedBar = stack.pop();
        const poppedBarWidth = index - poppedBar!.index;
        const poppedArea = poppedBarWidth * poppedBar!.height;

        largestRectangle =
          poppedArea > largestRectangle ? poppedArea : largestRectangle;
        bar.index = poppedBar!.index;
      }

      stack.push(bar);
      return;
    }

    stack.push(bar);
  });

  while (stack.length > 0) {
    const poppedBar = stack.pop();
    const poppedBarWidth = heights.length - poppedBar!.index;
    const poppedArea = poppedBarWidth * poppedBar!.height;

    largestRectangle =
      poppedArea > largestRectangle ? poppedArea : largestRectangle;
  }

  return largestRectangle;
}

// time: O(n)
// space: O(n)
