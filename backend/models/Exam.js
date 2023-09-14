const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        subject: {
            type: String,
            required: true
        },
        yearOfStudy: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Exam', examSchema);
