const sequelize = require("../db/database");
const { DataTypes } = require("sequelize");
const Sellers = require("./sellers");

const Dishes = sequelize.define(
  "dishe",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "Dishes must have name" },
        notEmpty: { msg: "Name cannot be empty" },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Dishes must have image" },
        notEmpty: { msg: "Image cannot be empty" },
      },
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Dishes must have category" },
        notEmpty: { msg: "Category cannot be empty" },
      },
    },
  },
  { timestamps: false }
);

Dishes.belongsTo(Sellers);

module.exports = Dishes;
