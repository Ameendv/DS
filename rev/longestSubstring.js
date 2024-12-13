function longestSubStr(str){
    let left = 0
    let max = 0
    let charSet = new Set()

    for(let right = 0;right<str.length;right++){
        while(charSet.has(str[right])){//here we shrink window if any repeatation occurs, 
            //until repeated value got deleted
            charSet.delete(str[left])
            left++
        }

        charSet.add(str[right])
        max = Math.max(max, (right-left) +1)
    }
    return max
}


console.log(longestSubStr('bbbb'))