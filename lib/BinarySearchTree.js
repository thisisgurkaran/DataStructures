var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
    }
    /*Bst add method
     */
    BST.prototype.add = function (value) {
        var node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        else if (this.root) {
            var currentNode = this.root;
            while (currentNode) {
                if (currentNode.value < value) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
                else if (currentNode.value > value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    };
    /*Bst add method
     */
    BST.prototype.searchNode = function (value) {
        if (!this.root) {
            return null;
        }
        var currentNode = this.root;
        var searchNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                searchNode = currentNode;
                break;
            }
            else if (value > currentNode.value) {
                if (!currentNode.right) {
                    break;
                }
                else
                    currentNode = currentNode.right;
            }
            else if (value < currentNode.value) {
                if (!currentNode.left) {
                    break;
                }
                else
                    currentNode = currentNode.left;
            }
        }
        return searchNode;
    };
    return BST;
}());
var b = new BST();
console.log(b);
b.add(1);
b.add(2);
b.add(3);
console.log(b);
console.log(b.searchNode(2));
//# sourceMappingURL=BinarySearchTree.js.map