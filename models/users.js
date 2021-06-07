"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate({ Sellers }) {
      this.hasMany(Sellers, {
        foreignKey: "userId",
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  Users.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a email from Firebase account" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a role" },
          notEmpty: { msg: "Role must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
    }
  );
  return Users;
};
