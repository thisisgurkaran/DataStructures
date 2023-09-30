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
        if (this.size === 0) {
            this.head = new LinkedListNode(val);
            this.size++;
            return this;
        }
        if (this.size === 1) {
            this.head.next = new LinkedListNode(val);
            this.size++;
            return this;
        }
        if (this.size >= 2) {
            var head = this.head;
            while (head) {
                head = head.next;
            }
            head = new LinkedListNode(val);
            this.size++;
            return this;
        }
    };
    return LinkedList;
}());
var l = new LinkedList();
l.addnode(1);
l.addnode(2);
l.addnode(3);
console.log(l);
//# sourceMappingURL=LinkedList.js.map