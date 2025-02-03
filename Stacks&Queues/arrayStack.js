class ArrayStack {
    constructor() {
        this.stack = [];
    }

    // Add element to top of stack
    push(value) {
        this.stack.push(value);
    }

    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    // Check if stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get size of stack
    size() {
        return this.stack.length;
    }
}



// Array Stack Examples
const arrayStack = new ArrayStack();

console.log("Array Stack Demonstration:");
console.log("Initially empty?", arrayStack.isEmpty()); // true

arrayStack.push(10);
arrayStack.push(20);
arrayStack.push(30);
console.log("Size after pushing 3 elements:", arrayStack.size()); // 3


const poppedValue = arrayStack.pop();
console.log("Popped value:", poppedValue); // 30
console.log("New size:", arrayStack.size()); // 2


