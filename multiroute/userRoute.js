const express = require('express')
const router = express.Router()


router.get('/', (req,res)=> {
    res.json({ msg: 'from /user'})
})

router.get('/somone', (req,res)=> {
    res.json({ msg: 'from /user/somone'})
})

module.exports = router