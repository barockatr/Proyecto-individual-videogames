const express = require('express');
const { Videogame, Genre } = require('../db'); // Asegúrate de importar los modelos necesarios

const router = express.Router();

// Ruta POST /videogames
router.post('/', async (req, res) => {
  try {
    const { name, description, genres } = req.body;

    // Verificar que se proporcionen los datos necesarios
    if (!name || !description || !genres) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // Crear el videojuego en la base de datos
    const createdVideogame = await Videogame.create({
      name,
      description,
    });

    // Relacionar el videojuego con los géneros indicados
    await createdVideogame.setGenres(genres);

    res.status(201).json(createdVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;