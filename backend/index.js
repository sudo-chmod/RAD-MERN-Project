const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

mongoose.connect(DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT:${ PORT }`)
        })
    })
    .catch((err) => {
        console.log(err)
    })