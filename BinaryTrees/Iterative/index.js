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
const inorderTreeTraversal = (node) => {
    if(!node)
        return;
    let stack = [];
    while(node || stack.length > 0){
        while(node){
            stack.push(node);
            node = node.left
        }
        node = stack.pop();
        console.log(node.data);
        node = node.right;        
    }
};

inorderTreeTraversal(root);

console.log(`------------------------------------------`)

//Preorder tree traversal (Visit Left Right)
const preorderTreeTraversal = (node) => {
    if(!node)
        return;
    let stack = [];
    while(node || stack.length > 0){
        while(node){
            console.log(node.data)
            stack.push(node);
            node = node.left
        }
        node = stack.pop();
        node = node.right;        
    }
};

preorderTreeTraversal(root);

console.log(`------------------------------------------`)

//Postorder tree traversal (left Right Visit)
const postorderTreeTraversal = (node) => {
    if(!node)
        return;
    let workingStack = [];
    let postOrderStack = [];
    while(node || workingStack.length > 0){
        while(node){            
            workingStack.push(node);
            postOrderStack.push(node);
            node = node.right;
        }
        node = workingStack.pop();
        node = node.left;        
    }

    while (postOrderStack.length > 0) {
        let result = postOrderStack.pop();
        console.log(result.data);
    }
};

postorderTreeTraversal(root);