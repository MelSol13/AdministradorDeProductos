/*
Creamos server.js
Creamos carpeta server
npm init -y (Genera el package.json)
Editamos package.json -> "start": "nodemon server.js"
npm install express mongoose cors
Creamos carpetas config, controllers, models y routes dentro de server
Abrir una nueva pestaña de terminal y coloque npx create-react-app client
Terminal1 (Servidor - Express - adminProductos) Terminal 2(Cliente - React - cd client)

SERVER
config(mongoose.config.js)
models(documento.model.js)
controllers
routes
server.js
*/

const express = require("express");
const app = express();

const cors = require("cors");

//Para usar json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//permite accesar desde un origen distinto
app.use(
    cors({
        //URL front end
        origin: "http://localhost:3000"
    })
)

//inicializa base datos
require("./server/config/mongoose.config")

//importamos rutas
const misRutas = require("./server/routes/producto.routes")

misRutas(app);

//ejecutamos el server
app.listen(8000, () => console.log("Servidor Listo!"));