/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  let res = true;

  function dfs(currP: TreeNode | null = p, currQ: TreeNode | null = q) {
    if (JSON.stringify(currP) !== JSON.stringify(currQ)) {
      res = false;
      return;
    }
    if (!currP?.val || !currQ?.val) {
      return;
    }

    dfs(currP?.left, currQ?.left);
    dfs(currP?.right, currQ?.right);
  }

  dfs();

  return res;
}

// ===== sophisticated answer =====
function sophisticated_isSameTree(
  p: TreeNode | null,
  q: TreeNode | null
): boolean {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return (
    sophisticated_isSameTree(p.left, q.left) &&
    sophisticated_isSameTree(p.right, q.right)
  );
}

// console.log(isSameTree);
// @lc code=end
