
class Queue {
        constructor() {
            this.collection = [];
        }

        print(){
            return this.collection;
        }

        isEmpty(){
            return this.length === 0 ;
        }
        enqueue(value){
            this.collection.push(value);
            return value;
        }

        dequeue(){
            return this.collection.shift();
        }

        front(){
            return this.collection[0]
        }

        size(){
            return this.collection.length;
        }
}

let printQueue = new Queue();

console.log(`pushed:`, printQueue.enqueue('document1'));
console.log(`pushed:`, printQueue.enqueue('document2'));
console.log(`pushed:`, printQueue.enqueue('document3'));
console.log(`pushed:`, printQueue.enqueue('RailWayTickets'));

console.log(`is Queue empty: `,printQueue.isEmpty());
console.log(`queue: `, printQueue.print());
console.log(`Queue size: `, printQueue.size());
console.log(`front:`,printQueue.front());

console.log(`dequeue:`,printQueue.dequeue());
console.log(`Queue size: `, printQueue.size());
console.log(`front:`,printQueue.front());
