const express = require('express')
const {getAllProducts, getProductById, createProduct} = require('../controllers/productController')
const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('get all product')
// })

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)

//HOmework
//1 ลบตาม id ที่ระบุ
router.delete('/:id', ()=>{})  //req.params
//2 update ข้อมูล ตาม id ที่ระบุ
router.put('/:id', () =>{}) //req.params + req.body
//3 ค้นหา products จาก บางว่วนของชื่อห
router.get('/search, ()=>{}') // req.query
//  /products?name="Complete"


module.exports = router

