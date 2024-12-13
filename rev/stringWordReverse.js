function string(data){
    const words= data.split(/\s+/)
    return words.reverse().join(' ')
}

console.log(string('hello world'))