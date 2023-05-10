require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    console.log(req.method)
    console.log(req.url)
    res.send({msg: KEY })
})

app.get('/date', (req,res)=>{
    console.log(req.method)
    console.log(req.url)
    let current = new Date()
    res.send(current)
})

console.log(process.env.KEY)
let port = process.env.PORT || 8080   // เรียก port ที่กำหนดจาก env มาใช้ หรือ 8080
app.listen(port, ()=>console.log('Server on', port))


//can run PORT =9999 node .