require('dotenv').config()
const express = require('express')
const app = express()



app.use((req,res, next) => {            // ดัก requst เพื่อทำอย่างอื่นก่อน ส่งไป ที่ /test ที่ต้องการจริงๆ ต้องใส่ next เพื่อไห้ไปต่อ
    console.log('form first midleware')
    console.log(req.method)
    console.log(req.baseUrl)
    next()
})


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

app.use('/test', (req, res) => {  //app.use ไม่สนใจ method
    //console.log(req.method)
    //console.log(req.baseUrl)
    res.send({method: req.method, path: req.baseUrl})
})


app.use((req,res)=> {
    res.status(404).send({msg: 'Path not found!!!'})
})


console.log(process.env.KEY)
let port = process.env.PORT || 8080   // เรียก port ที่กำหนดจาก env มาใช้ หรือ 8080
app.listen(port, ()=>console.log('Server on', port))


//can run PORT =9999 node .