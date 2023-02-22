const {JWT_SECRET} = require('../keys')
const jwt =require('jsonwebtoken')
const mongoose = require('mongoose')
const Luser = mongoose.model("Luser")
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
        Luser.findById(_id).then(luserdata=>{
            req.luser = luserdata
            next()
        })
        
    })
}