const env = require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "Crazypooh@1379",
    database: "students_database",
  },
});

module.exports = knex;
