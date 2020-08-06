const express = require('express')
const app = express();

const config = require('../config')

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(config.port, ()=>{
    console.log(`https://localhost:${config.port}`)
})