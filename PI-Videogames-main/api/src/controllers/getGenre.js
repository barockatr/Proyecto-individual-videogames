// En tu archivo controllers/genreController.js

const axios = require('axios');
const { Genre } = require('../db');

const getGenres = async (req, res) => {
  try {
    // Obtener géneros de la base de datos
    const dbGenres = await Genre.findAll();

    if (dbGenres.length > 0) {
      // Si hay géneros en la base de datos, devolver los datos
      return res.json(dbGenres);
    }

    // Si no hay géneros en la base de datos, buscar en la API
    const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu propia API Key
    const apiResponse = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`);
    const apiGenres = apiResponse.data.results;

    // Guardar los géneros de la API en la base de datos
    await Genre.bulkCreate(apiGenres.map((apiGenre) => ({
      name: apiGenre.name,
    })));

    // Devolver los géneros
    res.json(apiGenres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getGenres };
// En tu archivo routes/genreRoutes.js

const express = require('express');
const { getGenres } = require('../controllers/genreController');

const router = express.Router();

router.get('/genres', getGenres);

module.exports = router;
