// // Implement a breadth-first search and traversal of both a tree and a graph using the pseudo-code from the breadth-first overview reading.

// 1. Put the starting node in a queue.
// 2. While the queue is not empty, repeat steps 3-4.
// 3. Dequeue a node and print it.
// 4. Put all of the node's children in the back of the queue







tree1 = {
1: [2, 3, 4],
2: [5],
3: [6, 7],
4: [8],
5: [9],
6: [10]
}

function bfs(tree, start) {
    const queue = [start]; // 1. Put the starting node in a queue.
    const visited = new Set(); 

    while (queue.length > 0) { // 2. While the queue is not empty, repeat steps 3-4.
        const node = queue.shift(); // 3. Dequeue a node and print it.
        if (!visited.has(node)) {
            console.log(node); 
            visited.add(node);

            // 4. Put all of the node's children in the back of the queue
            const children = tree[node] || [];
            for (const child of children) {
                if (!visited.has(child)) {
                    queue.push(child);
                }
            }
        }
    }
}

bfs(tree1, 1)


graph1 = {

    1: [2, 5, 3],
    2: [6,4,1],
    3: [4, 7,1],
    4: [2,5,3],
    5: [4,1],
    6: [2],
    7: [3]
}

bfs(graph1, 1)
