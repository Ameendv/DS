function encrypt(string, key) {


    key = key % 26

    let stringArr = ''
    for (let i in string) {
        let charCode = string.charCodeAt(i) + key
        console.log(charCode)


        if (charCode >= 122) {
            charCode = 96 + (charCode % 122)
        } 
        stringArr += String.fromCharCode(charCode)


    }
    return stringArr
}

// console.log(encrypt('zaa', 1))

//input AAABBC
//output 3A2B1C

function refactor(string) {
    let newString = ''
    let i = 0
    while (i < string.length) {
        let count = 1
        let j = i + 1
        while (j < string.length && string.charCodeAt(i) === string.charCodeAt(j)) {
            count += 1
            j++

        }
        // let data = count + string[i]
        newString += count + string[i]
        i += count

    }
    return newString
}

// console.log(refactor('###@@'))


// input 1A2B3C
// outputABBCCC

function expand(string) {
    let i = 0
    let newString = ''
    while (i < string.length) {
        let j = i+1
        let count = ''
        while(!isNaN(string[j])){
            console.log('hai')
            count += string[j]
         j++
        }

        newString+=string[i].repeat(parseInt(count))
        i++
    }
    return newString
 
}

console.log(expand('A10'))




