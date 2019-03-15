const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 取当前最后一个数组  把他和前面的元素进行交换
for (let i = arr.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i));
    [arr[i], arr[random]] = [arr[random], arr[i]];
}
console.log(arr);
