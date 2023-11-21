// En tu archivo controllers/videogameController.js

const { Videogame, Genre } = require('../db');

const createVideogame = async (req, res) => {
  try {
    const { name, description, platforms, image, releaseDate, rating, genres } = req.body;

    // Validar que se proporcionen al menos un género
    if (!genres || genres.length === 0) {
      return res.status(400).json({ error: 'Se requiere al menos un género para el videojuego.' });
    }

    // Crear el videojuego en la base de datos
    const createdVideogame = await Videogame.create({
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating,
    });

    // Obtener o crear los géneros proporcionados
    const createdGenres = await Promise.all(genres.map((genreName) => Genre.findOrCreate({
      where: { name: genreName },
    })));

    // Asociar los géneros al videojuego
    await createdVideogame.addGenres(createdGenres.map((genre) => genre[0]));

    res.json(createdVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createVideogame };
