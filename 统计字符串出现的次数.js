function getMost(str) {
    let result = {};
    result = str.split('').sort().join('').match(/(.)\1+/g).reduce((result, cur) => {
        result[cur[0]] = cur.length;
        return result;
    }, {});
    return result;
}


