"""
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.
Constraints:

    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both l1 and l2 are sorted in non-decreasing order.

    l1 = [1,2,4], l2 = [1,3,4]

    Build test case first.
"""

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        # print(l1.val)
        # print(l2.next.val)
        if l1.val is None:
            if l2.val is None:
                return ListNode(val=None)
            else:
                return l2
        else:
            while l1.next != None & l2.next != None:
                print(l1, l2, min(l1.val, l2.val))


x = Solution()
x.mergeTwoLists(ListNode(val=None), ListNode(8, ListNode(88)))
