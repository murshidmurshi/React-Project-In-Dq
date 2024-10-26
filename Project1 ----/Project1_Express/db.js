const mongoose=require('mongoose')
const dbname='VegMarket'
const Mongo_URL=`mongodb://127.0.0.1:27017/${dbname}`

const ConnectMongo=async(req,res)=>{
    try{
        await mongoose.connect(Mongo_URL)
        console.log('Connected to db Succussfully')
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:'Internal Server Error'})
    }
}
module.exports=ConnectMongo
