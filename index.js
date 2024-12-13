const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
mongoose.connect('mongodb://localhost:27017/my_database')

const schema = new mongoose.Schema({
    name:{type:String}
})

const model = mongoose.model('sample', schema)


const data = fs.readFileSync('test.txt')
fs.writeFileSync('test1.txt',data)

fs.appendFileSync('test1.txt','alkjfaf')
app.listen(5000,()=>{
    console.log('server listeing on port 5000')
})