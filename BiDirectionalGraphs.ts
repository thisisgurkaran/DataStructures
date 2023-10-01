import { GraphNode } from "./Types";
// Map is  node -> Node[]
// this each node is mapped to to the array of nodes that it is connected to.
class Graph<T> {
  adjacencyList: Map<GraphNode, GraphNode[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  // add a node that doesnt exist
  addNode(key: GraphNode): void {
    if (!this.adjacencyList.has(key)) {
      this.adjacencyList.set(key, []);
    } else return;
  }

  // edge is non directional in this case., so you need to make the connect
  // in both directions
  addEdge(node1: GraphNode, node2: GraphNode): void {
    this.addNode(node1);
    this.addNode(node2);
    this.adjacencyList.get(node1).push(node2);
    this.adjacencyList.get(node2).push(node1);
  }
  // BFS is a way to visit all nodes starting with any node.
  bfs(startKey: GraphNode): GraphNode[] {
    const visited: { [key: string]: boolean } = {};
    const result: GraphNode[] = [];
    const queue: GraphNode[] = [];

    queue.push(startKey);
    while (queue.length) {
      const currentKey = queue.shift();
      if (!visited[currentKey]) {
        visited[currentKey] = true;
        result.push(currentKey);
        const neighbors = this.adjacencyList.get(currentKey);
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
    return result;
  }

  //basically the pseudocode for DFS is as below.
  //make a visited and result array to keep track of things
  // call a recursive function dfsUtil with startKey

  dfs(startKey: GraphNode): GraphNode[] {
    const visited: { [key: string]: boolean } = {};
    const result: GraphNode[] = [];

    const dfsUtil = (key: GraphNode) => {
      if (visited[key]) {
        return;
      }

      visited[key] = true;
      result.push(key);

      const neighbors = this.adjacencyList.get(key);
      if (neighbors) {
        for (const neighbor of neighbors) {
          if (!visited[neighbor]) {
            dfsUtil(neighbor);
          }
        }
      }
    };

    dfsUtil(startKey);
    return result;
  }

  // bi directional vs unidirectional graph
}

const myGraph = new Graph();

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("E", "F");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "A");

console.log(myGraph.dfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
