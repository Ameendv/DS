function removeDup(arr){
    let k = 1

    for(let i=1;i<arr.length;i++){
        if(arr[i]!=arr[i-1]){
            arr[k]=arr[i]
            k+=1
        }
    }

    return {k,arr}
}

//here algo is iterate through and compare with previos element
//if repeatation occurs, do nothing
//if no repeation means its a unique element in ith position, so move it to the kth position

console.log(removeDup([0,0,1,1,1,2,2,3,4,5,5]))