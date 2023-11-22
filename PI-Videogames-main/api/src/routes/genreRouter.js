const express = require('express');
const router = express.Router();

// Importar el controlador para las rutas de géneros
const genreController = require('../controllers/genreController');

// Definir las rutas para los géneros
router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', genreController.createGenre);
router.put('/:id', genreController.updateGenre);
router.delete('/:id', genreController.deleteGenre);

module.exports = router;