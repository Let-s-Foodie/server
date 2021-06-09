"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    static associate({ Sellers }) {
      this.belongsTo(Sellers, { as: "seller" });
      // by default, belongTo created foreign key automatically as sellersId because since we use as: 'seller', it will be sellerId
    }

    toJSON() {
      return { ...this.get(), sellerId: undefined };
    }
  }
  Dishes.init(
    {
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
    {
      sequelize,
      tableName: "dishes",
      modelName: "Dishes",
    }
  );
  return Dishes;
};
