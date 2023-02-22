const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types;
const TuserSchema = new mongoose.Schema({ 
   
  name:{
    type:String,
    required:true
  },
    phone: {
      type: Number,
      required: true
    },
    Tname: {
      type: String,
      required:true
    },
    password: {
        type: String,
        required:true
      }
  })

 mongoose.model("Tuser",TuserSchema)