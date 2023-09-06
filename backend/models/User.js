const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            enum: [ 'student', 'teacher', 'admin' ]
        }
    }, { timestamps: true })

const User = mongoose.model("User", userSchema);

module.exports = User;