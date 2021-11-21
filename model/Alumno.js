const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const AlumnoSchema = new Schema({
    nombre: String,
    edad: Number
}, {cersionKey:false})

module.exports = mongoose.model('alumnos', AlumnoSchema)

