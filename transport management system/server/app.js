const express = require('express')
const mongoose=require('mongoose');
const app = express()
const path=require('path')
const {MONGOURI} =require('./keys')
const PORT = process.env.PORT || 3001

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require('./models/LuserSchema')
require('./models/TuserSchema')
require('./models/vehicleSchema')
require('./models/goodSchema')
require('./models/SuserSchema')
require('./models/pendingSchema')
app.use(express.json())

app.use(require('./routes/Lauth'))
app.use(require('./routes/Tauth'))
app.use(require('./routes/vehicle'))
app.use(require('./routes/good'))
app.use(require('./routes/Sauth'))
app.use(require('./routes/pending'))

app.listen(PORT,()=>{
    console.log("server is running in",PORT)
})