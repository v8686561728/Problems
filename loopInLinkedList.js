const detectLoop=(head)=>{
    let slow=head
    let fast=head

    while(fast!=null && fast.next!=null){
         slow=slow.next
         fast=fast.next.next
        if(fast==slow){
            return slow
        }
    }
return null
}

const detectFirstNode=(head)=>{
    let meet = detectLoop(head)
    let start = head
     
    while(start!=meet){
        start=start.next
        meet=meet.next
    }
    return start
}