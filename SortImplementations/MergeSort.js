function mergeSort(arr) {
    // 1. Check if the input is length 1 or less
    if (arr.length <= 1) {
        // 2. If so, it's already sorted: return
        return arr;
    }
    
    // 3. Divide the array in half
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // 4. Recursively sort the left half
    const sortedLeft = mergeSort(left);
    
    // 5. Recursively sort the right half
    const sortedRight = mergeSort(right);
    
    // 6. Merge the halves together and return
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // 1. Create an empty return array
    const result = [];
    
    // 2. Point to the first value of each array
    let leftIndex = 0;
    let rightIndex = 0;
    
    // 3. While there are still values in each array
    while (leftIndex < left.length && rightIndex < right.length) {
        // 4. Compare the first values of each array
        if (left[leftIndex] <= right[rightIndex]) {
            // 5. Add the smaller value to the return array
            result.push(left[leftIndex]);
            // 6. Move the pointer to the next value in that array
            leftIndex++;
        } else {
            // 5. Add the smaller value to the return array
            result.push(right[rightIndex]);
            // 6. Move the pointer to the next value in that array
            rightIndex++;
        }
    }
    
    // Add remaining elements if any
    return [
        ...result,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex)
    ];
    
    // 7. Return the return array
}

// Test
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", mergeSort(arr.slice())); 