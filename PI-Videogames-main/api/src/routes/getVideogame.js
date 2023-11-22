const express = require('express');
const axios = require('axios');
const { Videogame } = require('../db');

const router = express.Router();


router.get('/getVideogame', async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.query;
  try {
    if (id) {
      // Realizar solicitud a la API por ID
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
      const videogameData = response.data;
      const createdVideogame = await Videogame.create({
        title: videogameData.name,
        api_id: videogameData.id,
        // Otros campos...
      });
      res.json(createdVideogame);
    } else if (name) {
      // Realizar solicitud a la API por nombre
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${apiKey}`);
      const videogamesData = response.data.results;
      res.json(videogamesData);
    } else if (genre) {
      // Realizar solicitud a la API por género
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(`https://api.rawg.io/api/games?genres=${genre}&key=${apiKey}`);
      const videogamesData = response.data.results;
      res.json(videogamesData);
    } else {
      return res.status(400).json({ error: 'Se requiere al menos un parámetro (id, name o genre)' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

//...

module.exports = router;