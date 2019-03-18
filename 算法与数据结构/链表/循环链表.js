// 当前这些还缺少输入非法值时候的判断
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head"); // 头节点
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
}

// 辅助方法 find()遍历链表，查找给定数据
// 如果查找成功，该方法返回包含该数据的节点；否则,返回 null。
function find(item) {
    let currNode = this.head;
    while (currNode.element !== item && currNode.next.element !== "head") {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

// display() 方法， 该方法用来显示链表中的元素
// 为了只显示包含数据的节点（不显示头节点）， 程序只访问
// 当前节点的下一个节点中保存的数据
function display() {
    var currNode = this.head;
    while (!(currNode.next == null) &&
    !(currNode.next.element == "head")) {
        console.log((currNode.next.element));
        currNode = currNode.next;
    }
}

// 找到待删除节点前面的节点
// 遍历链表中的元素， 检查每一个节点的下
// 一个节点中是否存储着待删除数据。
// 如果找到， 返回该节点（即“前一个”节点），这样
// 就可以修改它的 next 属性了。
function findPrevious(item) {
    let currNode = this.head;
    while ((currNode.next.element !== 'head') &&
    (currNode.next.element !== item)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 先找到待删除节点前面的节点。 找到这个节点后， 修改它的
// next 属性， 使其不再指向待删除节点， 而是指向待删除节点的下一个节点。
function remove(item) {
    let prevNode = this.findPrevious(item);
    // if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
    // }
}

let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display()
cities.remove("Russellville");
cities.display()
