/*
1. If the current value is greater than its neighbor to the right
2. Swap those values
3. If you get to the end of the array and no swaps have occurred, return
4. Otherwise, repeat from the beginning
*/


function bubble(arr) {

    let swapped = true
    while (swapped == true){
    
    let swapCount = 0 
    for (let i = 0; i<arr.length; i++){
        
        
        let currVal = arr[i]
        let nextVal = arr[i+1]

        if ( currVal > nextVal){ //1. If the current value is greater than its neighbor to the right
            arr[i] = nextVal
            arr[i+1] = currVal  //2. Swap those values
            swapCount++     
        }
    }
    if (swapCount > 0){ //4. Otherwise, repeat from the beginning
        swapped == true
    }
    else {swapped = false} //3. If you get to the end of the array and no swaps have occurred, return
}

return console.log(arr)
}

arr1 = [30, 15, 17, 105, 32]

//Test
bubble(arr1)
