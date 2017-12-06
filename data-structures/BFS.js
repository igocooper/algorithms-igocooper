
const bfs = (graph, root) =>{
    var nodesLen = {};

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    var queue = [root],
        current;

    while (queue.length !== 0) {
        current = queue.shift();

        var curConnected = graph[current],
            neighborIdx = [],
            idx = curConnected.indexOf(1);

        while (idx !== -1) {
            neighborIdx.push(idx);
            //change idx to next connected after the last found
            idx = curConnected.indexOf(1, idx + 1);
        }

        for (let j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] === Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 3));