const express=require('express')
const jwt=require('jsonwebtoken')
//const JWT_SECRET='hello'
const dotenv=require('dotenv')
dotenv.config()

const FetchUser=async(req,res,next)=>{
    let token=req.header('auth-token');
    if(!token){
        return (
            res.status(401).send({message:'Please authenticate using valid a token'})
        )
    }
    try{
        const data=await jwt.verify(token,process.env.JWT_SECRET)
        req.user=data.user
        next()
    }
    catch(err){
        res.status(401).send({message:'catch Please authenticate using valid a token'})
        console.log(err)


    }
}
module.exports=FetchUser