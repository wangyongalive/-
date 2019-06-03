function fibonacciMemozation(n) {
    const memo = [0, 1];
    const fibonacci = (n) => {
        if (memo[n] != null) return memo[n]; // 缓存
        return memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    };
    return fibonacci(n);
}

console.log(fibonacciMemozation(4));



