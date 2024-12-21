// function mergeSort(arr){
//     if(arr.length === 1){
//         return arr
//     }

//     let middleIdx = Math.floor(arr.length/2)

//     // mergeSort(arr.slice(0,middleIdx))
//     // mergeSort(arr.slice(middleIdx))
  

//     return sortAndMerge(mergeSort(arr.slice(0, middleIdx)),
//         mergeSort(arr.slice(middleIdx)))
// }

// function sortAndMerge(first, second){
//     let i = 0
//     let j = 0
//     let k = 0
//     const newArr = []

//     while(i<first.length && j<second.length){
//         if(first[i]<=second[j]){
//             newArr[k++]=first[i++]
            
//         }else{
//             newArr[k++]=second[j++]
//         }
//     }

//     while(i<first.length){
//         newArr[k++]=first[i++]
//     }

//     while(j<second.length){
//         newArr[k++]=second[j++]
//     }
//     return newArr

// }

// console.log(mergeSort(['z','b','a','v']))

function mergeSort(arr){
    if(arr.length===1){
        return arr
    }

    let middleIdx = Math.round(arr.length/2)

    return sortAndMerge(mergeSort(arr.slice(0, middleIdx)), mergeSort(arr.slice(middleIdx)))
}


function sortAndMerge(arr1, arr2){
    let i = 0
    let j = 0
    let k = 0
    let newArray = []

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            newArray[k++] = arr1[i++]
        } else { 
            newArray[k++] = arr2[j++] 
        }

    }

    while(i<arr1.length){
        newArray[k++]=arr1[i++]
    }

    while(j<arr2.length){
        newArray[k++]=arr2[j++]
    }

    return newArray

}

console.log(mergeSort([9,8,7,6,5,4,3,2,1]))