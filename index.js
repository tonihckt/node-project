/**
 * *************
 * API EXPRESS _ MONGO
 * *************
 */

// AGREGAR MODULOS DE NODE_MODULES
const express = require("express");
const app = express();
// PORT
const { PORT } = require("./config");
// // AGREGAR MODULOS LOCALES
require("./routes/api")(app);
require("./routes/views")(app);

function init(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log(`listening http://localhost:${PORT}`)
    });
}

init();