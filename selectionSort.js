function selectionSort(array){
    for(let i =0;i<array.length;i++){
        let small = i
        for(let j = i+1;j<array.length;j++){//find small 
            if(array[small]>array[j]){
                small = j
                
            }
        }
        [array[small], array[i]] = [array[i], array[small]]//swap the smallest with position of i
        // console.log(small,'small')
    }
    return array
}

console.log(selectionSort([1000,1000, 1210, 900, 650,234,654,257]))

