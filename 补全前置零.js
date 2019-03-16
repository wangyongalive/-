let prefixZero = function (num, len) {
    return (new Array(len).fill(0).join('0') + num).slice(-len);
}
console.log(prefixZero(123, 5));