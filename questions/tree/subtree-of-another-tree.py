# Definition for a binary tree node.
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if not subRoot: return True # If sub root doesn't exist - subRoot is done
        if not root: return False

        if self.isSameTree(root, subRoot):
            return True # Happy case - when subRoot is the beginning of the root, return true

        # Start over with children from root to find the same sub tree
        return (self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot))

    def isSameTree(self, root, subRoot):
        if not root and not subRoot:
            return True
        if root and subRoot and root.val == subRoot.val:
            return (self.isSameTree(root.left, subRoot.left) and self.isSameTree(root.right, subRoot.right))

        return False