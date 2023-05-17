
// การตั้งชื่อไฟลล์ใน Models ไม่จำเป็นต้องมี มีคำว่า Models กำกับ เพราะ ใช้ชื่อ Table ในการตั้งชื่อเลย
const mysql = require('mysql2/promise')
const pool = mysql.createPool(process.env.DB_CONNECT)

exports.findAll = () => {
    let sql ='select * from products'
    return  pool.query(sql).then(([rows]) => rows
    )

}


exports.findId =(id) => {
    let sql = 'select * from producs where id = ?'
    return pool.query(sql, [id]),then( ([rows]) => rows)
}

exports.create = (product) => {
    let {name, price, quantity, category_id} =product
    let sql ='INSERT INTO products (name, price, quantity, category_id) VALUES (?,?,?,?)'
    return pool.query(sql, [name, price, quantity, category_id]).then(([rs]) => rs)
}

exports.delete = (id) => {
    let sql = 'delete from products where id =?'
    return pool.query(sql, [id]).then(([rs]) => rs)
}

exports.update = (id, body) => {
    const {name, price, quantity, category_id } = body
    let sql = 'UPDATE products SET  name=?, price=?, quantity=?, category_id=?, WHERE id=?'
    return pool.query(sql,[name, price, quantity, category_id, id]).then(([rs])=>rs)
}

exports.findByName = (name) => {
    let sql = 'SELECT * FROM products WHERE name LIKE ?'
    return pool.query(sql, [`%${name}%`]).then(([rs])=> rs)
}