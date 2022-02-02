/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

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

// Passing along the node with min and max value.
// If moving towards left, max should be current node value
// If moving towards right, min should be current node value

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;

  function dfs(
    cNode: TreeNode | null = root,
    min: number | undefined = undefined,
    max: number | undefined = undefined
  ): boolean {
    if (!cNode) return true;

    if ((!!min && cNode.val <= min) || (!!max && cNode.val >= max)) {
      return false;
    }

    if (cNode.left) {
      if (cNode.left.val >= cNode.val) return false;
    }

    if (cNode.right) {
      if (cNode.right.val <= cNode.val) return false;
    }

    return dfs(cNode.left, min, cNode.val) && dfs(cNode.right, cNode.val, max);
  }

  return dfs();
}

// time: O(n)
// space: O(n)

// @lc code=end
