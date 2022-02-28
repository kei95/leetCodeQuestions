/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

/**
 * `DFS`
 *
 * Using recursive function, go until smallest val node.
 * Afterwords, increase count with each node and update response
 * when the count meets `k(2nd argument)`.
 * Eventually, return value will be kth node's value.
 *
 * * time: O(n)
 * * space: O(h) - h = n + extra calls by checking current node's child.
 *                   it'd end up checking 2 nodes on each of them
 *
 */
function kthSmallest(root: TreeNode | null, k: number): number {
  let res = -1;
  let count = 0;

  function helper(currRoot = root): TreeNode | null {
    if (currRoot === null) return null;

    const leftNode = helper(currRoot.left);
    if (leftNode !== null) return leftNode;

    count++;
    if (count === k) {
      res = currRoot.val;
      return null;
    }

    return helper(currRoot.right);
  }

  helper();

  return res;
}

// [5,3,6,2,4,null,null,1]\n3

// @lc code=end
