function isPalRec(string){
    if(string.length<=1){
        return true
    }

    if(string[0] !== string[string.length-1]){
       return false
    }

   return isPalRec(string.slice(1,-1))


}

// console.log(isPalRec('amaamaa'))

function isPal(string){
    while(string.length>1){
        if(string[0]!==string[string.length-1]){
            return false
        }
         string = string.slice(1,-1)
    }
    return true
}
console.log(isPal('malayalama'))
