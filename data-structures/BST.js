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
}

const bst = new BST();

bst.add(4);
bst.add(3);
bst.add(7);
bst.add(12);

console.log(`max:`, bst.findMax());
console.log(`min:`,bst.findMin());

console.log(`remove max item:`, bst.remove(12));
console.log(`Now max is:`, bst.findMax());

