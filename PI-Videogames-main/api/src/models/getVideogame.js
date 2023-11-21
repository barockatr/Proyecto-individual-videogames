const express = require('express');
const axios = require('axios');
const { Videogame } = require('../db');

const router = express.Router();

router.get('/getVideogame/:id', async (req, res) => {
  const { id } = req.params;
  const apiKey = 'YOUR_API_KEY';

  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
    const videogameData = response.data;

    const createdVideogame = await Videogame.create({
      title: videogameData.name,
      api_id: videogameData.id,
      // Otros campos...
    });

    res.json(createdVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getVideogame', async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.query;

  try {
    if (id) {
      // Realizar solicitud a la API por ID
      // ... (lógica para buscar por ID)
    } else if (name) {
      // Realizar solicitud a la API por nombre
      // ... (lógica para buscar por nombre)
    } else if (genre) {
      // Realizar solicitud a la API por género
      // ... (lógica para buscar por género)
    } else {
      return res.status(400).json({ error: 'Se requiere al menos un parámetro (id, name o genre)' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
