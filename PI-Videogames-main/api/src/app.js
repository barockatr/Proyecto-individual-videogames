const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { Videogame } = require('./db');
require('./db.js');

const server = express();
server.name = 'API';

// Middleware
server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));

// CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Actualiza con el dominio desde el cual realizarás la solicitud
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
server.use('/', routes);

// Error handling middleware
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// Nueva ruta para obtener datos de la API y almacenarlos en la base de datos
server.get('/getVideogame/:id', async (req, res) => {
  const { id } = req.params;
  const apiKey = 'YOUR_API_KEY'; // Reemplaza con tu propia API Key
  try {
    // Realizar solicitud a la API con la apiKey
    // ... (aquí iría la lógica para hacer la solicitud HTTP a la API y obtener datos)
    // Guardar la información en la base de datos
    const createdVideogame = await Videogame.create({
      name: 'Nombre del Videojuego', // Reemplaza con el nombre real obtenido de la API
      api_id: id, // o el campo adecuado que devuelva la API como identificación única
      // Otros campos...
    });
    res.json(createdVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Nueva ruta para eliminar un videojuego por su ID
server.delete('/deleteVideogame/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Buscar el videojuego en la base de datos por su ID
    const videogameToDelete = await Videogame.findByPk(id);
    // Verificar si el videojuego existe
    if (!videogameToDelete) {
      return res.status(404).json({ error: 'Videojuego no encontrado' });
    }
    // Eliminar el videojuego
    await videogameToDelete.destroy();
    res.json({ message: 'Videojuego eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = server;