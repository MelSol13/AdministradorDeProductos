import {Routes, Route} from "react-router-dom";
import NuevoProducto from "./componentes/NuevoProducto";
import TodosProductos from "./componentes/TodosProductos";
import VerProducto from "./componentes/VerProducto";

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/nuevo" element={<NuevoProducto/>} />
        <Route path="/" exact element={<TodosProductos/>} />
        <Route path="/producto/:id" element={<VerProducto/>}/>
      </Routes>
    </div>
  )
}

export default App;
