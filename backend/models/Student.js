const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    stdId: {
        type: String,
        require: true,
    },
    yearOfStudy: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    NIC: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true,
    },
    DOB: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
},
    {
        timestamps: true
    })

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;