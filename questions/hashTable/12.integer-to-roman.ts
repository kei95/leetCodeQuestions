/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
const hashTable = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

/**
 * `HashTable`
 *
 * Create a table that contains all base pattern of numbers.
 * Then iterate through the table and apply key of the table(string of roman number).
 * Keep subtracting passed number with closest value of table until it becomes `0`.
 * Then eventually the function will return combined string as response.
 *
 * n = table
 * * time: O(n)
 * * Space: O(n)
 */
function intToRoman(num: number): string {
  let res = "";

  for (const key in hashTable) {
    while (num >= hashTable[key]) {
      res += key;
      num -= hashTable[key];
    }
  }

  return res;
}

console.log(intToRoman(58));
// @lc code=end
