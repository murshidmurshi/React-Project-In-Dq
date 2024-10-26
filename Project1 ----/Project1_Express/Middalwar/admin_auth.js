const express=require('express')
const jwt=require('jsonwebtoken')

const FetchAdmin=async(req,res,next)=>{
    let token=req.header('auth-token')
    if(!token){
        return res.status(401).send({message:"Please authenticate using Valid Token"})
    }
    try{
        const data=await jwt.verify(token,process.env.JWT_SECRET)
        req.admin=data.admin
        next()

    }
    catch(err){
        res.status(401).send({message:'catch-- Please authenticate using Valid Token'})
        console.log(err)
    }
}

module.exports=FetchAdmin