function sort(arr) {
    arr.sort((a, b) => a - b); // 排序
    let result = []; // 排序后的结果
    let odd = 1, even = 0; // 记录奇数、偶数位下标
    arr.forEach(item => { // 对数组进行遍历
        if (item % 2) { // 奇数
            result[odd] = item;
            odd += 2
        } else {
            result[even] = item;
            even += 2
        }
    });
    return result;
}
