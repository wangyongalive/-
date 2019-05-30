// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
// 网格中的障碍物和空位置分别用 1 和 0 来表示。
// 说明：m 和 n 的值均不超过 100。
// 示例 1:
// 输入:
//     [
//         [0,0,0],
//         [0,1,0],
//         [0,0,0]
//     ]
// 输出: 2
// 解释:
// 3x3 网格的正中间有一个障碍物。
// 从左上角到右下角一共有 2 条不同的路径：
// 1. 向右 -> 向右 -> 向下 -> 向下
// 2. 向下 -> 向下 -> 向右 -> 向右


// 动态规划
let uniquePathsWithObstacles = (obstacleGrid) => {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    if (obstacleGrid[0][0] == 1 || obstacleGrid[m - 1][n - 1] == 1) {
        return 0;
    }
    // 创建一个二维数组
    let arr = new Array();
    let flag2 = false; // 0列的标志位
    for (let i = 0; i < m; i++) {
        arr[i] = [...Array(n).fill(0)]; // 填充为0
        let flag = false; // 0行的标志位
        for (let j = 0; j < n; j++) {
            if (i == 0) { // 第一行
                if (obstacleGrid[i][j]) {
                    arr[i][j] = 0;
                    flag = true; // 标记 后面都要为 0
                }else if(!flag) {
                    arr[i][j] = 1;
                }
            } else if (j == 0) {
                if (obstacleGrid[i][j]) {
                    arr[i][j] = 0;
                    flag2 = true;
                }else if(!flag2) {
                    arr[i][j] = 1;
                }
            } else {
                arr[i][j] = obstacleGrid[i][j];
            }
        }
    }

    // 要从第一行 第一列开始
    for (let i = 1; i < m; i++)
        for (let j = 1; j < n; j++) {
            if (arr[i][j] == 1) { // 为1 表示有障碍
                arr[i][j] = 0;
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
            }
        }
    return arr[m - 1][n - 1]
};
// uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
// console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
// console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
// console.log(uniquePathsWithObstacles([[0, 0], [1, 0]]));
// console.log(uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]]));
console.log(uniquePathsWithObstacles([[0, 1, 0, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]));
