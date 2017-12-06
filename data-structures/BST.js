class Node {
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;

        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = (node) => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                }else if (data > node.data) {
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    } if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null
                }
            };
            return searchTree(node);
        }
    }

    findMin(){
        let current = this.root;

        while( current.left !== null){
            current = current.left;
        }

        return current.data
    }

    findMax() {
        let current = this.root;

        while( current.right !== null){
            current = current.right;
        }

        return current.data
    }
    isPresent(data){
        let currentNode = this.root;

        while ( currentNode ) {
            if (data === currentNode.data) {
                return true;
            } else if ( data < currentNode.data) {
                currentNode = currentNode.left;
            } else if ( data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }

        return false;
    }

    remove(data){
        const removeNode = (node,data) => {
            if ( node === null ) {
                return null
            }

            if (data === node.data) {
                //node has no children
                if (node.left === null && node.right === null ) {
                    return null;
                }
                //node has no left children
                if (node.left === null) {
                    return node.right;
                }
                //node has no right children
                if (node.right === null) {
                    return node.left;
                }

                //node has two children
                var tempNode = new Node(node.right)

                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }else if (data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };

        return removeNode(this.root, data);
    }

    isBalanced(){
        return this.findMinHeight() >= this.findMaxHeight() -1;
    }

    findMinHeight(node = this.root){
        if (node === null){
            return -1;
        }
        let left = this.findMinHeight(node.left),
            right = this.findMinHeight(node.right);

        if (left < right){
            return left + 1;
        } else {
            return right +1;
        }

    }

    findMaxHeight(node = this.root){
        if (node === null){
            return -1;
        }
        let left = this.findMinHeight(node.left),
            right = this.findMinHeight(node.right);

        if (left > right){
            return left + 1;
        } else {
            return right +1;
        }
    }

    inOrder(){
        if (this.root === null){
            return null;
        } else {
            let result = [];
            const traverseInOrder = (node) => {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            };
            traverseInOrder(this.root);
            return result;
        }
    }

    preOrder(){
        if (this.root === null){
            return null;
        } else {
            let result = [];
            const traversePreOrder = (node) => {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        }
    }

    postOrder(){
        if (this.root === null){
            return null;
        } else {
            let result = [];
            const traversePostOrder = (node) => {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }

    levelOrder(){
        let result = [];
        let Q = [];

        if (this.root !== null){
            Q.push(this.root);
            while( Q.length > 0 ) {
                let node = Q.shift();
                result.push(node.data);
                node.left && Q.push(node.left);
                node.right && Q.push(node.right);
            }
            return result;
        } else {
            return null;
        }
    }
}

const bst = new BST();

bst.add(4);
bst.add(3);
bst.add(7);
bst.add(12);
bst.add(2);
bst.add(16);
bst.add(24);

console.log(`max:`, bst.findMax());
console.log(`min:`,bst.findMin());

// console.log(`remove max item:`);
// bst.remove(12);
// console.log(`Now max is:`, bst.findMax());

console.log(`inOrder:`, bst.inOrder());
console.log(`postOrder:`, bst.postOrder());
console.log(`preOrder:`, bst.preOrder());
console.log(`levelOrder:`, bst.levelOrder());


