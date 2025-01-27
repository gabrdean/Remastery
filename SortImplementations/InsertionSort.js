

function insertionSort(arr) {
    // 1. If it is the first element, it is already sorted; return 1
    if (arr.length <= 1) {
        return arr;
    }
    
    // 6. Repeat until list is sorted
    for (let i = 1; i < arr.length; i++) {
        // 2. Pick next element
        let currentElement = arr[i];
        let j = i - 1;
        
        // 3. Compare with all elements in the sorted sub-list
        // 4. Shift all the elements in the sorted sub-list that is greater than the value to be sorted
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // 5. Insert the value
        arr[j + 1] = currentElement;
    }
    
    return arr;
}

//Test
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", arr);
console.log("Sorted array:", insertionSort(arr.slice())); 