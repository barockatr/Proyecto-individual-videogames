const express = require('express');
const cors = require('cors');
const { sequelize } = require('./db');
const videogameRouter = require('./routes/videogameRouter');
const genreRouter = require('./routes/genreRouter');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/videogames', videogameRouter);
app.use('/genres', genreRouter);

// Iniciar el servidor y conectar a la base de datos
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
});