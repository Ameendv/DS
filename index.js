const express = require('express')

const app = express()

const fs = require('fs')

fs.readFile('reactquestions.txt', (err, data)=>{
    if(err){
        console.log(error)
    }

    console.log(data)
})