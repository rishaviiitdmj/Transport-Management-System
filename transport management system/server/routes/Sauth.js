const express = require('express');
const router= express.Router();
const mongoose= require('mongoose')
const Suser=mongoose.model('Suser')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const {JWT_SECRET} =require('../keys')
const requireSlogin = require('../middleware.js/requireSlogin') 

//signup route

 router.post('/Ssignup',(req,res)=>{
        const {Sname,phone,password} = req.body 
        if(!Sname||!phone||!password){
           return res.status(422).json({error:"please add all the fields"})
        }
        Suser.findOne({phone:phone})
        .then((savedSuser)=>{
            if(savedSuser){
              return res.status(422).json({error:"user already exists with that phone number"})
            }
            bcrypt.hash(password,12)
            .then(hashedpassword=>{
                  const suser = new Suser({
                      Sname,
                      password:hashedpassword,
                      phone
                  })
          
                  suser.save()
                  .then(suser=>{
                      
                      res.json({message:"saved successfully"})
                  })
                  .catch(err=>{
                      console.log(err)
                  })
            })
           
        })
        .catch(err=>{
          console.log(err)
        })
      })

//sigin route

router.post('/Slogin',(req,res)=>{
    const {Sname,password} = req.body
    if(!Sname || !password){
       return res.status(422).json({error:"please add Shop Name or password"})
    }
    Suser.findOne({Sname:Sname})
    .then(savedSuser=>{
        if(!savedSuser){
           return res.status(422).json({error:"User donot exist"})
        }
        
        bcrypt.compare(password,savedSuser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedSuser._id},JWT_SECRET)
               const {_id,Sname,phone}= savedSuser
               res.json({token,suser:{_id,Sname,phone}})
            }
            else{
                return res.status(422).json({error:"Invalid Shop Name or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports=router