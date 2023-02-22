const {JWT_SECRET} = require('../keys')
const jwt =require('jsonwebtoken')
const mongoose = require('mongoose')
const Suser = mongoose.model("Suser")
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
        Suser.findById(_id).then(suserdata=>{
            req.suser = suserdata
            next()
        })
        
    })
}