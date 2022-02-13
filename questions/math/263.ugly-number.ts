/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * Divide given number repeatedly with ugly numbers factors(2,3,5)
 * if the number is not dividable with them anymore, means it's not an ugly number.
 *
 * It also means that if n number can be divided until it becomes any of ugly number,
 * it means it's ugly number. Thus return `true`
 *
 * * time: O(log n)
 * * space: O(1)
 */
function isUgly(n: number): boolean {
  if (!n || n < 0) return false;

  while (n % 2 === 0) {
    n /= 2;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  while (n % 5 === 0) {
    n /= 5;
  }

  return n === 1;
}

// @lc code=end
