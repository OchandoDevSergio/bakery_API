'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Production.init({
    cantidad: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Production',
  });
  return Production;
};