const express = require('express');
const router= express.Router();
const mongoose= require('mongoose')
const Good=mongoose.model('Good')
const requireLlogin = require('../middleware.js/requireLlogin') 

router.get('/allgoods',requireLlogin,(req,res)=>{
  Good.find().sort({date:1,party:1,vehicle:1})
  .then((goods)=>{
      res.json({goods})
  }).catch(err=>{
      console.log(err)
  })
})

router.post('/Lhome',requireLlogin, (req, res) => {
  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  
  var date = new Date();
  var month = pad2(date.getMonth()+1);//months (0-11)
  var day = pad2(date.getDate());//day (1-31)
  var year= date.getFullYear();
  
  var formattedDate =  day+"-"+month+"-"+year;
        const {vehicle,GoodBy,vehicleBy,party,items}=req.body
        if(!vehicle||!items||!party){
           
            return res.status(422).json({error:"Some field is empty"})
        }
  const good = new Good({
    vehicle,
    GoodBy,
    vehicleBy,
    date:formattedDate,
    party,
    items
  })
  
  good.save().then(result=>{
    res.json({post:result})
    
  })
  .catch(err=>{
    console.log(err)
  })
})

module.exports = router