require('dotenv').config()

const notFound = require('./middlewares/notFound')
const express = require('express')
const app =express()

const todo = [
    {id: 1, title: 'HTML'},
    {id: 2, title: 'CSS'},
    {id: 3, title: 'Javascript'},
    {id: 4, title: 'Javascript'},
]

app.use(express.json())  // ถ้า request นั้นมี body เปน json ใช้ app.use(express.json())  เพื่อ ดักจับ
// app.use(express.urlencoded( { extended: false } ) )

// ==> /todo
// res.send
//{id 33,title: 'Javascript'}
// ถ้าไม่มีข้อมูลให้ส่ง nofound


app.get('/todo', (req,res)=>{
    const {title} =req.query
    if(!title) {
        return res.send(todo)
    }
        
    
    console.log(title)
     //let rs =todo.find(el => el.title.toLocaleLowerCase() === title.toLocaleLowerCase())  // find with case sensitive
     let rs = todo.find(el => el.title.toLowerCase().includes(title.toLowerCase())) // include ใช้ กรณีมี คำในนั้น จะได้เลย //curl 'http://localhost:8999/todo?title=ja'
    res.send( rs || {msg : 'not found title'})
})


// todo/2 ให้ res.send todo ตัวที่ 2 ออกมา

app.get('/todo/:id', (req,res)=> {

    const {id, titile} = req.params

    let rs = todo.find(el => el.id === +id)

    res.send(rs || {msg : 'not founds'})
})



app.post('/todo', (req, res) => {
    const {id, title} = req.body
    //console.log(req.body)
    todo.push({id: id,title: title})
    console.log(todo)
    res.send(req.body)
})

// example POST
/*{
    "id": 6,
    "title": "CC14"
} */


///Notfound midleware


app.use(notFound)


const port = process.env.PORT || 8080
app.listen(port,()=> console.log(`Server on ${port}`))


