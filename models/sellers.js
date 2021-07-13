const sequelize = require("../db/database");
const { DataTypes } = require("sequelize");
const Users = require("./users");

const Sellers = sequelize.define("seller", {
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
});

Sellers.belongsTo(Users);

module.exports = Sellers;
