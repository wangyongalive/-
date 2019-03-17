// 数字可以被隐式地封装成包装对象 Number  要实现链式调用可以将方法注册在Number对象的原型上，并return
Number.prototype.add = function (num) {
    return this + num;
}

Number.prototype.minus = function (num) {
    return this - num;
};

console.log((1).add(2).minus(1));