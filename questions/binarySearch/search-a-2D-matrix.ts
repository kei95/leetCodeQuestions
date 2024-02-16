// https://leetcode.com/problems/search-a-2d-matrix

function searchMatrix(matrix: number[][], target: number): boolean {
  let startIdx = 0;
  let endIdx = matrix.length - 1;

  // First Binary Search
  while (startIdx <= endIdx) {
    const mid = Math.floor((startIdx + endIdx) / 2);
    const focusedMatrix = matrix[mid];
    const head = focusedMatrix[0];
    const tail = focusedMatrix[focusedMatrix.length - 1];

    if (target > tail) {
      startIdx = mid + 1;
      continue;
    }

    if (target < head) {
      endIdx = mid - 1;
      continue;
    }

    // Nested Binary Search
    let innerStart = 0;
    let innerEnd = focusedMatrix.length - 1;
    while (innerStart <= innerEnd) {
      const mid = Math.floor((innerStart + innerEnd) / 2);
      const focusedNum = focusedMatrix[mid];

      if (target === focusedNum) return true;

      if (target > focusedNum) {
        innerStart = mid + 1;
        continue;
      }

      if (target < focusedNum) {
        innerEnd = mid - 1;
        continue;
      }
    }

    return false;
  }

  return false;
}

// time: O(log n*m) n = matrix m = child matrix
// space: O(1)
