let str = 'aab121baa';
let palindromic = function (str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return palindromic(str.substring(1, -2));
}
console.log(palindromic(str));
