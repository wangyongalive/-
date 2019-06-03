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
