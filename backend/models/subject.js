const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required:true
    },

    yearOfStudy: {
        type: String,
        required:true
    },

    studentId: [String]
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;