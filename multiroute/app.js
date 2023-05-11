require('dotenv').config()
const fs = require('fs/promises')
const express = require('express')
const todoRoute = require('./todoroute')
const userRoute = require('./userRoute')
const app = express()

app.use('/users', userRoute)
app.use('/todos', todoRoute)



const port = process.env.PORT || 8888
app.listen(port, ()=>console.log(`Server on port ${port}`))