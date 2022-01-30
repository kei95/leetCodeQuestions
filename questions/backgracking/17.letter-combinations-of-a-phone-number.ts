/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// What's really important is dfs. Since we have static length on each iteration, all I have to do is to jump to the depth first and go back once base cases are done.

// @lc code=start
const chars = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const res: string[] = [];

  function dfs(position = 0, pathStr = ""): void {
    if (position === digits.length) {
      res.push(pathStr);
      return;
    }
    const pointedLatters = chars[digits[position]]; // gets current position's set of chars

    for (let i = 0; i < pointedLatters.length; i++) {
      dfs(position + 1, pathStr + pointedLatters[i]); // 1 "ae"
    }
  }

  dfs();

  return res;
}

console.log(letterCombinations("234"));

// @lc code=end
