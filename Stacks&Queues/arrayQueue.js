class ArrayQueue {
    constructor() {
        this.queue = [];
    }

    // Add element to end of queue
    enqueue(value) {
        this.queue.push(value);
    }

    // Remove and return first element
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift();
    }

    // Check if queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get size of queue
    size() {
        return this.queue.length;
    }
}

// Array Queue Examples
const arrayQueue = new ArrayQueue();

console.log("\nArray Queue Demonstration:");
console.log("Initially empty?", arrayQueue.isEmpty()); // true

arrayQueue.enqueue("First");
arrayQueue.enqueue("Second");
arrayQueue.enqueue("Third");
console.log("Size after enqueueing 3 elements:", arrayQueue.size()); // 3


const dequeuedValue = arrayQueue.dequeue();
console.log("Dequeued value:", dequeuedValue); // "First"
console.log("New size:", arrayQueue.size()); // 2
