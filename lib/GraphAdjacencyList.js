// Map is  node -> Node[]
// this each node is mapped to to the array of nodes that it is connected to.
var Graph = /** @class */ (function () {
    function Graph() {
        this.adjacencyList = new Map();
    }
    // add a node that doesnt exist
    Graph.prototype.addNode = function (key) {
        if (!this.adjacencyList.has(key)) {
            this.adjacencyList.set(key, []);
        }
        else
            return;
    };
    // edge is non directional in this case., so you need to make the connect
    // in both directions
    Graph.prototype.addEdge = function (node1, node2) {
        this.addNode(node1);
        this.addNode(node2);
        this.adjacencyList.get(node1).push(node2);
        this.adjacencyList.get(node2).push(node1);
    };
    // BFS is a way to visit all nodes starting with any node.
    Graph.prototype.bfs = function (startKey) {
        var visited = {};
        var result = [];
        var queue = [];
        queue.push(startKey);
        while (queue.length) {
            var currentKey = queue.shift();
            if (!visited[currentKey]) {
                visited[currentKey] = true;
                result.push(currentKey);
                var neighbors = this.adjacencyList.get(currentKey);
                if (neighbors) {
                    for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                        var neighbor = neighbors_1[_i];
                        if (!visited[neighbor]) {
                            queue.push(neighbor);
                        }
                    }
                }
            }
        }
        return result;
    };
    //basically the pseudocode for DFS is as below.
    //make a visited and result array to keep track of things
    // call a recursive function dfsUtil with startKey
    Graph.prototype.dfs = function (startKey) {
        var _this = this;
        var visited = {};
        var result = [];
        var dfsUtil = function (key) {
            if (visited[key]) {
                return;
            }
            visited[key] = true;
            result.push(key);
            var neighbors = _this.adjacencyList.get(key);
            if (neighbors) {
                for (var _i = 0, neighbors_2 = neighbors; _i < neighbors_2.length; _i++) {
                    var neighbor = neighbors_2[_i];
                    if (!visited[neighbor]) {
                        dfsUtil(neighbor);
                    }
                }
            }
        };
        dfsUtil(startKey);
        return result;
    };
    return Graph;
}());
var myGraph = new Graph();
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("E", "F");
console.log(myGraph.dfs("A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
//# sourceMappingURL=GraphAdjacencyList.js.map