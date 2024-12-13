function insertSort(array){
    for (let i = 0;i<array.length;i++){
        let current = array[i]
        let j = i-1
        while(j>=0 && current<array[j]){
            [array[j+1],array[j]]= [array[j],array[j+1]]
            j--
        }
    }
    return array
}

console.log(insertSort([8,7,6,5,4,3,2]))