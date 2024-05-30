# https://leetcode.com/problems/find-the-duplicate-number/

from typing import List

class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        slow, fast = 0, 0

        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break
        
        secondSlow = 0
        while True:
            slow = nums[slow]
            secondSlow = nums[secondSlow]
            if slow == secondSlow:
                return slow
            
# Time: O(n)
# Space: O(1)

