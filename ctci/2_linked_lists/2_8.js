class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}


const findBeginning = (head) => {
    let fast = head;
    let slow = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            break
        }
    }
    if(fast === null || fast.next === null){
        return null;
    }

    slow = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
}