function selectionSort(arr){
    

    for(let i=0;i<arr.length;i++){
        let small = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[small]){
                small = j
            }
        }

        [arr[i], arr[small]] = [arr[small], arr[i]]
            
    }

    return arr
}

console.log(selectionSort([6,3,8,1,0,8,9]))