# https://neetcode.io/problems/level-order-traversal-of-binary-tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        res = []

        q = collections.deque()
        q.append(root)

        while q:
            qLen = len(q)
            level = []
            for i in qLen:
                node = q.leftpop()
                if node:
                    level.append(q.val)
                    q.append(q.left)
                    q.append(q.right)
            if level:
                res.append(level)
                
        return res
