class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:    
        dummy_head = ListNode()
        carry = 0
        p = l1
        q = l2
        curr = dummy_head
        
        while p or q :
            x = p.val if p.next else 0
            try:
                y = q.val if q.next else 0
            except AttributeError:
                y = 0
            ttl = carry + x + y
            carry = ttl / 10
            curr.next = ListNode(ttl % 10)
            curr = curr.next
            if p:
                p = p.next
            if q:
                q = q.next

        
        if carry > 0:
            curr.next = ListNode(val=carry)
        else:
            dummy_head.next

        return curr
            
l1 = ListNode(val= 2, next= ListNode(val= 4, next= ListNode(val= 3, next= ListNode(val = 1,next=None))))
l2 = ListNode(val= 5, next= ListNode(val= 6, next= ListNode(val= 4, next= None)))

x = Solution()
x.addTwoNumbers(l1, l2)

"""
Initialize current node to dummy head of the returning list.
Initialize carry to 00.
Initialize pp and qq to head of l1l1 and l2l2 respectively.
Loop through lists l1l1 and l2l2 until you reach both ends.
Set xx to node pp's value. If pp has reached the end of l1l1, set to 00.
Set yy to node qq's value. If qq has reached the end of l2l2, set to 00.
Set sum = x + y + carrysum=x+y+carry.
Update carry = sum / 10carry=sum/10.
Create a new node with the digit value of (sum \bmod 10)(summod10) and set it to current node's next, then advance current node to next.
Advance both pp and qq.
Check if carry = 1carry=1, if so append a new node with digit 11 to the returning list.
Return dummy head's next node.
"""