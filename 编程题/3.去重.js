function removeDuplicate(arr) {
    return [...(new Set(arr.map(n => JSON.stringify(n))))].map(n => JSON.parse(n))
}
console.log(removeDuplicate([123, "meili", "123", "mogu", 123]));
console.log(removeDuplicate([123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]));
console.log(removeDuplicate([123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]));

