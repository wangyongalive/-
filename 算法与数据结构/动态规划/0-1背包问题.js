// 状态转移方程
// f[i][v]=max{f[i-1][v],f[i-1][v-c[i]]+w[i]}
// 这个方程非常重要，基本上所有跟背包相关的问题的方程都是由它衍生出来的。
// 所以有必要将它详细解释一下：“将前i件物品放入容量为v的背包中”这个子问题，
// 若只考虑第i件物品的策略（放或不放），那么就可以转化为一个只牵扯前i-1件物品的问题。
// 如果不放第i件物品，那么问题就转化为“前i-1件物品放入容量为v的背包中”，价值为f[i-1][v]；
// 如果放第i件物品，那么问题就转化为“前i-1件物品放入剩下的容量为v-c[i]的背包中”，
// 此时能获得的最大价值就是f[i-1][v-c[i]]再加上通过放入第i件物品获得的价值w[i]。


// 找出解
function findValues(n, capacity, kS, weights) {
    let i = n;
    let k = capacity;
    while (i > 0 && k > 0) {
        if (kS[i][k] !== kS[i - 1][k]) {
            console.log(
             'item ' + i + ' can be part of solution w,v: ' + weights[i - 1] + ',' + values[i - 1]
             );
            i--;
            // console.log(kS[i][k]);
            // k -= kS[i][k];
            k -= weights[i - 1];

            // console.log(k);
        } else {
            i--;
        }
    }
}

function knapSack(capacity, weights, values, n) {
    const kS = [];
    for (let i = 0; i <= n; i++) {
        kS[i] = [];         // 构建一个二维矩阵
    }
    for (let i = 0; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) { // 0行 0列都初始化为0
                kS[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                const a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
                const b = kS[i - 1][w];
                kS[i][w] = a > b ? a : b; // 物体i 选择和不选择中 取最大值
            } else {
                kS[i][w] = kS[i - 1][w];
            }
        }
    }
    findValues(n, capacity, kS, weights);
    return kS[n][capacity];
}

const values = [3, 4, 5];
const weights = [2, 3, 4];
const capicity = 5;
knapSack(capicity, weights, values, values.length)


