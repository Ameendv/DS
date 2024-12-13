function quickSort(array){
quickSortHelper(array, 0, array.length-1)
return array
}

function quickSortHelper(array, startIndex, endIndex) {
    let pivotIdx = startIndex
    let leftIdx = pivotIdx + 1
    let rightIdx = endIndex

    if (startIndex >= endIndex) return;


    while(leftIdx<=rightIdx){
        console.log('a')
        if(array[leftIdx]>array[pivotIdx] && array[rightIdx]<array[pivotIdx]){
            [array[leftIdx],array[rightIdx]]=[array[rightIdx],array[leftIdx]]
            leftIdx++
            rightIdx--
        }

        if(array[leftIdx]<array[pivotIdx]){
            leftIdx++
        }
        if(array[rightIdx]>array[pivotIdx]){
            rightIdx--
        }
        

    }

    [array[pivotIdx], array[rightIdx]] = [array[rightIdx], array[pivotIdx]];

    quickSortHelper(array, startIndex, rightIdx-1)
    quickSortHelper(array, rightIdx+1, endIndex)

}

console.log(quickSort([5,4,3,6,7,10,0]))