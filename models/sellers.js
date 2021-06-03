"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sellers extends Model {
    static associate({ Dishes }) {
      this.hasMany(Dishes, {
        foreignKey: "sellerId",
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  Sellers.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "Seller must have a name" },
          notEmpty: { msg: "Name must not be empty" },
        },
      },
      lat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Undefined latitude" },
          notEmpty: { msg: "Seller must have latitude" },
        },
      },
      lng: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Undefined longitude" },
          notEmpty: { msg: "Seller must have l" },
        },
      },
      instagram: {
        type: DataTypes.STRING,
      },
      facebook: {
        type: DataTypes.STRING,
      },
      yelp: {
        type: DataTypes.STRING,
      },
      homepage: {
        type: DataTypes.STRING,
      },
      youtube: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "sellers",
      modelName: "Sellers",
    }
  );
  return Sellers;
};
