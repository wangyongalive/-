// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]


/*
* 解题思路：
* 1.建立一个映射表
* 2.如果有多个字母组合，显然不能使用for遍历  递归
* 3.利用js中提供的函数 进行递归
* */
let telComb = (str) => {
    // 建立电话号码键盘映射
    // 这里将前面两位随机初始化  方便后面会获取数据
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 特殊数据 特殊处理
    if (str.length == 0) {
        return [];
    } else if (str.length == 1) {
        return map[str].split('');
    }
    // 数据映射
    let code = [];
    str.split('').forEach(item => {
        code.push(map[item]);
    });
    // 递归
    let result = code.reduce((pre, cur) => {
        let tmp = [];
        for (let i of pre)
            for (let j of cur) {
                tmp.push(`${i}${j}`);
            }
        return tmp
    })
    return result;
}
console.log(telComb('234'));
console.log(telComb('2'));
console.log(telComb(''));
