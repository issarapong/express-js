require('dotenv').config()
const {readFile, writeFile} = require('fs/promises')
const express = require('express')
const app = express()


//const getProducts = () => readFile("./products.json", "utf8").then(data => JSON.parse(data)) //JSON.parse(data) GET STRING to json obj
const getProducts = () => readFile("./products.json", "utf8").then(JSON.parse) 

app.get('/products',(req,res)=> {
     const {_page = 1, _limit = 10} = req.query
     getProducts().then(allproduct => {
        console.log(allproduct)
        let start = (_page-1) * _limit
        let end = start + _limit
        let scope_items = allproduct.slice(start, end)
        console.log(scope_items)
        return scope_items
     }).then( output => res.json(output))
  
})

app.use((req,res)=> {
    res.status(404).json({ msg: "path not found"})
})





let port = process.env.PORT || 8080
app.listen(port, ()=> console.log('Server on port', port))




// require('dotenv').config()
// const {readFile, writeFile} = require('fs/promises')
// const express = require('express')
// const app = express()

// // const getProducts = () => readFile("./products.json", "utf8").then(data => JSON.parse(data))
// const getProducts = () => readFile("./products.json", "utf8").then(JSON.parse)

// app.get('/products', (req,res) => {
//     const {_page = 1, _limit = 10} = req.query
//     getProducts().then(all => {
//         let start = (_page-1) * _limit
//         let end = start + _limit 
//         let scope_items = all.slice(start, end)
//         console.log(scope_items)
//         return scope_items
//     }).then( output => res.json(output))

// })

// app.use((req, res)=> {
//     res.status(404).json({msg : "path not found"})
// })

// let port = process.env.PORT || 8080
// app.listen(port, ()=> console.log('Server on',port))