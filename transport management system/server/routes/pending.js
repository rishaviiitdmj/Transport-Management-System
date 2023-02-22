const express = require('express');
const router= express.Router();
const mongoose= require('mongoose')
const Pending=mongoose.model('Pending')
const requireSlogin = require('../middleware.js/requireSlogin') 

router.get('/allpending',requireSlogin,(req,res)=>{
  Pending.find()
  .then((pendings)=>{
      res.json({pendings})
  }).catch(err=>{
      console.log(err)
  })
})

router.post('/Sgood',requireSlogin, (req, res) => {
  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  
  var date = new Date();
  var month = pad2(date.getMonth()+1);//months (0-11)
  var day = pad2(date.getDate());//day (1-31)
  var year= date.getFullYear();
  
  var formattedDate =  day+"-"+month+"-"+year;
        const {GoodBy,vehicleBy,party,items}=req.body
        if(!GoodBy||!vehicleBy||!items||!party){
           
            return res.status(422).json({error:"Some field is empty"})
        }
  const pending = new Pending({
    GoodBy,
    vehicleBy,
    date:formattedDate,
    party,
    items
  })
  
  pending.save().then(result=>{
    res.json({post:result})
    
  })
  .catch(err=>{
    console.log(err)
  })
})
router.delete('/deletepost/:postId',requireSlogin,(req,res)=>{
  Pending.findOne({_id:req.params.postId})
  .exec((err,pending)=>{
      if(err || !pending){
          return res.status(422).json({error:err})
      }
      
            pending.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
  })
})
module.exports = router