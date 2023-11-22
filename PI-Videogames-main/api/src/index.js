//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const nodemon = require('nodemon');
const server = require('./app.js');
const { conn } = require('./db.js');
const { Router } = require('express');
const router = Router();

// Importar los routers
const videogameRouter = require('./routes/videogameRouter');
const genreRouter = require('./routes/genreRouter');

// Configurar los routers
router.use('/videogames', videogameRouter);
router.use('/genres', genreRouter);

// Se usará apiKey en el código para hacer solicitudes a la API
const apiKey = process.env.REACT_APP_API_KEY;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Server listening at http://localhost:3001/');
  });
});