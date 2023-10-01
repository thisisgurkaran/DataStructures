var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val) {
        this.value = val;
        this.next = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.addnode = function (val) {
        var newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    };
    LinkedList.prototype.printList = function () {
        var current = this.head;
        var printStr = "".concat(this.head.value, " => ");
        while (current.next) {
            current = current.next;
            printStr += "".concat(current.value, " => ");
        }
        return printStr;
    };
    LinkedList.prototype.removeHead = function () {
        var current = this.head;
        this.head = current.next;
        this.size--;
    };
    LinkedList.prototype.removeTail = function () {
        var current = this.head;
        if (!current) {
            return;
        }
        else if (!current.next) {
            this.head = null;
        }
        else {
            var next = this.head.next;
            while (next.next) {
                current = current.next;
                next = next.next;
            }
            current.next = null;
        }
        this.size--;
    };
    LinkedList.prototype.removeNode = function (nodeValue) {
        // if not linkedList break
        if (!this.head) {
            return;
        }
        if (this.head.value === nodeValue) {
            this.removeHead();
        }
        var current = this.head;
        while (current.next && current.next.value !== nodeValue) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    };
    LinkedList.prototype.searchNode = function (val) {
        var current = this.head;
        while (current) {
            if (current.value === val)
                return true;
            current = current.next;
        }
        return false;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.addnode(1);
linkedList.addnode(2);
linkedList.addnode(3);
linkedList.addnode(5);
linkedList.addnode(4);
console.log(linkedList.printList(), "Size: ".concat(linkedList.size));
linkedList.removeNode(5);
console.log(linkedList.printList(), "Size: ".concat(linkedList.size));
linkedList.removeNode(4);
console.log(linkedList.printList(), "Size: ".concat(linkedList.size));
linkedList.removeNode(2);
console.log(linkedList.printList(), "Size: ".concat(linkedList.size));
linkedList.removeTail();
console.log(linkedList.printList(), "Size: ".concat(linkedList.size));
console.log(linkedList.searchNode(1));
console.log(linkedList.searchNode(5));
//# sourceMappingURL=LinkedList.js.map