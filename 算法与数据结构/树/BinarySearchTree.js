import Node from '../models/Node.js';
import {Compare, defaultCompare} from "../util.js";

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // 比较节点之间的值
        this.root = null; // Node类型的根节点
    }

    // 向二叉搜索树中插入一个键
    insert(key) {
        if (this.root == null) { // 判断树是否为空
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key); // 辅助方法
        }
    }

    // 找到新节点应该插入的位置
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.lessThan) {
            if (node.left == null) { // 如果没有左侧节点
                node.left = new Node(key); // 插入新的节点
            } else {
                this.insertNode(node.left, key); // 如果有左侧，继续递归找到树的下一层
            }
        } else {
            if (node.right == null) { // 如果没有右侧节点
                node.right = new Node(key); // 插入新的节点
            } else {
                this.insertNode(node.right, key); // 如果有右侧，继续递归找到树的下一层
            }
        }

    }

    // 中序遍历 左中右
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) { // 递归的基线条件
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // 先序遍历 中左右
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }

    // 后序遍历 左右中
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // 查找最小值
    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    // 查找最大值
    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    // 搜索任意值
    search(key) {
        return this.searchNode(this.root, key); // 辅助方法
    }

    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === Compare.lessThan) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.moreThan) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }
    // 移除节点 太复杂
}

const tree = new BinarySearchTree();
tree.insert(11); // 第一个节点
tree.insert(12); // 第一个节点
tree.insert(13); // 第一个节点
tree.insert(14); // 第一个节点
const printNode = (val) => console.log(val);
tree.inOrderTraverse(printNode);

