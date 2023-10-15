var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    // Method to add a value to the BST
    BST.prototype.add = function (value) {
        var node = new TreeNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
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
                currentNode = currentNode.left;
            }
        }
    };
    // Method to search for a node with a given value
    BST.prototype.searchNode = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
        }
        return null;
    };
    // Inorder Traversal
    BST.prototype.inorderTraversal = function (node, result) {
        if (result === void 0) { result = []; }
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.value);
            this.inorderTraversal(node.right, result);
        }
        return result;
    };
    // Preorder Traversal
    BST.prototype.preorderTraversal = function (node, result) {
        if (result === void 0) { result = []; }
        if (node) {
            result.push(node.value);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
        return result;
    };
    // Postorder Traversal
    BST.prototype.postorderTraversal = function (node, result) {
        if (result === void 0) { result = []; }
        if (node) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    };
    // Breadth-First Search (BFS)
    BST.prototype.bfs = function () {
        if (!this.root) {
            return [];
        }
        var result = [];
        var queue = [this.root];
        while (queue.length > 0) {
            var currentNode = queue.shift();
            result.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return result;
    };
    // DFS Preorder
    BST.prototype.dfsPreorder = function () {
        return this.preorderTraversal(this.root);
    };
    // DFS Inorder
    BST.prototype.dfsInorder = function () {
        return this.inorderTraversal(this.root);
    };
    // DFS Postorder
    BST.prototype.dfsPostorder = function () {
        return this.postorderTraversal(this.root);
    };
    return BST;
}());
// Usage example
var b = new BST();
b.add(3);
b.add(1);
b.add(2);
b.add(5);
b.add(4);
console.log("BFS:", b.bfs());
console.log("DFS Preorder:", b.dfsPreorder());
console.log("DFS Inorder:", b.dfsInorder());
console.log("DFS Postorder:", b.dfsPostorder());
//# sourceMappingURL=BinarySearchTree.js.map