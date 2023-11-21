// En tu archivo models/genre.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Genre = sequelize.define('Genre', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Genre;
};
