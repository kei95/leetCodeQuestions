function longestConsecutive(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);
  let highestConsecuitiveCount = 0;
  let currentConsecuitiveCount = 0;
  let prevTargetNum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const currentTargetNum = sortedNums[i];
    if (prevTargetNum === -Infinity || currentTargetNum === prevTargetNum + 1) {
      currentConsecuitiveCount++;
      if (currentConsecuitiveCount > highestConsecuitiveCount) {
        highestConsecuitiveCount = currentConsecuitiveCount;
      }
    }

    // skip case
    if (prevTargetNum === currentTargetNum) continue;

    if (currentTargetNum !== prevTargetNum + 1) {
      currentConsecuitiveCount = 1;
    }

    prevTargetNum = currentTargetNum;
  }

  return highestConsecuitiveCount;
}
