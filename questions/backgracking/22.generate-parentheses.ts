/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// Solving it by bfs, focusing on opening and set close subsequently. Since I know the length of needed openings / closings,
// I could run recursive til they both hit the expected length.

// @lc code=start
function generateParenthesis(n: number): string[] {
  if (!n || n < 0) return [];
  const res: string[] = [];

  function bfs(pathStr = "", openCount = 0, closeCount = 0) {
    if (openCount === n && closeCount === n) {
      res.push(pathStr);
      return;
    }

    if (openCount !== n) {
      bfs(pathStr + "(", openCount + 1, closeCount);
    }

    if (openCount > closeCount) {
      bfs(pathStr + ")", openCount, closeCount + 1);
    }
  }

  bfs();

  return res;
}

console.log(generateParenthesis(3));
// @lc code=end
