# Definition for singly-linked list.
from typing import Optional

class ListNode:
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        tailNode, headNode = None, head

        while headNode:
            nextNode = headNode.next
            headNode.next = tailNode
            tailNode = headNode
            headNode = nextNode
        
        return tailNode