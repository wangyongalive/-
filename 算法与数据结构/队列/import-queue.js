import Queue from './Queue.js';

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());
console.log(queue.count);
