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
    remove(element){
        let previousNode;
        let currentNode = this.head;

        if(currentNode.element == element){
            this.head = currentNode.next;
        }
        else {
            while(currentNode.element != element){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
    this.size--;  
    }

    removeDups(){
        const seenVals = new Set();

        let current = this.head;
        let previousNode;

        while(current != null){
            if(seenVals.has(current.element)){
                previousNode.next = current.next;
                this.size--;
            }
            else{
                seenVals.add(current.element)
                previousNode = current;
            }
            current = current.next;
        }
    }
    removeDuplicate(){
        let currentNode = this.head;
        while(currentNode!=null){
            let runner = currentNode;
            while(runner.next!= null){
                if(runner.next.element == currentNode.element){
                    runner.next = runner.next.next
                    this.size--;
                }
                else {
                    runner = runner.next
                }
            }
            currentNode = currentNode.next
        }

    }
}

const ll = new LinkedList()
ll.add(2)
ll.add(1)
ll.add(1)
ll.add(1)
ll.add(2)
// console.log(ll)
ll.removeDuplicate()
console.log(ll)