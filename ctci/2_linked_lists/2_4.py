# // 2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come 
# // before all nodes greater than or equal to x. If x is contained within the list, the values of x only need 
# // to be after the elements less than x (see below). The partition element x can appear anywhere in the 
# // "right partition"; it does not need to appear between the left and right partitions. 
# // EXAMPLE 
# // Input: 
# // Output: 
# // 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5] 
# // 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8 
# // Hints: #3, #24 

class Node:
    def __init__(self, data) -> None:
        self.data = data 
        self.next = None

class LinkedList:
    def __init__(self) -> None:
        self.head = None 
    
    def add(self, data):
        if self.head == None:
            self.head = Node(data)
        else:
            current = self.head 
            while current.next != None:
                current = current.next 
            current.next = Node(data)
    
    def partition(self, number):
        gte = LinkedList()
        current = self.head # need to remove them 
        previous = None 
        # print(current.data)
        if current.data >= number and current.next != None:
            gte.add(current.data)
            previous = current
            current = current.next 
        
        while current != None and current.next != None:
            if current.data >= number:
                gte.add(current.data)
                print('gte', current.data)
                previous.next = current.next
                current = current.next.next 
            else:
                print('lt', current.data)
                previous = current
                current = current.next
        # print(previous.data)
        previous.next = gte.head
            
            



    def print_me(self):
        current = self.head 
        while current != None:
            print(current.data)
            current = current.next 
        # print(current.data)
        

ll = LinkedList()
ll.add(2)
ll.add(4)
ll.add(5)
ll.add(88)
ll.add(77)
ll.add(66)
ll.add(30)
ll.partition(40)
ll.print_me()