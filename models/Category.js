const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
   },
    Shirts: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  Shorts: {
    type: DataTypes.STRING,
    allowNull: false,
},
Music: {
  type: DataTypes.STRING,
  allowNull: false,
},
Hats: {
  type: DataTypes.STRING,
  allowNull: false,
},
Shoes: {
  type: DataTypes.STRING,
  defaultValue: true,
},
product_id: {
  type: DataTypes.INTEGER,
  references: {
    model: 'product',
    key: 'id',
  },
},
},
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
