const mongoose = require("mongoose");

const EsquemaProducto = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
}, {timestamps:true, versionKey:false});
//Timestamps: crea campos de createdAt y updateAt
//versionKey: elimina atirbuto __v

const Producto = mongoose.model("productos", EsquemaProducto);
module.exports = Producto;