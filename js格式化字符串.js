const print = function (format, arr) {
    if (arguments.length < 2) {
        return format;
    }
    for (let key in arr) {
        let value = arr[key];
        if (value != undefined) {
            // 花括号是一个特殊的符号 需要使用\\ 转义
            format = format.replace(new RegExp('\\{' + key + '\\}'), value);
        }
    }
    return format;
}

console.log(print('我是第{0}元素,{1}', ['1111', '222']));