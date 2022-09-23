// 2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come 
// before all nodes greater than or equal to x. If x is contained within the list, the values of x only need 
// to be after the elements less than x (see below). The partition element x can appear anywhere in the 
// "right partition"; it does not need to appear between the left and right partitions. 
// EXAMPLE 
// Input: 
// Output: 
// 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition= 5] 
// 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8 
// Hints: #3, #24 

// https://stackoverflow.com/questions/33715805/partitioning-a-linkedlist-in-javascript

class Node {
    constructor(val){
        this.data = val
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    add(data){
        let node = new Node(data)
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
        this.size++;
    }
}

const partition = (data, list) =>{
    const gte = new LinkedList()
    const lt = new LinkedList()
    let currentNode = list.head

    if(!currentNode){
        return listTwo
    }
    else{
        while(currentNode){
            if(currentNode.data >= data ){
                gte.add(currentNode.data)
            }
            else {
                lt.add(currentNode.data)
            }
            currentNode = currentNode.next
        }
    }

    let tempGteNode = gte.head
    
    while(tempGteNode){
        lt.add(tempGteNode)
        tempGteNode = tempGteNode.next
    }
    return lt
}


const ll = new LinkedList()
ll.add(1)
ll.add(5)
ll.add(2)
ll.add(44)
ll.add(5)
ll.add(2)
ll.add(8)
console.log(partition(5, ll))
