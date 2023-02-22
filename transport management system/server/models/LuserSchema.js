const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema.Types;
const LuserSchema = new mongoose.Schema({ 
   
  name:{
    type:String,
    required:true
  },
    phone: {
      type: Number,
      required: true
    },
    Tphone: {
      type: Number,
      required:true
    },
    password: {
        type: String,
        required:true
      }
  })

  mongoose.model("Luser",LuserSchema)