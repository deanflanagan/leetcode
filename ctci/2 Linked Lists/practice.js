class Node {
    constructor(element){
        this.next = null;
        this.element = element;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        let node = new Node(element)

        if(this.head == null){
            this.head = node;
        }
        else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
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
    isEmpty(){
        return this.size === 0 ? true : false
    }
    indexOf(element){
        let currentNode = this.head;
        let indexCount = 0;
        if(currentNode.element == element){
            return indexCount
        }
        else {
            while(currentNode.element != element){
                indexCount++;
                currentNode = currentNode.next;
            }
        }
        return indexCount
    }
    insertAt(element, index){
        let currentNode = this.head;
        let indexCount = 0;
        const node = new Node(element);
        let previousNode;

        if(index === 0){
            this.next = this.head;
            this.head = node;
        }
        else {
            while(indexCount != index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                indexCount++;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        this.size++;
    }
    removeFrom(index){
        let indexCount = 0 ;
        let currentNode = this.head;
        let previousNode;
        if(index === indexCount){
            this.head = currentNode.next
        }
        else {
            while(indexCount != index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                indexCount++;
            }
            // the index has to be removed
            previousNode.next = currentNode.next
        }
        this.size--; 
    }
    
}

let ll = new LinkedList();
ll.add(3)
ll.add(11)
ll.add(55)
ll.remove(3)
console.log(ll)
