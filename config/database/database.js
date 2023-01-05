require("dotenv").config();

const Sequelize = require("sequelize");
const connection = new Sequelize(
  process.env.NAME_DATABASE,
  process.env.USER_DATABASE,
  process.env.PASSWORD_DATABASE,
  {
    host: process.env.HOST,
    dialect: process.env.TYPE_DATABASE,
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("Conexao feita com sucesso");
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ${err}`);
  });

module.exports = connection;
