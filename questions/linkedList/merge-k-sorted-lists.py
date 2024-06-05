# https://leetcode.com/problems/merge-k-sorted-lists

from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if not lists or len(lists) == 0:
            return None

        while len(lists) > 1:
            mergedList = []

            for i in range(0, len(lists), 2):
                l1 = lists[i]
                l2 = lists[i+1] if i + 1 < len(lists) else None
                mergedList.append(self.mergeTwoLists(l1, l2))
            lists = mergedList

        return lists[0]

    def mergeTwoLists(self, l1, l2):
        dummy = ListNode()
        headNode = dummy

        while l1 and l2:
            if l1.val < l2.val:
                headNode.next = l1
                l1 = l1.next
            else:
                headNode.next = l2
                l2 = l2.next
            headNode = headNode.next

        if l1:
            headNode.next = l1
        if l2:
            headNode.next = l2

        return dummy.next

# time: O(n log k)
# space: O(n)