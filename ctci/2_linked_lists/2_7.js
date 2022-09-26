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
}

const getIntersection = (l1, l2) => {
    // get tail and size
    const tailSize = (list) => {
        let temp = list
        let counter = 1
        while(temp.next){
            counter++;
            temp = temp.next
        }
        return {'tail':temp.data,'size':counter}
    }
    const l1Stats = tailSize(l1)
    const l2Stats = tailSize(l2)

    if(l1Stats.tail !== l2Stats.tail){
        return null
    }
    let shorter =  l1Stats.size < l2Stats.size ? l1 : l2
    const longer =  l1Stats.size < l2Stats.size ? l2 : l1

    const diff = Math.abs(l1Stats.size - l2Stats.size)
    // console.log(longer)

    let longerStart = longer

    for(let i = 0; i < diff;i++){
        // console.log(i)
        longerStart = longerStart.next
    }
    while(longerStart.data !== shorter.data){
        longerStart = longerStart.next
        shorter = shorter.next
    }

    return shorter
}

const ll1 = new LinkedList()
const ll2 = new LinkedList()

ll1.add(1)
ll1.add(2)
ll1.add(3)
// ll1.add(5)

ll2.add(7)
ll2.add(78)
ll2.add(79)
ll2.add(17)
ll2.add(2)
ll2.add(3)

console.log(getIntersection(ll1.head, ll2.head))
