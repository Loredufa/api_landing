const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('schedule', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    excursion: {
      type:DataTypes.STRING,
      allowNull:true,
    },   
    actividades: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    consideraciones: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  })

  };