const name = {
    fname:'Ameen',
    sname:'Dv',
   
}

let printName = function(place, again){
    console.log(this.fname+" "+this.sname+"is from"+place+" "+again)
}

const name1 = {
    fname:'Rashid',
    sname: 'soopi'
}

// name.printName()
// printName.apply(name1, ['calicut', 'nallalam'] )

const bindTest = printName.bind(name1, ['calicut'])

console.log(bindTest)
