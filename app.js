
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config({path:'./.env'}); 
const puerto = process.env.PORT || 5000;

//app.set('port', process.env.PORT || 4000); 
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const alumnos =require('./routes/alumnosRoutes.js');
app.use(alumnos)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(puerto, ()=>{
    console.log(`servidor en el puerto: ${puerto}`);
}) 

/* 
app.listen(app.get('port'),() => {
    console.log('servidor en el puerto:', app.get('port'));
})  */
