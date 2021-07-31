function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

 var removeElements = function(head, val) {
     var dummy = new ListNode()
    //  var final = dummy
     while (head.next !== null){
         if(head.val !== val){
            dummy.val = head.val
            dummy.next= new ListNode()
         }
         head = head.next
     }
    dummy.next.val = head.val
    console.log(dummy)
};

removeElements(head=new ListNode(1,
    new ListNode(2, 
        new ListNode(2, 
            new ListNode(67, new ListNode(99))))),val=2)