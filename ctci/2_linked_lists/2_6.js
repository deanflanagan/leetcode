// linked list is palindrome

class Node {
    constructor(data){
        this.data = data 
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null 
        this.size = 0
    }

    add(val){
        const node = new Node(val)

        if(!this.head){
            this.head = node
        }
        else{
            let temp = this.head
            while(temp.next){
                temp = temp.next
            }
            temp.next = node
        }
    this.size++;
    }

    isPalin(){
        let temp = this.head
        let obj = {}
        let counter = 0
        let middleInd = Math.round(this.size / 2) - 1
        // console.log(middleInd, 'is middleInd')
        
        while(temp){
            if(counter <= middleInd){
                obj[counter] = temp.data
            }
            else{
                if(obj[this.size - 1 - counter] !== temp.data){
                    return false
                }
            }
            temp = temp.next;
            counter++;
        }
        return true
    }
}

let ll = new LinkedList()
ll.add(0)
ll.add(1)
ll.add(2)
ll.add(2)
ll.add(1)
ll.add(0)
console.log(ll.isPalin())
