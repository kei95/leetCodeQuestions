# https://neetcode.io/problems/count-good-nodes-in-binary-tree

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, maxValue):
            if not node: 
                return 0
            
            res = 1 if node.val >= maxValue else 0
            maxValue = max(node.val, maxValue)
            res += dfs(node.left, maxValue)
            res += dfs(node.right, maxValue)
            return res
        
        return dfs(root, root.val)
