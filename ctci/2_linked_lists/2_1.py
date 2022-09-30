
class Node:
    def __init__(self,data=None):
        self.data = data 
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None 
        self.size = 0
    
    def print_me(self):
        print_value = self.head
        while print_value is not None:
            print(print_value.data)
            print_value = print_value.next
    
    def add(self,val):
        if self.head == None:
            self.head = Node(val)
        else:
            temp = self.head
            while temp.next:
                temp = temp.next 
            temp.next = Node(val)

    def remove_duplicates(self):
        current = second = self.head
        while current != None:
            while second.next is not None:
                if current.data == second.next.data:
                    print('found duplicate, need to skip over this one')
                    second.next = second.next.next                  
                else:
                    second = second.next
            current = second = current.next


ls = LinkedList()
ls.add(1)
ls.add(23)
ls.add(44)
ls.add(44)
ls.add(44)
ls.add(3)
ls.add(44)
# ls.print_me()
ls.remove_duplicates()
# ls.removeDups()
print('***')
ls.print_me()