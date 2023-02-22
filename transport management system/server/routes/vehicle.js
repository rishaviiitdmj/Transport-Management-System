const express = require('express');
const router= express.Router();
const mongoose= require('mongoose')
const Vehicle=mongoose.model('Vehicle')
const requireTlogin = require('../middleware.js/requireTlogin') 



router.post('/Thome', requireTlogin,(req, res) => {
  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
   
  var dateT = new Date();
  var month = pad2(dateT.getMonth()+1);
  var day = pad2(dateT.getDate());
  var year= dateT.getFullYear();
  
  const formattedDate =  day+"-"+month+"-"+year;
        const {vehicleNo,from,to}=req.body
        if(!req.tuser){
          return req.status(422).json({error : "session expired."})
        }
        if(!vehicleNo||!from||!to){
            return res.status(422).json({error:"Please fill all the fields"})
        }
       Vehicle.findOne({vehicleNo:vehicleNo, date:formattedDate})
    .then((savedVehicle)=>{
        if(savedVehicle){
           return res.status(422).json({error:"Vehicle Already Present for today"})
           
        }

  const vehicle = new Vehicle({
    vehicleNo,
    vehicleBy:req.tuser,
    from,
    to,
    date:formattedDate
  })
  
  vehicle.save().then(result=>{
    res.json({vehicle:result})

  })
  .catch(err=>{
    console.log(err)
  })
})
})
router.get('/allvehicle',requireTlogin,(req,res)=>{
  Vehicle.find()
  .populate("vehicleBy","_id Tname name phone")
  .then((vehicles)=>{
      res.json({vehicles})
  }).catch(err=>{
      console.log(err)
  })
})

module.exports = router