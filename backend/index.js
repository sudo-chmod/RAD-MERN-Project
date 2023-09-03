const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${ PORT }`)
})
