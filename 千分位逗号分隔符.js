let str = '123456';
let reg = /(?=(\B\d{3})+$)/g;
console.log(str.replace(reg, ','));





