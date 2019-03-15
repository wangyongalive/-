let json = {
    "name": "pingwen",
    "age": 28,
    "color": ["red", "yellow", "blue"]
}
// 当函数放回值是undefined时候，相应的键在序列化时候回被跳过。
// 当遍历到json数据中的数组时候 也会有键和值，当返回undefined时候，替换为null
let result = JSON.stringify(json, function (key, value) {
    if (key == 'name') {
        return undefined;
    }
    if (key === '0') {
        return undefined;
    }
    return value;
})

console.log(result);