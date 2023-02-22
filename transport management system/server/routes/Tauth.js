const express = require('express');
const router= express.Router();
const mongoose= require('mongoose')
const Tuser=mongoose.model('Tuser')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const {JWT_SECRET} =require('../keys')
const requireTlogin = require('../middleware.js/requireTlogin') 

//signup route

 router.post('/Tsignup',(req,res)=>{
        const {name,phone,password,Tname} = req.body 
        if(!name||!phone||!password||!Tname){
           return res.status(422).json({error:"please add all the fields"})
        }
        Tuser.findOne({phone:phone})
        .then((savedTuser)=>{
            if(savedTuser){
              return res.status(422).json({error:"user already exists with that phone number"})
            }
            bcrypt.hash(password,12)
            .then(hashedpassword=>{
                  const tuser = new Tuser({
                      name,
                      Tname,
                      password:hashedpassword,
                      phone
                  })
          
                  tuser.save()
                  .then(tuser=>{
                      
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

router.post('/Tlogin',(req,res)=>{
    const {Tname,password} = req.body
    if(!Tname || !password){
       return res.status(422).json({error:"please add Transport Name or Phone Number or password"})
    }
    Tuser.findOne({Tname:Tname})
    .then(savedTuser=>{
        if(!savedTuser){
           return res.status(422).json({error:"User already exist"})
        }
        
        bcrypt.compare(password,savedTuser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedTuser._id},JWT_SECRET)
               const {_id,name,Tname,phone}= savedTuser
               res.json({token,tuser:{_id,name,phone,Tname}})
            }
            else{
                return res.status(422).json({error:"Invalid Transport Name or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports=router