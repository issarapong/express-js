// const mysql = require('mysql2/promise')

// const pool = mysql.createPool(process.env.DB_CONNECT)

// exports.getAllProducts = (req, res, next) => {
//     res.send(' in getAllProducts')
    
// }

const error = require('../middlewares/error')
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
        throw new Error( 'cant create')
    }).catch(next)
}

exports.deleteProducts = (req, res, next) => {
    const {id} = req.params
    Products.delete(id).then(rs => {
        if(rs.affectedRows>=1) {
            res.json('delete ok')
        } else {
        //res.status(500).json({err: 'cant delete'})
        const c_err = new Error(`Cant delet:  ${id}`)
        c_err.statusCode = 444
         throw c_err
        //throw new Error(`Cant delet:  ${id}`)

        }
    }).catch(err => next(err))
}


exports.updateProducts = (req, res, next) => {
    const {id} =req.params
    Products.update(id,req.body).then(rs=>{
        console.log(rs)
        if(rs.affectedRows>=1){
            return res.json(rs)
        }
        throw new Error('Cantupdate')
    })
    res.send('update Product')
}

exports.getProductByName = (req, res, next) => {
    const {name} = req.query
    Products.findByName(name).then(row => {
        res.json(row)
    }).catch(next)
}