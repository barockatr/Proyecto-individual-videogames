require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, 'models'))
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const modelPath = path.join(__dirname, 'models', file);
    const model = require(modelPath)(sequelize);
    modelDefiners.push(model);
  });

// Injectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => {
  if (model.associate) {
    model.associate(sequelize.models);
  }
});

// Capitalizamos los nombres de los modelos, por ejemplo: product => Product
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map(([name, model]) => [name[0].toUpperCase() + name.slice(1), model]);
sequelize.models = Object.fromEntries(capsEntries);

// Aca vendrían las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize, // para importar la conexión { sequelize } = require('./db.js');
};