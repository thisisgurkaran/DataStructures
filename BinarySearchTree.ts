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

  /*Bst add method
   */

  add(value: number): void {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    } else if (this.root) {
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
          currentNode = currentNode.right;
        }
      }
    }
  }

  /*Bst add method
   */

  searchNode(value: number): TreeNode | null {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    let searchNode = null;
    while (currentNode) {
      if (currentNode.value === value) {
        searchNode = currentNode;
        break;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          break;
        } else currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          break;
        } else currentNode = currentNode.left;
      }
    }
    return searchNode;
  }

  //tree traversal is pending
}

const b = new BST();

console.log(b);
b.add(1);
b.add(2);
b.add(3);

console.log(b);

console.log(b.searchNode(2));
