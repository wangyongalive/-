const unique = (arr, result = []) => {
    const obj = {};
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (!obj[arr[i]]) { // 键没有,则添加
            obj[arr[i]] = true;
            result.push(arr[i]);
        } else if (!result.includes(arr[i])) { // 如果没有值 则添加
            result.push(arr[i]);
        }
    }
    return result;
};
console.log(unique([1, 2, 2, 3, '1', 5, 4, 3, 2]));
