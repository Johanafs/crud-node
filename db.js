const mongoose = require("mongoose");
//Set up default mongoose connection
const URL= "mongodb://localhost/db_alumnos";

mongoose.connect(URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "Error al conectar con MongoDB"));
db.once("open", function callback() {
  console.log("conectado a MongoDB");
});

module.exports = db; 

//++++++++++++++++++++++

/* const mongoose = require("mongoose");
//Set up default mongoose connection
require('dotenv').config({path:'./.env'}); 

mongoose.connect(process.env.URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "Error al conectar con MongoDB"));
db.once("open", function callback() {
  console.log("conectado a MongoDB");
});

module.exports = db;  */
