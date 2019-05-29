// 215. 数组中的第K个最大元素
// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

function findKthLargest(arr, k) {
    // 冒泡排序 变种
    for (let i = arr.length - 1; i > arr.length - 1 - k; i--) { // 外边界
        for (let j = 0; j < i; j++) {  //  内边界
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr[arr.length - k];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
