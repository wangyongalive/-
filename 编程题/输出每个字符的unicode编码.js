const str = 'hello world';
const array = str.split('').map(letter => {
    //  charCodeAt  返回指定地址的unicode编码  如果没有指定 默认是0
    return letter.charCodeAt();
}).sort(function () {
    return arguments[1] - arguments[0];
});
console.log(array);
