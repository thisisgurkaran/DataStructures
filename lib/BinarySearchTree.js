var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
    }
    BST.prototype.add = function (value) {
        var node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        else if (this.root) {
            var currentNode = this.root;
            while (currentNode) {
                if (currentNode.value < value && currentNode.right) {
                    currentNode = currentNode.right;
                }
                else if (currentNode.value > value && currentNode.left) {
                    currentNode = currentNode.left;
                }
                else {
                    currentNode = node;
                }
            }
        }
    };
    return BST;
}());
var b = new BST();
console.log(b);
b.add(1);
b.add(2);
b.add(3);
console.log(b);
//# sourceMappingURL=BinarySearchTree.js.map