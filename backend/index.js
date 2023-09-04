const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const hallRoutes = require('./routes/hallRoutes')
const teacherRouter = require('./routes/teacherRoute')
const Staff_member_router = require("./routes/staffMemberRoutes")


const app = express()
const PORT = process.env.PORT || 8080
const DB_URL = process.env.DB_URL

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use('/hall', hallRoutes)
app.use('/teacher', teacherRouter)
app.use("/staff", Staff_member_router)

mongoose.connect(DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT:${ PORT }`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
