// es5的方法
const isArray = function (value) {
    return Object.prototype.toString.call(value);
}
// 截取字符串
console.log(isArray([]).substr(8, 5));

// es6的方法
console.log(Array.isArray([]));//true