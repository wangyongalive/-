// 加减法
{
    let a = 1, b = 2;
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a);
    console.log(b);
}
// 异或
{
    let a = 1, b = 2;
    a ^= b;
    b ^= a;
    a ^= b;
    console.log(a);
    console.log(b);
}
// 数组与逗号
{
    let a = 1, b = 2;
    a = [b, (b = a)][0];
    console.log(a);
    console.log(b);
}

