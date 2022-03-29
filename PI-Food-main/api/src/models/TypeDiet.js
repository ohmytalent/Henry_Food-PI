const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('typeDiet', {
    
    name: {
      type: DataTypes.STRING,
       allowNull: false,
       unique: true
    }
       //no agrego id porque lo hace automaticamente sql (en este caso me sirve)

  });
};