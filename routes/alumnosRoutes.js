const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController');

//rutas
//ruta para mostrar a los alumnos
router.get('/', alumnoController.mostrar);
//ruta para crear un alumno
router.post('/crear', alumnoController.crear);
//ruta para actualizar
router.post('/editar', alumnoController.editar);
//ruta para borrar alumnosRoutes
router.get('/borrar/:id', alumnoController.borrar);


module.exports = router