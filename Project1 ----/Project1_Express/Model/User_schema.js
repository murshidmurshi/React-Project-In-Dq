const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('user', UserSchema)