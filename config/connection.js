const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("museum_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
  dialectOptions: {
    socketPath: "/tmp/mysql.sock",
  },
});

module.exports = sequelize;
