#// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
class Node:
    def __init__(self,data) -> None:
        self.data = data 
        self.next = None 

class LinkedList:
    def __init__(self) -> None:
        self.head = None 

    def kth(self,index):
        size = 1
        current = self.head 

        while current != None and size < index:
            size += 1
            current = current.next
        print(current.data)
        print(size)

    def kth_recur(self, index):
        i = 0
        if (self.head == None):
            return
        self.kth_recur(self.head.next, index)
        i += 1
        if (i == index):
            print(self.head.data)

    def add(self, val):
        if self.head == None:
            self.head = Node(val)
        else:
            current = self.head
            while current.next != None:
                current = current.next
            current.next = Node(val)

ll = LinkedList()
ll.add(1)
ll.add(22)
ll.add(3)
ll.add(7)

ll.kth_recur(2)