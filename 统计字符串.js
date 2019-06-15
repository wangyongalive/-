const maxCount = (str) => {
    let arr = str.split('');
    let obj = {};
    arr.forEach(item => {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
    });
    let max = 0;
    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i];
        }
    }
    let result = {};
    for (let i in obj) {
        if (obj[i] === max) {
            result[i]=max;
        }
    }
    return result;
};
maxCount('xyzzyxyz');
