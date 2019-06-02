import Stack from './stack-obj.js';

// 把方法写在原型上
Number.prototype.dec2bin = function () {
    let dec = this;
    let result = '';
    let stack = new Stack();
    // 对被除数一直除 并对商取整数 直到结果为0
    while (dec) {
        stack.push(dec % 2);
        dec = Math.floor(dec / 2);
    }
    // 出栈
    while (!stack.isEmpty()) {
        result += stack.pop().toString();
    }
    return result;
};

console.log((233).dec2bin());
console.log((10).dec2bin());
console.log((1000).dec2bin());
