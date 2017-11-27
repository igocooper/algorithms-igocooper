
class Stack {
        constructor(){
            this.count = 0;
            this.storage = {}
        }

        push(value){
            this.storage[this.count] = value;
            this.count++;
            return this.storage[this.count -1];
        }

        pop(){
            let poped = this.storage[this.count -1];
            this.storage[this.count] = undefined;
            this.count--;
            return poped;
        }

        peak(){
            return this.storage[this.count -1]
        }

        length(){
            return this.count;
        }
}

let stack = new Stack();

console.log(`pushed:`, stack.push(5));
console.log(`pushed:`, stack.push(13));
console.log(`pushed:`, stack.push(54));
console.log(`pushed:`, stack.push(22));


console.log(`peak: `, stack.peak());

console.log(`stack length: `,stack.length());

console.log(`poped: `, stack.pop());
console.log(`poped: `, stack.pop());

console.log(`stack length: `, stack.length());