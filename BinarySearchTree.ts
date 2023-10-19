class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // Method to add a value to the BST
  add(value: number): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value < value) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        }
        currentNode = currentNode.right;
      } else if (currentNode.value > value) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  // Method to search for a node with a given value
  searchNode(value: number): TreeNode | null {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  // Inorder Traversal
  inorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node) {
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  // Preorder Traversal
  preorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node) {
      result.push(node.value);
      this.preorderTraversal(node.left, result);
      this.preorderTraversal(node.right, result);
    }
    return result;
  }

  // Postorder Traversal
  postorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node) {
      this.postorderTraversal(node.left, result);
      this.postorderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }

  // Breadth-First Search (BFS)
  bfs(): number[] {
    if (!this.root) {
      return [];
    }
    const result: number[] = [];
    const queue: TreeNode[] = [this.root];
    while (queue.length > 0) {
      const currentNode = queue.shift()!;
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return result;
  }

  // DFS Preorder
  dfsPreorder(): number[] {
    return this.preorderTraversal(this.root);
  }

  // DFS Inorder
  dfsInorder(): number[] {
    return this.inorderTraversal(this.root);
  }

  // DFS Postorder
  dfsPostorder(): number[] {
    return this.postorderTraversal(this.root);
  }
}

// Usage example
const b = new BST();
b.add(3);
b.add(1);
b.add(2);
b.add(5);
b.add(4);

console.log("BFS:", b.bfs());
console.log("DFS Preorder:", b.dfsPreorder());
console.log("DFS Inorder:", b.dfsInorder());
console.log("DFS Postorder:", b.dfsPostorder());
