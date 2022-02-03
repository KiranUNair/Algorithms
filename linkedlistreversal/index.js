//Reverse a singly linked list
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const reverseLinkedList = (node) => {
    let prev = null;
    let current = node;  
    
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

const printLinkedList = (node) => {
    let result = '';
    while (node !== null) {
        result += node.next === null ? node.data : node.data + ' -> ';                
        node = node.next;       
    }
    return console.log(result);
};

printLinkedList(head);
printLinkedList(reverseLinkedList(head));


//Revese a sub list
const reverseSubList = (node, start, end) => {
    let count = 1;
    let current = node;
    let last_of_firstlist = null;
    while (current !== null && count !== start) {
        last_of_firstlist = current;
        current = current.next;
        count++;        
    }
    let headSubList = current;
    while (current !== null && count !== end) {        
        current = current.next;
        count++;        
    }
    let first_of_lastlist = current.next;    
    last_of_firstlist.next = reverse(headSubList, end - start);
    count = 1;
    let temp = node;
    while (temp!== null && count !== end) {
        temp = temp.next;
        count++;
    }
    temp.next = first_of_lastlist;
    printLinkedList(node);
};

const reverse = (headSubList, distance) => {
    let prev = null;
    let current = headSubList;
    while (current !== null && distance >= 0) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        distance--;
    }
    return prev;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

printLinkedList(head);
reverseSubList(head, 2, 4);

//Palindrome Linked list
head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(4);
head.next.next.next.next.next = new Node(3);
head.next.next.next.next.next.next = new Node(2);

const isPalindromeLinkedList = (node) => {
    let slow = node;
    let fast = node;

    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let headSecondHalf = reverseLinkedList(slow);
    let headFirstHalf = node;

    while (headFirstHalf !== null && headSecondHalf !== null) {
        if (headFirstHalf.data !== headSecondHalf.data) {
            return console.log(`Given Linked list is not a palindrome`)
        }
        headFirstHalf = headFirstHalf.next;
        headSecondHalf = headSecondHalf.next;
    }
    if(headFirstHalf === null && headSecondHalf === null)
        return console.log(`Given Linked list is a palindrome`);
}

isPalindromeLinkedList(head);