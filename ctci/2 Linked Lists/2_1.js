// �mov� Dups! Write code to remove duplicates from an unsorted linked list. 
// FOLLOW UP 
// How would you solve this problem if a temporary buffer is not allowed?

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(element){
        const node = new Node(element)
        let currentNode = this.head;
        if(!this.head){
            this.head = node;
        }
        else {
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
    this.size++;
    }
    removeDups(element){
        let previousNode;
        let currentNode = this.head
        let removeCounter = 0;
        if(currentNode.element == element){
            this.head = currentNode.next;
            removeCounter += 1;
        }
        else {}
    
        while(currentNode.next){
            // if(currentNode.element === )
            currentNode = currentNode.next
            console.log(currentNode)
        }
        this.size-removeCounter;
    }
}

const ll = new LinkedList()
ll.add(20)
ll.add('pants')
ll.add('pants')
ll.add(5)
ll.removeDups(20)
console.log(ll)