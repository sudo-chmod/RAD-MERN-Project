const { mongoose } = require("mongoose")

const Schema = require("mongoose").Schema

const staff_schema = new Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    NIC : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

const staff_member =  mongoose.model("staff_member", staff_schema)
module.exports = staff_member