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
// se conecta con mongo
const mongo = require("./db/connect-old");
// // AGREGAR MODULOS LOCALES
require("./routes/api")(app);
require("./routes/views")(app);

// DATABASE
async function initDB(){
    const db = await mongo.connect();
    if (db) { initExpress(); }
}

// APP
function initExpress(){
    console.log("Iniciando instancia de Express...");
    app.listen(PORT, ()=>{
        console.log(`listening http://localhost:${PORT}`)
    });
    process.on("SIGINT", closeApp);
    process.on("SIGTERM", closeApp);
}

function closeApp(){
    mongo.disconnect()
        .then(()=>process.exit(0));
}

initDB();