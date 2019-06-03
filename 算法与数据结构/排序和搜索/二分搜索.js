import {Compare, DOES_NOT_EXIST, defaultCompare} from "../util.js";

export default function binSearch(arr, val, compareFn = defaultCompare) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (compareFn(arr[mid], val) === Compare.equal) { // 相等
            return mid;
        } else if (compareFn(arr[mid], val) === Compare.moreThan) { //
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return DOES_NOT_EXIST;
}
console.log(binSearch([1, 2, 3, 4, 5, , 6], 5));

