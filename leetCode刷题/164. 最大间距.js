// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。
//
// 如果数组元素个数小于 2，则返回 0。
//
// 示例 1:
//
// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
// 示例 2:
//
// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。

// 边比较 边确定最大值
function bubble(arr) {
    if (arr.length < 2) {
        return 0;
    }
    let max = 0;
    for (let i = arr.length - 1; i > 0; i--) { // 外边界
        for (let j = 0; j < i; j++) {  //  内边界
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        if (i < (arr.length - 1)) {  // 第一趟 只有一个值是确定下来的
            max = (arr[i + 1] - arr[i]) > max ? (arr[i + 1] - arr[i]) : max;
        }
    }
    return Math.max(max, arr[1] - arr[0]); // i 没法执行到0
}


console.log(bubble([3, 6]));
