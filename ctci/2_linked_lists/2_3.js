// elete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but 
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to 
// that node. 

class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.size = 0
        this.head = null
    }
    add(data){
        const node = new Node(data)
        let currentNode = this.head

        if(!this.head){
            this.head = node        
        }
        else{
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
    this.size++;
    }
}

const ll = new LinkedList()
ll.add(1)
ll.add(2)
ll.add(3)

console.log(ll)

const deleteNode = (node) => {
    if(!node || !node.next){
        return false
    }
    let next = node.next
    node.data = next.data;
    node.next = next.next;
    return true
}



// const deleteNode = (lil) =>{
//     if(!lil || !lil.next ){
//         lil.next
//     }
// }

// boolean deleteNode(LinkedListNode n) { 
//     2 if (n == null I I n.next == null) { 
//     3 return false; // Failure 
//     4 } 
//     5 LinkedlistNode next = n.next; 
//     6 n.data = next.data;
//     7 n.next = next.next;
//     8 return true;
//     9 }