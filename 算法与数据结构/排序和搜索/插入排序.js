//插入排序
function InsertionSort(arr) {
    if (arr == null || arr.length < 2) {
        return arr;
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr;
}

console.log(InsertionSort([2, 3, 5, 3, 8, 95, 8]));
