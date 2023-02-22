const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema; 
const vehicleSchema = new mongoose.Schema({ 

 
  vehicleNo:{
    type:String,
    required:true
  },
  from:{
    type:String,
    required:true
  },
  to:{
    type:String,
    required:true
  },
  vehicleBy:{
    type:ObjectId,
    ref:"Tuser"
   },
   date:{
     type:String,
     required:true
   }
})
mongoose.model("Vehicle",vehicleSchema);