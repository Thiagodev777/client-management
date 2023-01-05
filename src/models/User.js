const Sequelize = require("sequelize");
const Datatypes = Sequelize.DataTypes;
const connection = require("../../config/database/database");

const User = connection.define(
  "users",
  {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.sync({ force: false });

module.exports = User;
