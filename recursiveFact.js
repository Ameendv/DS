function facto(num){
    if(num<=1){
        return 1
    }
    return num * facto(num-1)
}

// console.log(facto(2))

function sample(num){
    if(num<=1) return 1
    sample(num-1)
    console.log(num)
    sample(num-1)

}

// sample(5)\
function mystery(num) {
    if (num <= 0) return;
    console.log("Entering:", num);
    mystery(num - 2);
    console.log("Exiting:", num);
}

mystery(5);