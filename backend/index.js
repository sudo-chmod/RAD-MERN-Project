const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

const DB_URL = process.env.MONGODB_URL;

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log('Error in connecting DB', err);
})

const userRouter = require('./routes/teacherRoute.js');
app.use('/teacher', userRouter);



app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT} `);
});