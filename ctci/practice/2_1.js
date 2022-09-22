// �mov� Dups! Write code to remove duplicates from an unsorted linked list. 
// FOLLOW UP 
// How would you solve this problem if a temporary buffer is not allowed?

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.size = 0 
        this.head = null
    }

    add(element) {
        let node = new Node(element)
        let currentNode = this.head

        if(!this.head){
            this.head = node
        }
        else {
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.size++
    }

    removeDups(){
        const set = new Set()
        let currentNode = this.head
        let previousNode;

        while(currentNode){
            if(set.has(currentNode.data)){
                previousNode.next = currentNode.next;
                this.size--;
            }
            else {
                set.add(currentNode.data)
                previousNode = currentNode
            }
            currentNode = currentNode.next
        }
    }
}

const ll = new LinkedList()
// ll.add(33)
ll.add(44)
ll.add(44)
ll.add(44)

ll.removeDups()
console.log(ll)