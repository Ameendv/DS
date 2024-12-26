function searchPosition(arr, target){
    let start = 0
    let end = arr.length-1
    var middle 


    while(start<=end){
        middle = Math.round((start+end)/2)
        if(arr[middle] === target){
            return middle
        }

        if(target<arr[middle]){
            end = middle-1
            // middle = Math.round((start+end)/2)
        }else {
            start= middle+1
            // middle = Math.round((start+end)/2)
        }

    }

    return start
}

console.log(searchPosition([1,3,4],2))