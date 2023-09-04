const { mongoose } = require("mongoose")

const Schema = require("mongoose").Schema

const staff_schema = new Schema({
    stfId :  {
        type : Number,
        required : true
    },
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    NIC : {
        type : String,
        required : true
    },
    civilStatus : {
        type : String,
        required : true,
        enum : ["married", "unmarried"]
    },
    type : {
        type : String,
        required : true,
        enum : ["permenent", "tempory"]
    },
    address : {
        type : String,
        required : true
    },
    salary : {
        type : String,
        required : true
    }
})

const staff_member =  mongoose.model("staff_member", staff_schema)
module.exports = staff_member