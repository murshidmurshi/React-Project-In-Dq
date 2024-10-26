const mongoose = require('mongoose')
const { Schema } = mongoose

const ImageSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    image: {
        type: String,
        //contentType:String
    }
})

module.exports = mongoose.model('image', ImageSchema)