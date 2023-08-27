class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;
  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  root: TreeNode;
  add(value: number): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    } else if (this.root) {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value < value && currentNode.right) {
          currentNode = currentNode.right;
        } else if (currentNode.value > value && currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode = node;
        }
      }
    }
  }
}

const b = new BST();

console.log(b);
b.add(1);
b.add(2);
b.add(3);

console.log(b);
