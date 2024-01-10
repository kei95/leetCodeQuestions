// https://leetcode.com/problems/daily-temperatures

// Monotonic Decreasing Stack - stack elements inside are in decreasing order
function dailyTemperatures(temperatures: number[]): number[] {
  const res = Array(temperatures.length).fill(0);
  const tempStack: { temperature: number; index: number }[] = [];

  temperatures.forEach((temperature, index) => {
    if (index === 0) {
      tempStack.push({ temperature, index });
      return;
    }

    while (tempStack.length > 0) {
      const currentDay = tempStack[tempStack.length - 1];
      if (temperature > currentDay.temperature) {
        res[currentDay.index] = index - currentDay.index;
        tempStack.pop();
        continue;
      }
      break;
    }

    tempStack.push({ temperature, index });
  });

  return res;
}

// time O(n)
// space O(n)
