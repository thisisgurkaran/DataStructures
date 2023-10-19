class MinHeap {
  private heap: number[] = [];

  // helper function to ge the parent of each Node
  private parentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }
  insert(val: number): void {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[this.parentIndex(i)] > this.heap[i]) {
      [this.heap[i], this.heap[this.parentIndex(i)]] = [
        this.heap[this.parentIndex(i)],
        this.heap[i],
      ];
      i = this.parentIndex(i);
    }
  }
}

const myHeap = new MinHeap();
console.log(myHeap);
myHeap.insert(50);

myHeap.insert(100);

myHeap.insert(45);

myHeap.insert(90);

myHeap.insert(125);
myHeap.insert(20);

console.log(myHeap);

//    45
// 100   50
