from typing import Optional
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:    
        if head.next == None:
            return head 
        else:
            d = {}
            count = 1
            temp = head 
            while temp.next:
                d[count] = temp 
                count +=1
                temp = temp.next
            d[count] = temp
        if count % 2 == 1:
            ind = round((count + 1) / 2)
        else:
            ind = (count / 2) + 1
        return d[ind]

ls = ListNode(1,ListNode(2))#, ListNode(3, ListNode(4, ListNode(5, ListNode(6))))))
print(Solution().middleNode(ls))
