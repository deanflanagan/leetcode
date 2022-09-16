class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(data){
        const node = new Node(data)
        let currentNode = this.head

        if(!currentNode){
            this.head = node
        }
        else {
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        this.size++;
    }
    remove(data){
        let currentNode = this.head;
        let previousNode;

        if(currentNode.data === data){
            this.head = currentNode.next
            this.size--;
        }
        else {
            while(currentNode.data != data){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
            this.size--;
        }
    }
    removeAt(index){
        let counter = 0;
        let currentNode = this.head;
        let previousNode;

        while(counter != index && currentNode.next){
            counter++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    this.size--;
    }

    removeDupBuffer(){
        let set = new Set()
        let currentNode = this.head;
        let previousNode;

        while(currentNode){
            if(set.has(currentNode.data)){
                previousNode.next = currentNode.next;
                this.size--;
            }
            else{
                set.add(currentNode.data)
                previousNode = currentNode;
            }
            currentNode = currentNode.next;
        }
    }
    // removeDup(){
    //     let currentNode = this.head;
    //     while(currentNode){
    //         let runner = currentNode;
    //         while(currentNode.next){
    //             if(currentNode.data === runne)
    //         }
    //     }
    // }
}

var ll = new LinkedList()
ll.add(2)
ll.add(2)
// ll.add(3)
ll.add(4)
ll.add(4)
ll.add(4)

ll.removeDup()
console.log(ll)
