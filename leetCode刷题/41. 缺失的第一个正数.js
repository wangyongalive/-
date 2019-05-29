// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
// 示例 1:
// 输入: [1,2,0]
// 输出: 3
// 示例 2:
// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:
// 输入: [7,8,9,11,12]
// 输出: 1

let firstMissingPositive = (arr) => {
    arr = arr.filter(item => item > 0)
    // 正整数数组是不是为空
    if (arr.length) {
        // 升序，目的：方便从左到右取最小值arr[0]
        arr.sort((a, b) => a - b);
        // 如果第一个元素不为1，返回1
        if (arr[0] !== 1) {
            return 1
        } else {
            // 从左边开始遍历，只要下一个元素和当前元素差值>1说明当前元素的下一个值（+1）
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i + 1] - arr[i] > 1) {
                    return arr[i] + 1
                }
            }
            // 如果数组是连续的正整数[1,2,3,4,5,6]
            return arr.pop() + 1;
        }
    } else {
        return 1
    }
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]));
