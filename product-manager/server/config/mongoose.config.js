const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/productdb",{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  .then(()=>console.log("BASE DE DATOS CONECTADA"))
  .catch(err=>console.log("Algo salio mal",err))