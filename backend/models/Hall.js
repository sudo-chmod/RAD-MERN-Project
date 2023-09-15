const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        capacity: {
            type: Number,
            required: true
        },
        floor: {
            type: Number,
            required: true
        },
        type: {
            //AC or Non AC
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Hall = mongoose.model('Hall', hallSchema);

module.exports = Hall;


