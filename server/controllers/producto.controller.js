const Producto = require("../models/producto.model");

module.exports.ver_todos = (req, res) => {
    Producto.find()
    .then(productos => res.json(productos))
    .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.ver_producto = (req, res) =>{
    Producto.findOne({_id: req.params.id})
    .then(producto => res.json(producto))
    .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.crear_producto = (req, res) => {
    Producto.create(req.body)
    .then(producto => res.json(producto))
    .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.editar_producto = (req, res) => {
    Producto.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(producto => res.json(producto))
        .catch(err => res.json({message:"Hubo un error"+err}));
}

module.exports.borrar_producto = (req, res) => {
    Producto.deleteOne({_id: req.params.id})
    .then(producto => res.json(result))
    .catch(err => res.json({message:"Hubo un error"+err}));
}