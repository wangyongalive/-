import Deque from './Deque.js';

function check(str) {

    if (str === null || str === undefined || str.length === 0) {
        return false;
    }
    const deque = new Deque();
    for (let i = 0; i < str.length; i++) {
        deque.addBack(str[i]); // 将字符串加入到队列中
    }
    while (deque.size() > 1) {
        let front = deque.removeFront();
        let back = deque.removeBack();
        if (front !== back) {
            return false
        }
    }
    return true;
}

console.log(check('kayak')); // true
console.log(check('1')); // true
console.log(check('123')); // true
