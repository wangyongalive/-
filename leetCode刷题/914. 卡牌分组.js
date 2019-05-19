// 914. 卡牌分组
// 给定一副牌，每张牌上都写着一个整数。
// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

// 1.先统计词频率
// 2.再求词频之间的最大公约数 如果大于2 则返回true 否则返回false
let cardGroup = (arr) => {
    let count = {};
    for (let i of arr) {
        if (count[i]) {
            count[i]++;
        } else {
            count[i] = 1;
        }
    }
    let values = Object.values(count);
    const min = Math.min(...values);
    if (min < 2) return false;

    // 防止序列号溢出
    for (let i = 0; i < values.length - 1; i++) {
        if (gcd(values[i], values[i + 1]) < 2) {
            return false;
        }
    }
    return true;
};
console.log(cardGroup([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(cardGroup([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(cardGroup([1]));
console.log(cardGroup([1, 1, 2, 2, 2, 2]));

// 辗转相除法求最大公约数
function gcd(a, b) {
    let temp;
    while (b != 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}
