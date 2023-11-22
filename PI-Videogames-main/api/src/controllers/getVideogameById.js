// En tu archivo controllers/videogameController.js

const axios = require('axios');
const { Videogame, Genre } = require('../db');

const getVideogameDetail = async (req, res) => {
  const { idVideogame } = req.params;

  try {
    // Intentar obtener el videojuego de la base de datos
    const dbVideogame = await Videogame.findOne({
      where: { id: idVideogame },
      include: { model: Genre, attributes: ['name'], through: { attributes: [] } },
    });

    if (dbVideogame) {
      // Si se encuentra en la base de datos, devolver los datos
      return res.json(dbVideogame);
    }

    // Si no está en la base de datos, buscar en la API
    const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu propia API Key
    const apiResponse = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${apiKey}`);
    const apiVideogame = apiResponse.data;

    // Procesar los datos obtenidos de la API y guardar en la base de datos
    const createdVideogame = await Videogame.create({
      id: apiVideogame.id, // Puedes ajustar el nombre del campo según la estructura de tu base de datos
      name: apiVideogame.name,
      // Otros campos...
    });

    // Obtener el género asociado al videojuego desde la API
    const genreName = apiVideogame.genres?.[0]?.name; // Ajusta según la estructura exacta de tu API
    const genre = await Genre.findOrCreate({ where: { name: genreName } });

    // Asociar el género al videojuego recién creado
    await createdVideogame.addGenre(genre);

    res.json(createdVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getVideogameDetail };
