const mysql = require('mysql2/promise')

const pool = mysql.createPool(process.env.DB_CONNECT)

// exports.getAllProducts = (req, res, next) => {
//     res.send(' in getAllProducts')
    
// }

exports.getAllProducts = (req, res, next) => {
    let sql ='select * from products'
    pool.query(sql).then(([rows]) => {
        res.json(rows)
    }).catch(next)
}


exports.getProductById = (req, res, next) => {
    res.send('in GetProduct By Id')
}