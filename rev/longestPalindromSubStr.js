function longestPalSubStr(str){

    res=''
    resL=0

    for(let i = 0; i<str.length; i++){
        let p=i
        let n=i

        while(p>=0 && n<str.length && str[p]==str[n]){
            console.log(str[p],str[n])
            
            
            if(n-p+1>resL){
                res=str.substr(p,n+1)
                resL=n-p+1
            }
            p--
            n++
        }
        p=i
        n=i+1

        while(p>=0 && n<str.length && str[p]==str[n]){
            // console.log(str[p],str[n])
            if(n-p+1>resL){
                res=str.substr(p,n+1)
                resL=n-p+1
            }
            p--
            n++
        }
    }

    return res
}

console.log(longestPalSubStr('cbbbd'))