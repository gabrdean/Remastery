const LinkedListNode = require('./LinkedListNode')

class LinkedListStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // Add element to top of stack
    push(value) {
        const newNode = new LinkedListNode(value);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const removedNode = this.head;
        this.head = this.head.next;
        this.length--;

        return removedNode.value;
    }

    // Look at top element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.value;
    }

    // Check if stack is empty
    isEmpty() {
        return this.length === 0;
    }

    // Get size of stack
    size() {
        return this.length;
    }
}

// LinkedList Stack Examples
const linkedStack = new LinkedListStack();

console.log("\nLinkedList Stack Demonstration:");
console.log("Initially empty?", linkedStack.isEmpty()); // true

linkedStack.push("Bottom");
linkedStack.push("Middle");
linkedStack.push("Top");
console.log("Size after pushing 3 elements:", linkedStack.size()); // 3

const poppedString = linkedStack.pop();
console.log("Popped value:", poppedString); // "Top"
console.log("New size:", linkedStack.size()); // 2