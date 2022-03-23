'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Executive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Executive.belongsTo(models.Author, {
        foreignKey: 'author',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Executive.belongsTo(models.Type, {
        foreignKey: 'type',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Executive.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    author: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    date: DataTypes.DATE,
    numberExecutive: DataTypes.INTEGER,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Executive',
  });
  return Executive;
};