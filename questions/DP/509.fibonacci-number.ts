/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
  const fibonacciSequence = [0, 1, 1];
  if (n < fibonacciSequence.length) return fibonacciSequence[n];

  for (let i = 3; i <= n; i++) {
    fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
  }

  return fibonacciSequence[fibonacciSequence.length - 1];
}
// @lc code=end
