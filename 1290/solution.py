# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        # binary = ''
        # temp = head 
        # while temp:
        #     binary += str(temp.val)
        #     temp = temp.next
        # return int(binary, 2)
        answer = 0
        while head: 
            print(head.val)
            answer = 2*answer + head.val 
            print(answer, 'Eol')
            head = head.next 
        return answer 

ls = ListNode(1,ListNode(0, ListNode(1)))
print(Solution().getDecimalValue(ls))