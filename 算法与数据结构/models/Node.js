export default class Node {
    constructor(key) {
        this.key = key; // 键
        this.left = undefined;
        this.right = undefined;
    }

    toString() {
        return `${this.key}`;
    }
}
