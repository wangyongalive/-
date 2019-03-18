export function Stack() {
    this.dataStore = []; // 数组 dataStore 保存栈内元素
    this.top = 0; // 变量 top 记录栈顶位置
    this.push = push; // 压入一个新元素时
    this.pop = pop; // 它返回栈顶元素， 同时将变量 top 的值减 1
    this.peek = peek; // 返回数组的第 top-1 个位置的元素， 即栈顶元素
    this.clear = clear; // 清空一个栈
    this.length = length; // 返回栈内的元素个数
    this.print = print; // 打印栈元素 从栈底到栈顶
}

function push(element) {
    this.dataStore[this.top++] = element;
}

// 如果对一个空栈调用 peek() 方法， 结果为 undefined。
function peek() {
    return this.dataStore[this.top - 1];
}

function pop() {
    return this.dataStore[--this.top];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

function print() {
    for (let i = 0; i < this.top; i++) {
        console.log(this.dataStore[i]);
    }
}
