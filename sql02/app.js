require('dotenv').config()
const express = require('express')
const mysql = require('mysql2/promise')

const app = express()



//Error midle ware โดย defaurl
// notfound
app.use((req,res) => {
    res.status(404).json({msg: 'path not found'})
})

//err
app.use((err, req, res, next)=> {
    res.status(500).json({error: err.message})
})




let port =process.env.PORT || 8000
app.listen(port,() => console.log('SV PORT', port))