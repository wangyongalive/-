import {defaultEquals, DOES_NOT_EXIST} from '../util.js';

export default function seqSearch(arr, val, equalsFn = defaultEquals) {
    for (let i = 0; i < arr.length; i++) {
        if (equalsFn(arr[i], val)) { // 比较函数
            return i; // 返回index
        }
    }
    return DOES_NOT_EXIST; // 不存在
}

console.log(seqSearch([2, 3, 5, 3, 8, 95, 8], 3));
