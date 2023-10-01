class LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList<T> {
  head: null | LinkedListNode<T>;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addnode(val: T) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  printList() {
    let current = this.head;
    let printStr: string = `${this.head.value} => `;
    while (current.next) {
      current = current.next;
      printStr += `${current.value} => `;
    }
    return printStr;
  }

  removeHead() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  removeTail() {
    let current = this.head;
    if (!current) {
      return;
    } else if (!current.next) {
      this.head = null;
    } else {
      let next = this.head.next;
      while (next.next) {
        current = current.next;
        next = next.next;
      }
      current.next = null;
    }
    this.size--;
  }

  removeNode(nodeValue: T) {
    // if not linkedList break
    if (!this.head) {
      return;
    }
    if (this.head.value === nodeValue) {
      this.removeHead();
    }
    let current = this.head;
    while (current.next && current.next.value !== nodeValue) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }
  searchNode(val: T): boolean {
    let current = this.head;
    while (current) {
      if (current.value === val) return true;
      current = current.next;
    }
    return false;
  }
}

const linkedList = new LinkedList();
linkedList.addnode(1);
linkedList.addnode(2);
linkedList.addnode(3);
linkedList.addnode(5);
linkedList.addnode(4);

console.log(linkedList.printList(), `Size: ${linkedList.size}`);

linkedList.removeNode(5);
console.log(linkedList.printList(), `Size: ${linkedList.size}`);
linkedList.removeNode(4);
console.log(linkedList.printList(), `Size: ${linkedList.size}`);
linkedList.removeNode(2);
console.log(linkedList.printList(), `Size: ${linkedList.size}`);
linkedList.removeTail();
console.log(linkedList.printList(), `Size: ${linkedList.size}`);

console.log(linkedList.searchNode(1));
console.log(linkedList.searchNode(5));
