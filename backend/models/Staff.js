const mongoose = require("mongoose")

const Schema = require("mongoose").Schema

const staffSchema = new Schema({
    stfId: {
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
    category: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    civilStatus: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
},
    { timestamps: true })

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff