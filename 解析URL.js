let url = 'https://www.baidu.com/s?wd=%E7%8F%A0%E5%B3%B0%E5%9F%B9%E8%AE%AD&rsv_spt=1&rsv_iqid=0xd25008ba0000399c&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=11&rsv_sug1=9&rsv_sug7=100&rsv_t=447aYNs%2FU2e%2BJi%2BDC59E0weQ6ZL%2B83MHXFBciC%2F9J%2FhngoSLysyMCVxPX20Bxp23isCF&rsv_sug2=0&inputT=3488&rsv_sug4=3489&rsv_sug=1';

// function queryURLParameter(url) {
//     let reg = /([^&?=]+)=([^&?=]+)/g;  // 利用()分组  [^&?=] 捕获规则
//     let obj = {};
//     url.replace(reg, (...arg) => { // 回调函数中 自动传递参数
//         obj[arg[1]] = arg[2];  // 箭头函数中没有  arguments  …叫剩余运算符
//         console.log(arg);
//     });
//     return obj;
// }

String.prototype.queryURLParameter = function () {
    let reg = /([^&?=]+)=([^&?=]+)/g;  // 利用()分组  [^&?=] 捕获规则
    let obj = {};
    // this 指向当前的实例对象
    this.replace(reg, (...arg) => { // 回调函数中 自动传递参数
        obj[arg[1]] = arg[2];  // 箭头函数中没有  arguments  …叫剩余运算符
    });
    return obj;
}
console.log(url.queryURLParameter());
