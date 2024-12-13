//get primenumber until n

function primenumber(limit){
    for(let i = 1;i<limit;i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}

function isPrime(number){
    if(number == 1 || number == 2){
        return true
    }

    for(i = 2;i<=Math.sqrt(number);i++){
        
        if(number%i==0){
            return false
        }
    }

    return true
}

primenumber(900)