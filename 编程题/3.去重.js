// 题目描述
// 编写一个Javascript函数，传入一个数组，对数组中的元素进行去重并返回一个无重复元素的数组，数组的元素可以是数字、字符串、数组和对象。举例说明：
// 1. 如传入的数组元素为[123, "meili", "123", "mogu", 123],则输出：[123, "meili", "123", "mogu"]
// 2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"],则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
// 3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"],则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]

function removeDuplicate(arr) {
    return [...(new Set(arr.map(n => JSON.stringify(n))))].map(n => JSON.parse(n))
}
console.log(removeDuplicate([123, "meili", "123", "mogu", 123]));
console.log(removeDuplicate([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]));
console.log(removeDuplicate([123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]));

