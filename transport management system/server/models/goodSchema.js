const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types;
const goodSchema = new mongoose.Schema({ 
   
  vehicle:{
    type:String
  },
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
        type: Number,
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

 mongoose.model("Good",goodSchema)