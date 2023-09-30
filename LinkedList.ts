class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addnode(val) {
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
      let head = this.head;
      while (head) {
        head = head.next;
      }
      head = new LinkedListNode(val);
      this.size++;
      return this;
    }
  }
}

const l = new LinkedList();
l.addnode(1);
l.addnode(2);
l.addnode(3);
console.log(l);
