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
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// Se usará apiKey en el código para hacer solicitudes a la API
const apiKey = process.env.REACT_APP_API_KEY;


// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Server listening at http://localhost:3001/'); 
  });
});