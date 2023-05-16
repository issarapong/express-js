// const mysql = require('mysql2/promise')

// const pool = mysql.createPool(process.env.DB_CONNECT)

// exports.getAllProducts = (req, res, next) => {
//     res.send(' in getAllProducts')
    
// }

const Products = require('../models/Products')
exports.getAllProducts = (req, res, next) => {
   // let sql ='select * from products'
    // pool.query(sql).then(([rows]) => {
    //     res.json(rows)
    // }).catch(next)
    Products.findAll().then(row => {
        res.json(row)
    }).catch(next)

}


// exports.getProductById = (req, res, next) => {
//     res.send('in GetProduct By Id')

// find by id

exports.getProductById = (req, res, next) => {
    const {id} = req.params
    Products.findId(id).then((row)=> {
        res.json(row)

    }).catch(next)

}

exports.createProduct = (req, res, next) => {
    // const data = req.body
    // console.log(data)
    // res.send('createproduct')
    Products.create(req.body).then(rs=> {
        console.log(rs)
      //  res.json(rs)
        if(rs.affectedRows>=1) {
            res.status(201).json(rs)   //Create status
        }
    }).catch(next)
}