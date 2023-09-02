const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: false
    },
    phoneNumber:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    Subjects:{
        type: String,
        required: true
    },
    Qulifications:{
        type: String,
        required: false
    },
    sex:{
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },

    School:{
        type: String,
        required: false
    },
    password:{
        type: String,
        required: true
    }
})

const teacher = mongoose.model("teacher", teacherSchema);

module.exports = teacher;