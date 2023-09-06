import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const ActualizarProducto = () => {
    const {id} = useParams();
    const [nombre, setNombre]= useState("");
    const [precio, setPrecio]=useState("");
    const [descripcion, setDescripcion]= useState("");
    const navigate = useNavigate();

useEffect(()=> {
axios
.get(`http://localhost:8000/api/productos/${id}`)
.then((res)=> {
    const producto = res.data;
    setNombre(producto.nombre);
    setPrecio(producto.precio);
    setDescripcion(producto.descripcion);
})
.catch((err)=>{
    console.log(err);
});
},[id]);

const actualizarProducto = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/productos/${id}`, {
            nombre,
            precio,
            descripcion
        })
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            });
    };

    return(
        <div>
            <h1>ActualizarProducto</h1>
            <form onSubmit={actualizarProducto}>
                <div>
                    <label>Nombre:</label>
                    <input id="nombre" name="nombre" type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}></input>
                </div>
                <div>
                    <label>Precio:</label>
                    <input id="precio" name="precio" type="number" onChange={(e) => setPrecio(e.target.value)} value={precio}></input>
                </div>
                <div>
                    <label>Descripción:</label>
                    <input id="descripcion" name="descripcion" type="text" onChange={(e) => setDescripcion(e.target.value)} value={descripcion}></input>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Guardar Producto"/>
            </form>
        </div>
    )
}

export default ActualizarProducto;