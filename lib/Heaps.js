var MinHeap = /** @class */ (function () {
    function MinHeap() {
        this.heap = [];
    }
    // helper function to ge the parent of each Node
    MinHeap.prototype.parentIndex = function (i) {
        return Math.floor((i - 1) / 2);
    };
    MinHeap.prototype.insert = function (val) {
        var _a;
        this.heap.push(val);
        var i = this.heap.length - 1;
        while (i > 0 && this.heap[this.parentIndex(i)] > this.heap[i]) {
            _a = [
                this.heap[this.parentIndex(i)],
                this.heap[i],
            ], this.heap[i] = _a[0], this.heap[this.parentIndex(i)] = _a[1];
            i = this.parentIndex(i);
        }
    };
    return MinHeap;
}());
var myHeap = new MinHeap();
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
//# sourceMappingURL=Heaps.js.map