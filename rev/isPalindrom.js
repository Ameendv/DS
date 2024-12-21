// function isPalindrom(str){
//     let i = 0
//     let len = str.length-1
//     console.log(str[i] , str[len])
    

//     if(str.length === 1) return true

//     while(str[i] === str[len] && len!==1 ){
//         console.log(str[i] , str[len])
//         i++
//         len--
//     }

//     if(str[i] === str[len] && len==1 ){
//         return true
//     }
    

//     return false



// }

// console.log(isPalindrom('racecar'))

function isPal(str){

    if(str.length === 1 || str.length === 0) return true

    if(str[0]!==str[str.length-1]){
        return false
    }

    return isPal(str.slice(1, -1))
}

console.log(isPal('malayalam'))

