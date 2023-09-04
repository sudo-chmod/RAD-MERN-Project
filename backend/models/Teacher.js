const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    tchId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        require: true
    },
    address: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
},
    {
        timestamps: true
    })

const teacher = mongoose.model("Teacher", teacherSchema);

module.exports = teacher;
