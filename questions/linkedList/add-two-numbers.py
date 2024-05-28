# https://leetcode.com/problems/add-two-numbers

from typing import Optional

# Definition for singly-linked list.
class ListNode:
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummyNode = ListNode()
        currentNode = dummyNode
        carry = 0

        while l1 or l2 or carry:
            value1 = l1.val if l1 else 0
            value2 = l2.val if l2 else 0

            sum = value1 + value2 + carry
            carry = sum // 10
            sum = sum % 10
            currentNode.next = ListNode(sum)

            currentNode = currentNode.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummyNode.next

# Time: O(n + m)
# Space: O(n + m)