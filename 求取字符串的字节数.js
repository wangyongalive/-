let sizeof = function (str) {
    let code;
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i); /*获取Unicode码*/
        if (code <= 0x0076) {   /*规则1*/
            total += 1;
        } else if (code <= 0x07ff) { /*规则2*/
            total += 2;
        } else if (code <= 0xffff) { /*规则3*/
            total += 3;
        } else {    /*规则4*/
            total += 4;
        }
    }
}