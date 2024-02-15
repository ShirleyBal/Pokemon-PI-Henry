const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.TEXT,
      allowNull:false
    },
    life:{
      type:DataTypes.STRING,
      allowNull:false
    },
    stroke:{
      type:DataTypes.STRING,
      allowNull:false
    },
    defending:{
      type:DataTypes.STRING,
      allowNull:false
    },
    speed:{
      type:DataTypes.STRING,
      allowNull:true
    },
    height:{
      type:DataTypes.STRING,
      allowNull:true
    },
    weight:{
      type:DataTypes.STRING,
      allowNull:true
    },
  });
};
