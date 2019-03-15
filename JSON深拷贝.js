let deepCopy = function (obj) {
    return JSON.parse(JSON.stringify(obj));
}
// 拷贝对象的属性值不能是undefined NaN Infinity
// 不能是函数 变量 对象实例或正则表达式
let jsonObj = {
    a: "ss",
    b: "dd",
    c: [
        {dd: "css", ee: "cdd"},
        {mm: "ff", nn: "ee"}
    ]
}
let result = deepCopy(jsonObj);
result.a = '1';
console.log(result);
