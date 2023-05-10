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


app.get('/double/:num', (req, res) => {
    const {num} = req.params 
    //let result = num*2
    //console.log(result)
   // console.log(req.params.num)
    //res.send({double : result})
    res.send({double : +num * 2})

})


 //lab   /add/5/10


 app.get('/add/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params 
  //  let num = Number(num1)+Number(num2)
   // console.log(num)
   // console.log(req.params.num)
   // res.send({ result : num})
   res.send({result: +num1+ +num2})
 })


app.get('/test-query', (req,res)=> {
    const { a, b} = req.query
    console.log(req.query)
    console.log(a,b)
    res.send(req.query)
})


app.use((req,res)=> {
    res.status(404).send({msg: 'Path not found!!!'})
})


console.log(process.env.KEY)
let port = process.env.PORT || 8080   // เรียก port ที่กำหนดจาก env มาใช้ หรือ 8080
app.listen(port, ()=>console.log('Server on', port))


//can run PORT =9999 node .