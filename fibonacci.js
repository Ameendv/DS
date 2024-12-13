function fibo(num){

    if(num == 1){
        return num
    }

    return num * fibo(num-1)
}

console.log(fibo(4))