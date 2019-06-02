export default class Queue {
    constructor() {
        this.count = 0; // 队尾标记
        this.lowestCount = 0; // 队首标记
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++; // 队尾标记加1 当前位置为undefined
    }

    // 出队
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        let result = this.items[this.lowestCount]; // 取出队列头部的值
        delete this.items[this.lowestCount]; // 移除元素
        this.lowestCount++; // 头部标记加1
        return result;

    }
    // 返回队首元素
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += `${this.items[i]}`
        }
        return objString;
    }

}
