# https://neetcode.io/problems/binary-tree-right-side-view

# definition for a binary tree node.
class treenode:
    def __init__(self, val=0, left=none, right=none):
        self.val = val
        self.left = left
        self.right = right

class solution:
    def rightsideview(self, root: optional[treenode]) -> list[int]:
        res = [] 
        queue = collections.deque()
        queue.append(root)

        while queue:
            queuelength = len(queue)
            level = []
            for i in range(queuelength):
                node = queue.popleft()
                if node:
                    level.append(node.val)
                    queue.append(node.left)
                    queue.append(node.right)
            if level:
                res.append(level.pop())
                
        return res
