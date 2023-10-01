/* Lets write a directional graph and check if it has a cycle
We will write the logic to add edges and check if there is a cycle present using dfs  */

import { GraphNode } from "./Types";

export class DirectionalGraph {
  adjacencyList: Map<GraphNode, GraphNode[]>;
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node: GraphNode): void {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    } else return;
  }
  addEdge(startNode: GraphNode, endNode: GraphNode): void {
    this.addNode(startNode);
    this.addNode(endNode);
    this.adjacencyList.get(startNode).push(endNode);
  }
  hasCycle(startNode: GraphNode): boolean {
    let hasCycle: boolean = false;
    const visited: { [key: string]: boolean } = {};
    const stack: GraphNode[] = [];

    const dfs = (node: GraphNode) => {
      visited[node] = true;
      stack.push(node);
      const neighbors = this.adjacencyList.get(node);
      if (neighbors.length) {
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            dfs(neighbor);
          } else {
            hasCycle = true;
          }
        }
      }
    };
    dfs(startNode);
    return hasCycle;
  }
}

const myGraph = new DirectionalGraph();
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "D");
myGraph.addEdge("C", "A");

console.log(myGraph.hasCycle("A"));
