const knex = require("./knex_connection");

knex.schema.hasTable("student").then((exists) => {
  if (!exists) {
    return knex.schema
      .createTable("student", (table) => {
        table.increments("id").primary();
        table.string("first_name");
        table.string("last_name");
        table.string("email");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  console.log("Table has created");
});
