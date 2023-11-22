const express = require('express');
const router = express.Router();

// Importar el controlador para las rutas de videojuegos
const videogameController = require('../controllers/videogameController');

// Definir las rutas para los videojuegos
router.get('/', videogameController.getAllVideogames);
router.get('/:id', videogameController.getVideogameById);
router.post('/', videogameController.createVideogame);
router.put('/:id', videogameController.updateVideogame);
router.delete('/:id', videogameController.deleteVideogame);

module.exports = router;