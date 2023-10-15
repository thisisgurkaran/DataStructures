// class LinkedListNode<T> {
//   value: T;
//   next: LinkedListNode<T> | null;
//   constructor(val: T) {
//     this.value = val;
//     this.next = null;
//   }
// }
// class LinkedList<T> {
//   head: null | LinkedListNode<T>;
//   size: number;
//   tail: null | LinkedListNode<T>;
//   constructor() {
//     this.head = null;
//     this.size = 0;
//     this.tail = null;
//   }
//   addnode(val: T) {
//     const newNode = new LinkedListNode(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.size++;
//       this.tail = this.head;
//       return;
//     } else if (!this.head.next) {
//       this.head.next = newNode;
//       this.size++;
//       this.tail = this.head.next;
//       return;
//     } else {
//       let current = this.head.next;
//       while (current.next !== null) {
//         current = current.next;
//       }
//       current.next = newNode;
//       this.tail = current.next;
//       this.size++;
//     }
//   }
//   printList(node: LinkedListNode<T>) {
//     let current = node;
//     let printStr: string = `${this.head.value} => `;
//     while (current.next) {
//       current = current.next;
//       printStr += `${current.value} => `;
//     }
//     return printStr;
//   }
//   removeHead() {
//     // let current = this.head;
//     this.head = this.head.next;
//     this.size--;
//   }
//   removeTail() {
//     let current = this.head;
//     if (!current) {
//       return;
//     } else if (!current.next) {
//       this.head = null;
//     } else {
//       while (current.next && current.next.next !== null) {
//         current = current.next;
//       }
//       current.next = null;
//     }
//     this.size--;
//   }
//   removeNode(nodeValue: T) {
//     // if not linkedList break
//     if (!this.head) {
//       return;
//     }
//     if (this.head.value === nodeValue) {
//       this.removeHead();
//     }
//     let current = this.head;
//     while (current.next && current.next.value !== nodeValue) {
//       current = current.next;
//     }
//     if (current.next) {
//       current.next = current.next.next;
//       this.size--;
//     }
//   }
//   searchNode(val: T): boolean {
//     let current = this.head;
//     while (current) {
//       if (current.value === val) return true;
//       current = current.next;
//     }
//     return false;
//   }
// }
// const linkedList = new LinkedList();
// linkedList.addnode(1);
// linkedList.addnode(8);
// linkedList.addnode(3);
// linkedList.addnode(5);
// linkedList.addnode(4);
// console.log(linkedList.printList(linkedList.head), `Size: ${linkedList.size}`);
// console.log(linkedList.printList(linkedList.tail), `Size: ${linkedList.size}`);
// // linkedList.removeNode(5);
// // console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// // linkedList.removeNode(4);
// // console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// // linkedList.removeNode(2);
// // console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// // linkedList.removeTail();
// // console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// console.log(linkedList.searchNode(1));
// console.log(linkedList.searchNode(5));
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val) {
        this.value = null;
        this.next = null;
        this.value = val;
        this.next = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.printList = function (node) {
        var current = node;
        var printStr = "".concat(this.head.value, " => ");
        while (current.next) {
            current = current.next;
            printStr += "".concat(current.value, " => ");
        }
        return printStr;
    };
    LinkedList.prototype.addNode = function (val) {
        var newNode = new LinkedListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            this.tail = this.head;
            return;
        }
        else if (!this.head.next) {
            this.head.next = newNode;
            this.size++;
        }
        else {
            var curr = this.head.next;
            while (curr.next !== null) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.size++;
            this.tail = curr.next;
        }
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(8);
linkedList.addNode(3);
linkedList.addNode(5);
linkedList.addNode(4);
console.log(linkedList.printList(linkedList.head), "Size: ".concat(linkedList.size));
console.log(linkedList.printList(linkedList.tail), "Size: ".concat(linkedList.size));
// linkedList.removeNode(5);
// console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// linkedList.removeNode(4);
// console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// linkedList.removeNode(2);
// console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// linkedList.removeTail();
// console.log(linkedList.printList(), `Size: ${linkedList.size}`);
// console.log(linkedList.searchNode(1));
// console.log(linkedList.searchNode(5));
//# sourceMappingURL=LinkedList.js.map