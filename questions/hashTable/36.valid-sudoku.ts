/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start

/**
 * `HashTable`
 *
 * Set two for loops that iterate through the length of grid.
 * Create Set(HashTable's substitute) in the first loop and reset when nested loop is complete.
 * In the each iteration, it'll set three values each round;
 * * row's value
 * * colum's value
 * * subBox' value
 * By go through all grids, if there's any duplication in any values, it'd return false
 *
 * time: O(n)
 * space: O(n)
 */
function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const set = new Set();
    for (let j = 0; j < board.length; j++) {
      const rowVal = board[i][j];
      const colVal = board[j][i];
      const boxVal =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      const rowKey = `rowVal_${board[i][j]}`;
      const colKey = `colVal_${board[j][i]}`;
      const boxKey = `boxVal_${
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]
      }`;

      if (rowVal !== ".") {
        if (set.has(rowKey)) return false;
        set.add(rowKey);
      }

      if (colVal !== ".") {
        if (set.has(colKey)) return false;
        set.add(colKey);
      }

      if (boxVal !== ".") {
        if (set.has(boxKey)) return false;
        set.add(boxKey);
      }
    }
  }

  return true;
}
// @lc code=end
