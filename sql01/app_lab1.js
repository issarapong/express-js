const mysql = require('mysql2/promise')

// direct Conenct
const dbInfo = {
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'cc14_shop'
    
}  // Data for Connect DB

// mysql.createConnection(dbInfo)
//    .then( db => console.log( db => db.query('select * from products')
//     .then(result => console.log(result[0]))
//     )) // Connect DB

 const conn = mysql.createConnection(dbInfo)

// conn.then( db =>
//     db.query('select * from products').then( result => console.log(result[0]))
//     )
    

// conn.then( db =>
    //     db.query('select * from products').then( ([rows, fields]) => console.log(rows))
    //     )


    //   conn.then( db =>
//     db.query('select * from products').then(([rows])=> console.log(rows))
//     )      

conn.then( db =>
    db.query('select * from products').then( ([rows])=> {
        console.log(rows[2].price)
    }) 

    )

//ให้  console.log แสดง Product พร้อม Catagory_name ด้านล่าง
//ให้  console.log แสดง มูลค่ารวมของ Product ทั้งหมด

//let sql = 'SELECT products.name, categories.name FROM products LEFT JOIN categories ON products.category_id = categories.id' //แสดง Product พร้อม Catagory_name
// let sql = 'select p.name, p.price, c.name as c_name  from products p join categories c on p.category_id =c.id'
// conn.then(db=> {
//     db.query(sql).then( ([rows])=> {
//         console.log(rows)


//     }) 

// })


// let sql2 = 'SELECT SUM(price) totalsum FROM products' //แสดง Product พร้อม Catagory_name

// conn.then(db=> {
//     db.query(sql2).then( ([rows])=> {
//         console.log(rows)

//     }) 

// })
//conn.query('SELECT * FROM products').then( result => console.log(result))