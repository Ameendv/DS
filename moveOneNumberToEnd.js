function result(arr, target) {
    let i = 0
    let j = arr.length - 1
    
    while (i < j) {

        if (arr[j] === target) {
            j--
        }
        if (arr[i] === target) {
            let a = arr[i]
            arr[i] = arr[j]
            arr[j] = a
           
        }
        i++
    }

    return arr
}

console.log(result([6,1,2,6,7,5,6,6,1,2,6], 2))

