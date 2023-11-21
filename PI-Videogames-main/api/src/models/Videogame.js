const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Videogame = sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, // Puedes usar DataTypes.INTEGER si prefieres IDs numéricos
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // Generar automáticamente un UUID único
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    platforms: {
      type: DataTypes.STRING, // Puedes ajustar el tipo de dato según la estructura de tus plataformas
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING, // Puedes ajustar el tipo de dato según la estructura de tus imágenes
      allowNull: true,
    },
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT, // Puedes ajustar el tipo de dato según la estructura de tus ratings
      allowNull: true,
    },
  });

  return Videogame;
};
