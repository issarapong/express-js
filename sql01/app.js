//Connect Via .env
require('dotenv').config()

const mysql = require('mysql2/promise')

const express = require('express')
const app = express()


// const dbInfo = {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
    
// } 

//  const dbInfo = mysql://root:password@localhost:port/dbName

const dbInfo = process.env.DB_CONNECT
const pool = mysql.createPool(dbInfo)

// pool.query('select * from products')
// .then( ([row]) => console.log(rows))

app.get('/products', (req, res)=>{
    pool.query('select * from products')
    .then(([rows]) => res.json(rows))
    .catch( err => next(err))
    
})

//Lab
// รับ request 'Get' ที่ 'product/15'
// แล้วแสดง ข้อมูล id 15
//localhost:8080/products/15

// app.get('/products/:id', (req, res, next) => {
//     const {id} = req.params      
//     pool.query(`select * from products where id = ${id}`)
//     .then(([rows]) => res.json(rows))
//     .catch(next)
// })

//Protect sql injection  ต้อใช้อันนันี้ในการ Query มาตรฐาน

app.get('/products/:id', (req, res, next) => {
    const {id} = req.params

    pool.execute("select * from products where id = ? ", [id])
    .then(([rows]) => res.json(rows))
    .catch(next)
})


app.use((req, res) => {
    res.status(404).json({msg: 'path not found'})
})

app.use((err, req, res, next) => {
    res.status(500).json({err: err.message})
})



let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('SV PORT', port))