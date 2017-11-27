class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.length = 0;
        this._head = null;
    }

    size(){
        return this.length;
    }

    head(){
        return this._head.element;
    }

    isEmpty(){
        return this.length === 0;
    }

    add(element){
        let node = new Node(element);

        if (this._head === null) {
            this._head = node ;
        } else {
            let currentNode = this._head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.length++;
        return true
    }

    remove(element){
        let currentNode = this._head,
            previousNode;

        if ( currentNode === element) {
            this._head = currentNode.next;
        } else {
            while ( currentNode !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;

            }

            previousNode.next = currentNode.next;

        }

        this.length--;
        return false
    }

    indexOf(element){
        let currentNode = this._head,
            index = -1;

        while (currentNode){
            index++;

            if(currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    }

    elementAt(index){
        let currentNode = this._head,
            count = 0;

        while (count < index ) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element
    }

    addAt(index , element){
        let node = new Node(element),
            currentNode = this._head,
            previousNode,
            currentIndex = 0;

        if ( index > this.length) {
            return false;
        }

        if ( index === 0){
            this._head = currentNode.next
        }else {
            while ( currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }

        this.length++;
        return node.element;


    }

    removeAt(index){
        let currentNode = this._head,
            previousNode,
            currentIndex = 0;

        if ( index < 0 || index > this.length) {
            return false;
        }

        if ( index === 0){
            this._head = currentNode.next
        }else {
            while ( currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
        return currentNode.element;
    }
}

let programmingLanguages = new LinkedList();


console.log(`isLinkedList empty:`,programmingLanguages.isEmpty());
console.log( '//adding 5 items');
programmingLanguages.add('JavaScript');
programmingLanguages.add('GoLang');
programmingLanguages.add('C++');
programmingLanguages.add('PHP');
console.log(`isLinkedList empty:`,programmingLanguages.isEmpty());
console.log(`index of PHP:`,programmingLanguages.indexOf('PHP'));

console.log(programmingLanguages.addAt(2, 'C#'));
console.log(`size`,programmingLanguages.size());
console.log(programmingLanguages.elementAt(2));

console.log(`index of PHP:`,programmingLanguages.indexOf('PHP'));
console.log(programmingLanguages.removeAt( programmingLanguages.indexOf('PHP')));
console.log(`index of PHP:`,programmingLanguages.indexOf('PHP'));
console.log(`size:`,programmingLanguages.size());
console.log(programmingLanguages.head());



