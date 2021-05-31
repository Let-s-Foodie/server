"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Sellers }) {
      // define association here
      this.belongsTo(Sellers, {
        foreignKey: "sellerId",
        as: "seller",
      });
    }

    toJSON() {
      return { ...this.get(), sellerId: undefined };
    }
    /* Hide id of the object when is newly created  */
    // toJSON() {
    //   return { ...this.get(), id: undefined };
    // }
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
      // sellerId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   validate: {
      //     notNull: { msg: "Dishes must have associated seller_id" }, // seller_id: ''
      //     notEmpty: { msg: "seller_id cannot be empty" }, // seller_id is not in req.body
      //   },
      // },
    },
    {
      sequelize,
      tableName: "dishes",
      modelName: "Dishes",
    }
  );
  return Dishes;
};
