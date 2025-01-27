function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    function sectioner(low, high) {
        // 1. Choose an element called "the pivot", how that's done is up to the implementation
        const pivotIndex = Math.floor((low + high) / 2);
        const pivotValue = arr[pivotIndex];
        
        // Move pivot to the end temporarily
        swap(pivotIndex, high);
        
        // 2. Take two variables to point left and right of the list excluding pivot
        // 3. Left points to the low index
        // 4. Right points to the high index
        let left = low;
        let right = high - 1;
        
        while (true) {
            // 5. While value at left is less than pivot move right
            while (left <= right && arr[left] < pivotValue) {
                left++;
            }
            
            // 6. While value at right is greater than pivot move left
            while (left <= right && arr[right] > pivotValue) {
                right--;
            }
            
            // 7. If both step 5 and step 6 does not match, swap left and right
            if (left < right) {
                swap(left, right);
                left++;
                right--;
            } else {
                // 8. If left ≥ right, the point where they met is new pivot
                break;
            }
        }
        
        // Move pivot back to its final position
        swap(left, high);
        
        return left; // Return the pivot's final position
    }
    
    // Helper function to swap elements
    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // 9. Repeat, recursively calling this for smaller and smaller arrays
    function quickSortRecursive(low, high) {
        if (low < high) {
            const pivotPosition = sectioner(low, high);
            quickSortRecursive(low, pivotPosition - 1);
            quickSortRecursive(pivotPosition + 1, high);
        }
    }
    
    // Start the recursive sorting process
    quickSortRecursive(0, arr.length - 1);
    return arr;
}

// Test
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", quickSort(arr.slice()));