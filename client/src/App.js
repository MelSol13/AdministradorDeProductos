import {Routes, Route} from "react-router-dom";
import NuevoProducto from "./componentes/NuevoProducto";
import TodosProductos from "./componentes/TodosProductos";
import VerProducto from "./componentes/VerProducto";
import ActualizarProducto from "./componentes/ActualizarProducto";

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/nuevo" element={<NuevoProducto/>} />
        <Route path="/" exact element={<TodosProductos/>} />
        <Route path="/producto/:id" element={<VerProducto/>}/>
        <Route path="/update/:id" element={<ActualizarProducto/>}/>
      </Routes>
    </div>
  )
}

export default App;
