// 给定一个整数数组,判断其中是否有3个数和为N
// 输入描述:
//     输入为一行
// 逗号前为一个整数数组，每个元素间用空格隔开；逗号后为N
// 输出描述:
//     输出bool值
// True表示存在3个和为N的数
// False表示不存在3个和为N的数
//
// 输入例子1:
//     1 2 3 4 5,10
// 输出例子1:
//     True
let fun = (str) => {
    let arr = str.split(',')[0].split(' ').map(a => +a),
        sum = +str.split(',')[1];
    arr = arr.sort((a, b) => a - b); // 排序

    let arr_f3 = arr.slice(0, 3).reduce((pre, cur) => pre + cur);
    if (arr_f3 > sum) {
        return false;
    }
    let arr_l3 = arr.slice(arr.length - 3).reduce((pre, cur) => pre + cur);
    if (arr_l3 < sum) {
        return false;
    }

    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            for (let z = j + 1; z < arr.length; z++) {
                if (arr[i] + arr[j] + arr[z] === sum) {
                    return true;
                }
            }
    return false;
};
console.log(fun(`1 2 7 4 5,10`));



