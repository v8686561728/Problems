class Node{
    constructor(val){
        this.val=val||null
        this.next=null
    }
}

const node1={
    val:2,
    next:{
        val:3,
        next:null
    }
}
const node2={
    val:9,
    next:{
        val:3,
        next:null
    }
}
const addnumbers = (l1, l2) => {
  let carry = 0;
  let prevNode=new Node()
  const head=prevNode
  while (l1 || l2 || carry) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const digit = sum % 10;
    console.log(digit)
    const currentNode=new Node(digit)
    prevNode.next=currentNode
    prevNode=currentNode


  }
  return head.next
};

var reverseList = function(head) {
    
   
    if (!head) return null;
    if (!head.next) return head;
    let rev = reverseList(head.next);
    head.next.next = head;
    console.log(head)
    head.next = null;
    console.log(head)
    return rev;
};
reverseList(node1)
// console.log(reverseList(addnumbers(reverseList(node1),reverseList(node2))))