function twoSum(arr, target) {
    const targ = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (targ.has(target-arr[i])) {
            return [i, targ.get(target-arr[i])]
        }
        targ.set(arr[i], i)
    }
    return []
}

console.log(twoSum([1,2,3,4], 10))

