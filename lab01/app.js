const express = require('express')
const app = express()

app.get('/', (req,res)=> {
    console.log(req.method)
    console.log(req.url)
    res.send('OK')
})

app.listen(8080, ()=>console.log('Server on 8080'))
