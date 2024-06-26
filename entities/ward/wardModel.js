const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wardSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    department : [{
        type : Schema.Types.ObjectId,
        ref : 'department'
    }],
    capacity : {
        type : Number,
        required : true
    },
    currectOccupant : {
        type : String,
        required : true
    },
    patients : [{
        type : Schema.Types.ObjectId,
        ref : 'patient'
    }],
    staff : [{
        type : Schema.Types.ObjectId,
        ref : 'staff'
    }],
    location : {
        type : String, 
        required : true
    },
    numberOfBeds : {
        type : Number,
        required : true
    }
})

const Ward = mongoose.model('Ward', wardSchema)
module.exports = Ward