const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  // process.env.DB_NAME,
  "tech_db",
  // process.env.DB_USER,
  "root",
  // process.env.DB_PASSWORD,
  "",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      socketPath: "/tmp/mysql.sock",
    },
  }
);

module.exports = sequelize;
