const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: String,
        required: true
    },
    students: [ String ],
    teachers: [ String ]
},
    {
        timestamps: true
    });

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
