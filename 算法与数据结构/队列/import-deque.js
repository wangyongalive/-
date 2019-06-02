import Queue from './Deque.js';

const deque = new Queue();
console.log(deque.isEmpty()); // true
deque.addBack('John'); // 向队尾添加元素
deque.addBack('Jack');  // 向队尾添加元素
console.log(deque.toString()); // 打印元素
deque.addBack('Camila'); // 向队尾添加元素
console.log(deque.toString()); // 打印元素
console.log(deque.size()); // 3
console.log(deque.isEmpty()); // false
deque.removeFront(); // 移除队首
console.log(deque.toString()); // 打印元素
deque.removeBack(); // 移除队尾
console.log(deque.toString()); // 打印元素
deque.addFront('John'); // 向队首添加元素
console.log(deque.toString()); // 打印元素
deque.addFront('John2'); // 向队首添加元素
console.log(deque.toString()); // 打印元素
console.log(deque.lowestCount); //
