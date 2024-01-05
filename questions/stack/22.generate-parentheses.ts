// https://leetcode.com/problems/generate-parentheses

function generateParenthesis(n: number): string[] {
  if (!n) return [];

  const stack: string[] = [];
  const res: string[] = [];

  function backTracker(openNumber: number, closeNumber: number) {
    if (openNumber === n && closeNumber === n) {
      res.push(stack.join(""));
      return;
    }

    if (openNumber < n) {
      stack.push("(");
      backTracker(openNumber + 1, closeNumber);
      stack.pop();
    }

    if (closeNumber < openNumber) {
      stack.push(")");
      backTracker(openNumber, closeNumber + 1);
      stack.pop();
    }
  }

  backTracker(0, 0);

  return res;
}

// time: O(n) wheres n is amount of chars
// space: O(n) wheres n is amount of chars
