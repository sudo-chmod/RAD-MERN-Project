const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    stdId: {
        type : String,
        require : true,
    },
    yearOfStudy: {
        type : String,
        require : true
    },
    firstName: {
        type : String,
        require : true
    },
    lastName: {
        type : String,
        require : true
    },
    address: {
        type : String,
        require : true
    },
    mobile: {
        type : String,
        require : true
    },
    NIC: {
        type : String,
        require : true
    },
    gender: {
        type : String,
        require : true,
        enum : ["male", "female", "other"]
    },
    DOB: {
        type : String,
        require : true
    },
    email: {
        type : String,
        require : true,
        unique : true
    },
    password: {
        type : String,
        require : true
    }
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;