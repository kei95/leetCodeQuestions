# Definition for a binary tree node.
from typing import Optional

class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # Represents the longest diameter
        res = [0]

        # Returns the height of the node
        def dfs(root):
            if not root:
                return -1

            left = dfs(root.left)
            right = dfs(root.right)

            # Get the diameter of the current node
            # 2 is used as edges are two (left and right)
            res[0] = max(res[0], 2 + left + right)

            # Return the height of the node
            # 1 represents the height to be added
            return 1 + max(left, right)

        dfs(root)
        return res[0]
    
# Time: O(n)
# Space: O(n)