const {JWT_SECRET} = require('../keys')
const jwt=require('jsonwebtoken')
const mongoose = require('mongoose')
const Tuser = mongoose.model("Tuser")
module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        Tuser.findById(_id).then(tuserdata=>{
            req.tuser = tuserdata
            next()
        })
        
    })
}