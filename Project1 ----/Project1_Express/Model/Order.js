
const express = require('express')
const mongoose = require('mongoose')
const {Schema} = mongoose

const OrderSchema = new Schema ({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    shipping_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'shipping',
    },
    grocery_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'grocery',
    },
    cart:{
        type: Array,
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    order_no:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }, 
    status:{
        type:String,
        required:true,
    }, 
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("order", OrderSchema)