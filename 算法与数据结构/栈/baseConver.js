import Stack from './stack-obj.js';

// 10进制变为其他2-36的任意进制
Number.prototype.baseConver = function (base) {
    let dec = this;
    let result = '';
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let stack = new Stack();
    // 对被除数一直除 并对商取整数 直到结果为0
    while (dec) {
        stack.push(dec % base);
        dec = Math.floor(dec / base);
    }
    // 出栈
    while (!stack.isEmpty()) {
        result += digits[stack.pop()];
    }
    return result;
};

console.log((100345).baseConver(2));
console.log((100345).baseConver(8));
console.log((100345).baseConver(16));
console.log((100345).baseConver(35));
