// // 变量提升 a, fn
// console.log(a); // undefined
// var a = 12;
//
// function fn() {
//     // 变量提升 a
//     console.log(a); // undefined
//     var a = 13;
// }
//
// fn();
// console.log(a); // 12


// console.log(a); // undefined
// var a = 12;
//
// function fn() {
//     // 变量提升 a
//     console.log(a); // 12
//     a = 13;
// }
//
// fn();
// console.log(a); // 13


// 报错
// 变量提升  只有fn  但是a没有提升
// console.log(a); // a is not defined
// a = 12;
//
// function fn() {
//     // 变量提升 a
//     console.log(a); // 12
//     a = 13;
// }
//
// fn();
// console.log(a); // 13


// var foo = 1;
//
// function bar() {
//     // 变量提升 foo undefined
//     if (!foo) {
//         var foo = 10;
//     }
//     console.log(foo);
// }
//
// bar();  // 10


// // 变量提升:var a; var b;var c; test=AAAFFF111
// var a = 10, b = 11, c = 12;
//
// function test(a) {
//     // 私有作用域：a=10 var b;
//     a = 1; // 私有作用域
//     var b = 2; // 私有作用域
//     c = 3; // 全局
// }
//
// test(10);
// console.log(a); // 10
// console.log(b); // 11
// console.log(c); // 3


// // 变量提升：var a;<==>window.a = undefined
// if (!('a' in window)) { // 'a' in window 为true 条件不成立
//     var a = 1;
// }
// console.log(a); // undefined


// 变量提升: var a;b=AAAFFF111
// var a = 4;
// function b(x, y, a) {
//     // 私有作用域：x=1，y=2,a=3
//     console.log(a); // 3
//     arguments[2] = 10; // a=10
//     console.log(a); // 10
// }
//
// a = b(1, 2, 3); // undefined 函数没有返回值
// console.log(a); // undefined


// 逻辑或
// 变量提升 var foo;
// var foo = 'hello';
// (function (foo) {
//     // 形参赋值
//     // 私有作用域：foo=‘hello’
//     console.log(foo); // hello
//     var foo = foo || 'world';
//     console.log(foo); // hello
// })(foo);
// console.log(foo); // hello

/*
* 逻辑与 逻辑或
* &&的优先级要大于||
* 1.在条件判断中：
* &&：所有条件都为真，整体才会真
* ||: 只要有一个为真，整体就为真
* 2.在赋值操作中：
* ||： A||B 首先看A的真假，A为真
* 返回A的值，否则返回B的值
* &&: A&&B A为真返回A,否则返回B
*
*逻辑或实现默认值:
*逻辑与实现函数调用
* function(num,callback){
*   num = num||0;
*   callback&&callback()
* }
*
* */

// var a = 9;
// function fn() {
//     a = 0;
//     return function (b) {
//         return b + a++;
//     }
// }
// var f = fn();
// console.log(f(5)); // 5
// console.log(fn()(5)); //5
// console.log(f(5)); // 6
// console.log(a); //2


// var ary = [1, 2, 3, 4];
// function fn(ary) {
//     ary[0] = 0;
//     ary = [0]; // ary指向了另外一个空间 [0]
//     ary[0] = 100;
//     return ary;
// }
// var res = fn(ary);
// console.log(ary); // [ 0, 2, 3, 4 ]
// console.log(res); // [ 100 ]


// function fn(i) {
//     return function (n) {
//         console.log(n + (i++));
//     }
// }
// var f = fn(10);
// f(20); // 30
// fn(20)(40); // 60
// fn(30)(50); // 80
// f(30); // 41


// var num = 10;
// var obj = {num: 20};
// obj.fn = (function (num) {
//     // num私有变量
//     this.num = num * 3; // this:window
//     num++;
//     return function (n) {
//         this.num += n;
//         num++;
//         console.log(num); // 闭包
//     }
// })(obj.num);
// var fn = obj.fn;
// fn(5); // 22  this <-->window
// obj.fn(10); // 23  this<---> obj
// console.log(num); // 65 浏览器中是65
// console.log(obj.num); // 30

// var fullName = 'language';
// var obj = {
//     fullName: 'javascript',
//     prop: {
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// }
// console.log(obj.prop.getFullName()); // this:obj.prop
// // obj.prop.fullName==undefined
// var test = obj.prop.getFullName;
// console.log(test()); // this:window==>window.fullName


// function fun() {
//     this.a = 0;
//     this.b = function () {
//         alert(this.a);
//     }
// }
//
// fun.prototype = {
//     b: function () {
//         this.a = 20;
//         alert(this.a);
//     },
//     c: function () {
//         this.a = 30;
//         alert(this.a);
//     }
// }
//
// var my_fun = new fun();
// my_fun.b(); //=> 私有的方法B this:my_fun my_fun.a='0'
// my_fun.c(); //=> 公有的方法c this:my_fun my_fun.a ='30'
// // (把当前实例私有属性A修改为30)


// (function () {
//     let pro = Array.prototype;
//     // 数组去重
//     pro.myDistinct = function myDistinct() {
//         let obj = {};
//         // this 指向当前的实例
//         for (let i = 0; i < this.length; i++) {
//             let item = this[i];
//             if (typeof obj[item] !== 'undefined') { // 已经存在了
//                 this[i] = this[this.length - 1];
//                 this.length--; // 将最后一项移动到当前位置  减少复杂度
//                 i--;
//                 continue;
//             }
//             obj[item] = item;
//         }
//         obj = null; // 释放堆内存
//         return this;
//     }
// })();
// console.log([1, 2, 3, 4, 4].myDistinct());

// document.parentNode 和 document.parentnode 的区别
// document.parentNode // 文档的父节点 null
// document.parentnode // 没有这个属性 undefined


