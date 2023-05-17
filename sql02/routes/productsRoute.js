const express = require('express')
const {getAllProducts, getProductById, createProduct, deleteProducts, updateProducts, getProductByName } = require('../controllers/productController')
const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('get all product')
// })

router.get('/', getAllProducts)
//3 ค้นหา products จาก บางว่วนของชื่อห
router.get('/search', getProductByName) // req.query
//  /products?name="Complete"
router.get('/:id', getProductById)
router.post('/', createProduct)


//HOmework
//1 ลบตาม id ที่ระบุ
router.delete('/:id', deleteProducts)  //req.params
//2 update ข้อมูล ตาม id ที่ระบุ
router.put('/:id', updateProducts) //req.params + req.body



module.exports = router

