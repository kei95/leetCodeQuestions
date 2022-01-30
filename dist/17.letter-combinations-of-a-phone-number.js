"use strict";
/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */
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
function letterCombinations(digits) {
    if (digits.length === 0)
        return [];
    const res = [];
    function dfs(position = 0, pathStr = "") {
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
//# sourceMappingURL=17.letter-combinations-of-a-phone-number.js.map