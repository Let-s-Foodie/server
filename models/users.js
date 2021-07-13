const sequelize = require("../db/database");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
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
});

module.exports = Users;
