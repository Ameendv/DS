function result(arr, target) {
    let k = 0

    for(let i= 0;i<arr.length;i++){
        if(arr[i]!=target){
            arr[k++]=arr[i]

        }
    }

    return arr
}

//algo
//set a pointer at first, let k = 0
//iterate through and if iterator reach non-target value set that value to position of pointer   arr[k++]=arr[i]
//becase at that time pointer will be at target value, so in this setting time target value will get ommited


console.log(result([6,1,2,6,7,5,2,6,1,2,6], 6))




