{
    // ... 每次只能展开最外层的数组，被 [].concat 后，arr 就扁平化一次
    // var arr = [1, [2, [3, 4]]];
    // console.log([].concat(...arr)); // [1, 2, [3, 4]
    let flatten = function (arr) {
        while (arr.some(item => Array.isArray(item))) {
            arr = [].concat(...arr);
        }
        return arr;
    }
}
{
    // 利用 toString 把数组变成以逗号分隔的字符串，然后遍历数组把每一项再变回原来的类型。
    const flatten = (arr) => arr.toString().split(',').map((item) => +item);
}
{
    // 普通递归
    const flatten = (arr) => {
        let result = [];
        arr.forEach((item) => {
            if (Array.isArray(item)) {
                result = result.concat(flatten(item));
            } else {
                result.push(item)
            }
        })
        return result;
    };

    const arr = [1, [2, [3, 4], [5, 8]]];
    console.log(flatten(arr));
}