function bubble(arr) {
    // 冒泡排序
    for (let i = arr.length - 1; i > 0; i--) { // 外边界
        for (let j = 0; j < i; j++) {  //  内边界
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr
}

console.log(bubble([2, 3, 5, 3, 8, 95, 8]));
