const Product = require ("../models/product.model")

module.exports.findAll = (req, res) =>{
  Product.find()
    .then((all)=>res.json({productos:all}))
    .catch((err)=>res.json({message: "Algo salio mal para traer todos los productos", error:err}))
}

module.exports.create = (req, res) => {
  Product.create(req.body)
    .then((newProduct)=> res.json({product:newProduct}))
    .catch((err)=>res.json({message: "Algo salio mal para crear un nuevo producto", error:err}))
}

module.exports.findOne = (req, res) =>{
  Product.findOne({_id: req.params.id})
    .then((product) => res.json({product:product}))
    .catch((err)=>res.json({message: "Algo salio mal para encontrar un producto", error:err}))

}

module.exports.update = (req, res) =>{
  Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then((product) => res.json({product:product}))
    .catch((err)=>res.json({message: "Algo salio mal para reemplazar un producto", error:err}))

}
module.exports.delete = (req, res) =>{
  Product.deleteOne({_id:req.params.id})
    .then((product)=>res.json({product:product}))
    .catch((err)=>res.json({message: "Algo salio mal para borrar un producto", error:err}))

}