const express = require('express')
const mongoose = require('mongoose')

const { Schema } = mongoose

const AdminSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: Number
    },
    email: {
        required: true,
        type: String,
        //unique: true
    },
    password: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('admin', AdminSchema)
