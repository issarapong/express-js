
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