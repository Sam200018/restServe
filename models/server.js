const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express(); //cuando se haga una nueva isntancia en el servidor se va a crear el servidor de express acá
        this.PORT = process.env.PORT;
        this.usuariosPath = "/api/usuarios";

        //Middlewares. añanden funcionalidad a mi web server y siempre va a ejecutarse al levantar el servidor
        this.middelewares();

        //rutas de la app
        this.routes();
    }

    middelewares() {
        //Directorio publico
        this.app.use(express.static("public")); //use es la palabra clave para decir que este es un middleware

        //parseo y lectura del body
        this.app.use(express.json());

        this.app.use(cors()); // con el cors podemos hacer que exactamente cierto dominio tenga acceso a esta parte, solamente nuesto url para despues agregar un api key
    }

    //Aquí podriamos poner nuestros endpoints
    routes() {
        //aquí podemos definir las rutas que yo quiera.
        this.app.use(this.usuariosPath, require("../routes/user"));
    }

    listen() {
        this.app.listen(this.PORT, () =>
            console.log("servidor corriendo en puerto", this.PORT)
        );
    }
}

module.exports = Server;