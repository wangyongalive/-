// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
// 示例 1:
// 输入: "abab"
//
// 输出: True
// 解释: 可由子字符串 "ab" 重复两次构成。
// 示例 2:
// 输入: "aba"
//
// 输出: False
// 示例 3:
// 输入: "abcabcabcabc"
// 输出: True
// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)


// 正则表达式  ^ $ \1
// 正则表达式中的小括号"()"。是代表分组的意思。
// 如果再其后面出现\1则是代表与第一个小括号中要匹配的内容相同。
// 注意：\1必须与小括号配合使用
var repeatedSubstringPattern = function (s) {
    var reg = /^(\w+)\1+$/
    return reg.test(s)
};
