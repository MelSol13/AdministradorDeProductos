import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const NuevoProducto = () => {
    const [nombre, setNombre]= useState("");
    const [precio, setPrecio]=useState("");
    const [descripcion, setDescripcion]= useState("");
    const navigate = useNavigate();

    const guardarProducto = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/productos", {
            nombre,
            precio,
            descripcion
        })
            .then( res => {
                console.log(res)
                setNombre("");
                setPrecio("");
                setDescripcion("");
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return(
        <div>
            <h1>NuevoProducto</h1>
            <form onSubmit={guardarProducto}>
                <div>
                    <label>Nombre:</label>
                    <input id="nombre" name="nombre" type="text" onChange={e => setNombre(e.target.value)} value={nombre}></input>
                </div>
                <div>
                    <label>Precio:</label>
                    <input id="precio" name="precio" type="number" onChange={e => setPrecio(e.target.value)} value={precio}></input>
                </div>
                <div>
                    <label>Descripción:</label>
                    <input id="descripcion" name="descripcion" type="text" onChange={e => setDescripcion(e.target.value)} value={descripcion}></input>
                </div>
                <input type="submit" className="btn btn-success mt-3" value="Guardar Producto"/>
            </form>
        </div>
    )
}

export default NuevoProducto;