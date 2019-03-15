const print = function (format, arr) {
    if (arguments.length < 2) {
        return format;
    }
    for (let key in arr) {
        let value = arr[key];
        if (value != undefined) {
            format = format.replace(new RegExp('\\{' + key + '\\}'), value);
        }
    }
    return format;
}

console.log(print('我是第{0}元素,{1}', ['1111', '222']));