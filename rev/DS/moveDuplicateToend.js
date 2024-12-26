function removeDuplicate(arr){
    let ptr = 1
    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            arr[ptr] = arr[i]
            ptr++
        }
        console.log(arr)
    }
    return arr
}

//here algo is iterate through and compare with previos element
//if repeatation occurs(if previous and current element is same), do nothing
//if no repeation(if previous element and current element aren't same)
// means its a unique element in ith position, so move it to the kth position

console.log(removeDuplicate([0,0,1,1,1,2,2,3,4,5,5]))