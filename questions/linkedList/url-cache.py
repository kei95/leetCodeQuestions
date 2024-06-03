# https://leetcode.com/problems/lru-cache

class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {} # cache to keep track on what exists
        self.leftNode, self.rightNode = Node(0, 0), Node(0, 0) # dummy nodes to get oldest and newest data
        self.leftNode.next, self.rightNode.prev = self.rightNode, self.leftNode

    # Remove a given node from internal linked list
    def remove(self, node):
        prev, next = node.prev, node.next
        prev.next, next.prev = next, prev

    # Insert a given node to the right most position of the linked list
    def insert(self, node):
        prev, next = self.rightNode.prev, self.rightNode
        node.next, node.prev = next, prev
        prev.next = next.prev = node

    def get(self, key: int) -> int:
        if key in self.cache:
            self.remove(self.cache[key])
            self.insert(self.cache[key])
            return self.cache[key].val
        return -1
        
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self.insert(self.cache[key])

        # When the length of cache exceeds capacity, remove the least used data
        if len(self.cache) > self.capacity:
            lruNode = self.leftNode.next
            self.remove(lruNode)
            del self.cache[lruNode.key]
        

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)