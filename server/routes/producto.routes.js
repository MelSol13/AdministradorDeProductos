const ProductoController = require("../controllers/producto.controller")

module.exports = (app) => {
    app.get("/api/productos/", ProductoController.ver_todos);

    app.get("/api/productos/:id", ProductoController.ver_producto);

    app.post("/api/productos/", ProductoController.crear_producto);

    app.put("/api/productos/:id", ProductoController.editar_producto);

    app.delete("/api/productos/:id", ProductoController.borrar_producto);
}