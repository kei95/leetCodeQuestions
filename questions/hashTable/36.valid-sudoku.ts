// https://leetcode.com/problems/valid-sudoku
function isValidSudoku(boards: string[][]): boolean {
  const store = new Set();

  for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
    for (let rowIndex = 0; rowIndex < boards.length; rowIndex++) {
      const targetNumber = boards[boardIndex][rowIndex];
      if (targetNumber === ".") continue;

      // Store row
      const rowTarget = `row_${boardIndex}_${targetNumber}`;
      if (store.has(rowTarget)) return false;
      store.add(rowTarget);

      // Store column
      const columnTarget = `column_${rowIndex}_${targetNumber}`;
      if (store.has(columnTarget)) return false;
      store.add(columnTarget);

      // Store subBox
      const subBoxNum = `subBox_${Math.floor(boardIndex / 3)}_${Math.floor(
        rowIndex / 3
      )}`;
      const subBoxTarget = `${subBoxNum}_${targetNumber}`;
      if (store.has(subBoxTarget)) return false;
      store.add(subBoxTarget);
    }
  }

  return true;
}

// time O(n)
// space O(n)
