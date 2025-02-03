const LinkedListNode = require('./LinkedListNode')

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Add element to end of queue
    enqueue(value) {
        const newNode = new LinkedListNode(value);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    // Remove and return first element
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const removedNode = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return removedNode.value;
    }

    // Look at first element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.value;
    }

    // Check if queue is empty
    isEmpty() {
        return this.length === 0;
    }

    // Get size of queue
    size() {
        return this.length;
    }
}

// LinkedList Queue Examples
const linkedQueue = new LinkedListQueue();

console.log("\nLinkedList Queue Demonstration:");
console.log("Initially empty?", linkedQueue.isEmpty()); // true

linkedQueue.enqueue("Apple");
linkedQueue.enqueue("Banana");
linkedQueue.enqueue("Cherry");
console.log("Size after enqueueing 3 elements:", linkedQueue.size()); // 3


const dequeuedFruit = linkedQueue.dequeue();
console.log("Dequeued value:", dequeuedFruit); // "Apple"
console.log("New size:", linkedQueue.size()); // 2
