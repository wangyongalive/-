import Stack from './stack-arr.js';

const stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // 8
stack.push(11);
console.log('size:', stack.size()); // 3
console.log(stack.isEmpty()); // false

console.log(stack.pop()); // 11
console.log(stack.pop()); // 8
console.log(stack.pop()); // 5
console.log(stack.pop()); // undefined
console.log(stack.pop()); // undefined



