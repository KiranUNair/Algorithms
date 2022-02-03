class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//Inorder tree traversal (Left Visit Right)
const inorderTraversal = (node) => {
    if (!node) {
        return;
    }
    inorderTraversal(node.left);
    console.log(node.data);
    inorderTraversal(node.right);
};

inorderTraversal(root);

console.log(`-----------------------------`);

//Preorder tree traversal (Visit Left Right)
const preorderTraversal = (node) => {
    if (!node) {
        return;
    }
    console.log(node.data);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
};

preorderTraversal(root);

console.log(`-----------------------------`);

//Postorder tree traversal (Visit Left Right)
const postorderTraversal = (node) => {
    if (!node) {
        return;
    }
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.data);
};

postorderTraversal(root);

console.log(`-------------------------------`);
//Levelorder tree traversal
const levelorderTraversal = (node) => {
    if(!node)
        return;
    let queue = [];
    queue.push(node);
    while (queue.length > 0) {
        let temp = queue.shift();
        console.log(temp.data);
        if(temp.left)
            queue.push(temp.left);
        if(temp.right)
            queue.push(temp.right);
    }
};

levelorderTraversal(root);