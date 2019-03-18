function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null; /*增加一个 previous 属性*/
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

// 反序显示双向链表中的元素
function dispReverse() {
    var currNode = this.findLast();
    while (!(currNode.previous == null)) {
        console.log((currNode.element));
        currNode = currNode.previous;
    }
}
/*findLast() 方法找出了链表中的最后一个节点*/
function findLast() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log((currNode.next.element));
        currNode = currNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

/*设置新节点的 previous 属性， 使其指向该节点的前驱*/
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
