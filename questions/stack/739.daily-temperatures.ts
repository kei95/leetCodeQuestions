// https://leetcode.com/problems/daily-temperatures

function dailyTemperatures(temperatures: number[]): number[] {
  const res = Array(temperatures.length - 1).fill(-Infinity);
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

  while (tempStack.length > 0) {
    const currentDay = tempStack.pop();
    res[currentDay!.index] = 0;
  }

  return res;
}

// time O(n)
// space O(n)
