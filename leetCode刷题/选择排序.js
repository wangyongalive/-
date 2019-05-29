function SelectionSort(arr) {
    if (arr == null || arr.length < 2) {
        return arr;
    }
    for (let i = 0; i < (arr.length - 1); i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(SelectionSort([2, 3, 5, 3, 8, 95, 8]));
