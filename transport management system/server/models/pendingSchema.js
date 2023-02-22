const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types;
const pendingSchema = new mongoose.Schema({ 
    party: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required:true
      },
      GoodBy:{
          type:String,
          required:true
      },
      vehicleBy:{
          type: String,
          required:true
         },
      items: [{
          itemName:{
          type:String,
          required:true
          },
          quantity:{
              type:Number,
              required:true
          },
          weight:{
            type:Number,
            required:true
          }
          },]
        
    })
  
   mongoose.model("Pending",pendingSchema)