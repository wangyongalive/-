import {defaultCompare, Compare, swap, reverseCompare} from "../util.js";

export default class MinHeap {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn;
        this.heap = [];
    }

    getLeftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        if (index === 0) {
            return undefined
        }
        return Math.floor((index - 1) / 2);
    }

    // 向对中插入元素  最小堆
    // 将值插入到堆的底部叶节点 再执行shiftUp方法
    insert(val) {
        if (val != null) {
            this.heap.push(val);
            this.shiftUp(this.heap.length - 1);
            return true;
        }
        return false;
    }

    shiftUp(index) {
        let parent = this.getParentIndex(index);
        while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) === Compare.moreThan) {
            swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    // 取出顶点的值
    findMinMax() {
        return this.isEmpty() ? undefined : this.heap[0];
    }

    // 导出节点的最大值或最小值
    // 即移除数组中的第一个元素
    extract() {
        if (this.isEmpty()) { // 如果值为空  则返回undefined
            return undefined;
        }
        if (this.size() == 1) {  // 如果只有一个值  可以直接移除并返回它
            return this.heap[0];
        }

        const removeVale = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return removeVale;
    }

    // 下移操作
    siftDown(index) {
        let element = index; // 中间变量
        const left = this.getLeftIndex(index);
        const right = this.getRightIndex(index);
        const size = this.size();
        // 两个if 可以选出子节点最大的节点
        if (
            left < size &&
            this.compareFn(this.heap[element], this.heap[left]) === Compare.moreThan
        ) {
            element = left;
        }
        if (
            right < size &&
            this.compareFn(this.heap[element], this.heap[right]) === Compare.moreThan
        ) {
            element = right;
        }
        if (index !== element) {
            swap(this.heap, index, element);
            this.siftDown(element); // 递归
        }
    }
}


const heap = new MinHeap();
// for (let i = 0; i < 10; i++) {
//     heap.insert(i);
// }

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(1);

console.log('最小堆的大小为: ', heap.size());
console.log('最小值为： ', heap.findMinMax());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.extract());
// console.log(heap.extract());


export class MaxHeap extends MinHeap {
    constructor(compareFn = defaultCompare) {
        super(compareFn); // 继承
        this.compareFn = reverseCompare(compareFn); // 改变比较函数就可以变为最大堆
    }
}


const maxHeap = new MaxHeap();
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(1);

console.log('最大堆的大小为: ', maxHeap.size());
console.log('最大值为： ', maxHeap.findMinMax());
