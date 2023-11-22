// En tu archivo controllers/videogameController.js

const axios = require('axios');
const { Videogame } = require('../db');

const getVideogamesByName = async (req, res) => {
  const { name } = req.query;

  try {
    // Buscar videojuegos en la base de datos
    const dbVideogames = await Videogame.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${name}%`, // Búsqueda insensible a mayúsculas y minúsculas
        },
      },
      limit: 15,
    });

    if (dbVideogames.length > 0) {
      // Si se encuentran en la base de datos, devolver los datos
      return res.json(dbVideogames);
    }

    // Si no se encuentran en la base de datos, buscar en la API
    const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu propia API Key
    const apiResponse = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${apiKey}`);
    const apiVideogames = apiResponse.data.results;

    if (apiVideogames.length > 0) {
      // Devolver los primeros 15 videojuegos de la API
      return res.json(apiVideogames.slice(0, 15));
    }

    // Si no se encuentran en la API ni en la base de datos, mostrar un mensaje
    res.status(404).json({ message: 'No se encontraron videojuegos con el nombre proporcionado.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getVideogamesByName };
