const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types;
const SuserSchema = new mongoose.Schema({ 
   
  Sname:{
    type:String,
    required:true
  },
    phone: {
      type: Number,
      required: true
    },
    password: {
        type: String,
        required:true
      }
  })

  mongoose.model("Suser",SuserSchema)