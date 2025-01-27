// // Implement a depth-first search and traversal of both a tree and a graph using the pseudo-code from the depth-first overview reading.

// Put the starting node on a stack.
// While the stack is not empty, repeat steps 3-4.
// Pop a node and print it.
// Put all of the node's children on the top of the stack.




function dfsIterative(graph, start) {
    const stack = [start]; // Put the starting node on a stack.
    const visited = new Set(); //  visited nodes
    const result = []; // order of traversal

    while (stack.length > 0) {// While the stack is not empty, repeat steps 3-4.
        const node = stack.pop();

        if (!visited.has(node)) {
            
            visited.add(node); 
            result.push(node); // Pop a node and print it.

            // Put all of the node's children on the top of the stack.
            const neighbors = graph[node] || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                stack.push(neighbors[i]);
            }
        }
    }

    return result;
}


graph1 = {

    1: [2, 5, 3],
    2: [6,4,1],
    3: [4, 7,1],
    4: [2,5,3],
    5: [4,1],
    6: [2],
    7: [3]
}


tree1 = {
1: [2, 5, 9],
2: [3],
3: [4],
4: [],
5: [6,8],
6: [7],
7: [],
8: [],
9: [10],
10: []
}


const dfsTreeResult = dfsIterative(tree1, 1);

const dfsGraphResult = dfsIterative(graph1, 1);
console.log(dfsTResult);
console.log(dfsGResult);

