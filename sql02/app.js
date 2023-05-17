require('dotenv').config()
const express = require('express')
const mysql = require('mysql2/promise')

const productRoute = require('./routes/productsRoute')
const categoryRoute = require('./routes/categoryRoute')
const notFound = require('./middlewares/notFound')
const error = require('./middlewares/error') 
const app = express()

app.use(express.json())// ต้องใส่เวลามี method POST

app.use(['/products', '/product'], productRoute)  // เรียก /products', '/product จะได้ผลลัพธิ์เหมือนกัน
app.use('/category', categoryRoute)


//Error midle ware โดย defaurl
// notfound
// app.use((req,res) => {
//     res.status(404).json({msg: 'path not found'})
// })
app.use(notFound)

//err
// app.use((err, req, res, next)=> {
//     res.status(500).json({error: err.message})
// })

app.use(error)


let port =process.env.PORT || 8000
app.listen(port,() => console.log('SV PORT', port))