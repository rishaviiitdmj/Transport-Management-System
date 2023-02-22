const express = require('express');
const router= express.Router();
const mongoose= require('mongoose')
const Luser=mongoose.model('Luser')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET} =require('../keys')
const requireLlogin = require('../middleware.js/requireLlogin')  

//signup route

 router.post('/Lsignup',(req,res)=>{
        const {name,phone,password,Tphone} = req.body 
        if(!name||!phone||!password||!Tphone){
           return res.status(422).json({error:"please add all the fields"})
        }
        Luser.findOne({phone:phone})
        .then((savedLuser)=>{
            if(savedLuser){
              return res.status(422).json({error:"user already exists with that phone number"})
            }
            bcrypt.hash(password,12)
            .then(hashedpassword=>{
                  const luser = new Luser({
                    name,
                      password:hashedpassword,
                      phone,
                      Tphone
                  })
          
                  luser.save()
                  .then(user=>{
                      
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

router.post('/Llogin',(req,res)=>{
    const {phone,password} = req.body
    if(!phone || !password){
       return res.status(422).json({error:"please add Phone Number or password"})
    }
    Luser.findOne({phone:phone})
    .then(savedLuser=>{
        if(!savedLuser){
           return res.status(422).json({error:"User already exist"})
        }
        bcrypt.compare(password,savedLuser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedLuser._id},JWT_SECRET)
               const {_id,name,phone,Tphone}= savedLuser
               res.json({token,luser:{_id,name,phone,Tphone}})
            }
            else{
                return res.status(422).json({error:"Invalid Phone no. or password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports=router