
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

l1 = new ListNode(1, new ListNode(3, new ListNode(4)))
l2 = new ListNode(1, new ListNode(2, new ListNode(4)))
l3 = new ListNode()
fin = new ListNode()


while (l1.next !== null || l2.next !== null ){
    // check which of the vals are lower. Thats the one to use
    if (l1.val > l2.val) {
        fin.val = l1.val
        fin.next = l2
    }
    else {
        fin.val = l2.val
        fin.next = l1
        
    }
    l1 = l1.next
    l2 = l2.next
    console.log(fin)
}
// else {
//     l1.next===null  ? console.log('use l2 to finish this node') : console.log('use l1 to inishe this node')  
// }