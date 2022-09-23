// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. 
// Hints:#8, #25, #41, #67, #126

class Node {
    constructor(data){
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    add(data) {
        let node = new Node(data)
        let currentNode = this.head

        if(!this.head){
            // console.log('Initializing...')
            this.head = node
        }

        else{
            while(currentNode.next){
                currentNode = currentNode.next
                
            }
            currentNode.next = node
        }
        this.size++;
    }

    klast(index){
        let obj = {}
        let currentNode = this.head
        let counter = 0

        while(currentNode){
            counter++;
            obj[counter] = currentNode.data
            currentNode = currentNode.next
            
        }
        console.log(obj[5 - (index -1)])
    }
}

const ll = new LinkedList()
ll.add(23)
ll.add(1)
ll.add(1)
ll.add(3)
ll.add(1)
// ll.klRecursiveOne(1)
