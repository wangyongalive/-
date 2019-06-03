/*
* 函数工具
* */

export const Compare = {
    lessThan: -1,
    equal: 0,
    moreThan: 1
}

export function defaultCompare(a, b) {
    if (a === b) {
        return Compare.equal;
    }
    return a < b ? Compare.lessThan : Compare.moreThan;
}

export function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

export function reverseCompare(compareFn) {
    return (a, b) => compareFn(b, a);
}
