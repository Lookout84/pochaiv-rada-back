'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Session.hasOne(models.Author, {
        foreignKey: 'author',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      models.Author.belongsTo(Session)

      Session.hasOne(models.Type, {
        foreignKey: 'type',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      models.Type.belongsTo(Session)
    }
  }
  Session.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING,
    author: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    date: DataTypes.DATE,
    numberSession: DataTypes.INTEGER,
    file: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};