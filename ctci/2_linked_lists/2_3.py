# delete middle node
class Node:
    def __init__(self,data) -> None:
        self.data = data
        self.next = None 

class LinkedList:
    def __init__(self) -> None:
        self.head = None 
        
    def add(self,data):
        if self.head is None:
            self.head = Node(data)
        else:
            current = self.head 
            while current.next != None:
                current = current.next 
            current.next = Node(data)
    def delete_me(self, node):
        if node == None or node.next == None:
            return False
        else:
            next = node.next 
            node.data = next.data
            node.next = next.next 
            return True

