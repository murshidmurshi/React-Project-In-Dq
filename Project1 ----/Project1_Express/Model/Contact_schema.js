const mongoose=require('mongoose')
const {Schema}=mongoose

const ContactSchema=new Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    message:{
        required:true,
        type:String
    }
})

module.exports=mongoose.model('contact',ContactSchema)