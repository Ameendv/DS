// function encrypt(str, key) {
//     key = key % 26
//     let string = ''
//     for (let i = 0; i < str.length; i++) {
//         let encrypted = str.charCodeAt(i)+key
//         if(encrypted>122){
//             encrypted=96+(encrypted%122)
//         }

//         string+=String.fromCharCode(encrypted)
        
//     }

//     return string
// }

// console.log(encrypt('ameen',100))

function encrypt(str, key){
    key = key % 26
    let string = ''
    for(let i=0;i<str.length;i++){
        let encrypted= str.charCodeAt(i)+key
        console.log(key)
        if(encrypted>122){
            encrypted = 96+(encrypted%122)
        }
        string+=String.fromCharCode(encrypted)
        console.log(string)
    }
    console.log(string)

}

encrypt('ameen ere',10)