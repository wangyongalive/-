import {Compare, defaultCompare, DOES_NOT_EXIST} from '../util.js';

function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (compareFn(element, value) === Compare.lessThan) {
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        }
        if (compareFn(element, value) === Compare.moreThan) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        }
        return mid;
    }
    return DOES_NOT_EXIST;
}

export function binarySearch(array, value, compareFn = defaultCompare) {
    const low = 0;
    const high = array.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17];
console.log(binarySearch(arr, 5));
