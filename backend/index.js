const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require("./routes/authRoutes")
const studentRoutes = require("./routes/studentRoutes")
const teacherRoutes = require('./routes/teacherRoutes')
const subjectRoutes = require('./routes/subjectRoutes')
const staffRoutes = require("./routes/staffMemberRoutes")
const examRoutes = require('./routes/examRoutes')
const hallRoutes = require('./routes/hallRoutes')

const app = express()
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

app.use("/auth", authRoutes)
app.use("/student", studentRoutes)
app.use('/teacher', teacherRoutes)
app.use('/subject', subjectRoutes)
app.use("/staff", staffRoutes)
app.use('/exam', examRoutes)
app.use('/hall', hallRoutes)

mongoose.connect(DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on PORT:${ PORT }`)
        })
    })
    .catch((err) => {
        console.log(err)
    })
