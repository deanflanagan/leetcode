// Sum Lists: You have two numbers represented by a linked list, where each node contains a single 
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a 
// function that adds the two numbers and returns the sum as a linked list. 
// EXAMPLE 
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295. 
// Output: 2 -> 1 -> 9. That is, 912. 
// FOLLOW UP 
// Suppose the digits are stored in forward order. Repeat the above problem. 
// EXAMPLE 
// lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295. 
// Output: 9 -> 1 -> 2. That is, 912. 
// Hints: #7, #30, #71, #95, #109 

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

let one = new LinkedList()
one.add(7)
one.add(1)
one.add(6)
// one.add(8)

let two = new LinkedList()
two.add(5)
two.add(9)
two.add(2)

const summerRev = (l1, l2) => {
    let final = new LinkedList()

    let multiplier = 1
    let ttl = 0

    let nodeOne = l1.head
    let nodeTwo = l2.head

    while(nodeOne || nodeTwo){
        ttl += (nodeOne.data + nodeTwo.data) * multiplier
        multiplier *= 10

        nodeOne = nodeOne.next
        nodeTwo = nodeTwo.next
    }

    for(let i = String(ttl).length - 1; i >= 0; i--){
        final.add(Number(ttl.toString()[i]))
    }
    return final
}

const addn = (l1, l2, carry, node) => {
    if(!node){
        node = new Node()
    }
    else {
        console.log(node)
    }
    let val = carry

    if(l1){
        val += l1.data
    }
    if(l2){
        val += l2.data
    }
    node.data = val % 10 
    if(l1 || l2){
        addn( l1 ? l1.next : null, 
            l2 ? l2.next : l2,
            val >= 10 ? 1 :0,
            node)
    }
    else{
        console.log('fin ',node)
    }
}
addn(one.head, two.head,0,null)