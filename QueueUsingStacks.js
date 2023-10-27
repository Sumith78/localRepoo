class QueueUsingStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  
  enqueue(value) {
    this.inStack.push(value);
  }
  
  dequeue() {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }
}


const queue = new QueueUsingStacks();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
