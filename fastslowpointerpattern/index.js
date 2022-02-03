//Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

head = new Node(5);
head.next = new Node(6);
head.next.next = new Node(7);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);
head.next.next.next.next.next = head.next.next;

const isCycle = (node) => {
    if(node === null)
        return;
    let slow = node;
    let fast = node;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)
            return console.log(`Given list is cyclic`);
    }
    return console.log(`There is no cycle in given list`);
}

isCycle(head);

//find Linked list cycle length
const findCycleLength = (node) => {
    if(node === null)
        return;
    let slow = node;
    let fast = node;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)            
            return console.log(`Length of cycle is ${getLength(slow)}`);
    }
    return console.log(`There is no cycle in given list`);
};

const getLength = (node) => {    
    let current = node;
    let cycleLength = 0;
    do {
        current = current.next;
        cycleLength++;
    } while (current !== node);    
    return cycleLength;
};

findCycleLength(head);

//find start node of cycle.
const findStartOfCycle = (node) => {
    if(node === null)
        return;
    let slow = node;
    let fast = node;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast)            
            return console.log(`Start of cycle is ${fetchStart(node, fast)}`);
    }
    return console.log(`There is no cycle in given list`);
}

const fetchStart = (node, fast) => {
    let slow = node;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow.data;
}

findStartOfCycle(head);

//Happy Number(medium)
let num = 23;

const isHappyNum = (num) => {
    let slow = num;
    let fast = num;
    do {
        slow = findSquareOfDigits(slow);
        fast = findSquareOfDigits(findSquareOfDigits(fast));
    } while (slow !== fast);
    return console.log(slow === 1);
};

const findSquareOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum = sum + Math.pow(digit, 2);
        num = Math.floor(num/10);
    }
    return sum;
};

isHappyNum(23);

//Middle of linked list
const findMiddleLinkedList = () => {
    const head = new Node(1);
    head.next = new Node(2);
    head.next.next = new Node(3);
    head.next.next.next = new Node(4);
    head.next.next.next.next = new Node(5);

    let slow = head;
    let fast = head;

    while (fast != null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;    
    }

    return console.log(`The middle node is ${slow.data}`);
};

findMiddleLinkedList();