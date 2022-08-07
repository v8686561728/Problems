var reverseList = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    let rev = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return rev;
};