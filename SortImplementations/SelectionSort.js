/*
1. Set MIN to location 0.
2. Search the minimum element in the list.
3. Swap with value at location MIN.
4. Increment MIN to point to next element.
5. Repeat until list is sorted.
*/

function selection(arr){
    let n = arr.length;

    for (let minIndex = 0; minIndex < n - 1; minIndex++) {//4. Increment MIN to point to next element(minIndex++). 5 Repeat until list is sorted. (minIndex < n-1)

       
        let minPos = minIndex; // 1. Set MIN to location 0.

      
        for (let t = minIndex + 1; t < n; t++) { //2. Search the minimum element in the list.
           
            if (arr[t] < arr[minPos]) {
                minPos = t;
            }
        }

      
        if (minPos !== minIndex) { //3. Swap with value at location MIN.
            let temp = arr[minIndex];
            
            arr[minIndex] = arr[minPos];
            
            arr[minPos] = temp;
        }
    }

    return console.log(arr) ;
}





let arr1 = [64, 39, 298, 2, 98, 11]

selection(arr1)

