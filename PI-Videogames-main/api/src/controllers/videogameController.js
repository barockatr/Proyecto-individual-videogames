// En tu archivo routes/videogameRoutes.js

const express = require('express');
const { createVideogame } = require('./videogameController');

const router = express.Router();

router.post('/videogames', createVideogame);

module.exports = router;
