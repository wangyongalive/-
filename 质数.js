// 大于1的自然数  除了1和自身不能够被其他整除
// 利用高阶函数中的记忆函数  将之前的结果保存在一个对象中
// 以空间换时间  加快查询的速度
function isPrime(value) {
    if (!isPrime.answers) isPrime.answers = {};
    if (isPrime.answers[value] !== undefined) {
        return isPrime.answers[value]
    }
    let prime = value != 1;  //1 不是素数   默认是质数
    for (let i = 2; i < Math.sqrt(value); i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime
}

console.log(isPrime(5));
console.log(isPrime.answers[5]);
console.log(isPrime(10));
console.log(isPrime.answers[10]);

