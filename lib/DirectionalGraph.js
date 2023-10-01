"use strict";
/* Lets write a directional graph and check if it has a cycle
We will write the logic to add edges and check if there is a cycle present using dfs  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionalGraph = void 0;
var DirectionalGraph = /** @class */ (function () {
    function DirectionalGraph() {
        this.adjacencyList = new Map();
    }
    DirectionalGraph.prototype.addNode = function (node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
        else
            return;
    };
    DirectionalGraph.prototype.addEdge = function (startNode, endNode) {
        this.addNode(startNode);
        this.addNode(endNode);
        this.adjacencyList.get(startNode).push(endNode);
    };
    DirectionalGraph.prototype.hasCycle = function (startNode) {
        var _this = this;
        var hasCycle = false;
        var visited = {};
        var stack = [];
        var dfs = function (node) {
            visited[node] = true;
            stack.push(node);
            var neighbors = _this.adjacencyList.get(node);
            if (neighbors.length) {
                for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                    var neighbor = neighbors_1[_i];
                    if (!visited[neighbor]) {
                        dfs(neighbor);
                    }
                    else {
                        hasCycle = true;
                    }
                }
            }
        };
        dfs(startNode);
        return hasCycle;
    };
    return DirectionalGraph;
}());
exports.DirectionalGraph = DirectionalGraph;
var myGraph = new DirectionalGraph();
myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "D");
myGraph.addEdge("C", "A");
console.log(myGraph.hasCycle("A"));
//# sourceMappingURL=DirectionalGraph.js.map