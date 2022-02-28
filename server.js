const express = require("express");
const knex = require("./connection/create_table");
const router = express.Router();

const app = express();
app.use(express.json());
app.use("/", router);

require("./router/getApi")(router);
require("./router/postApi")(router);
require("./router/putApi")(router);
require("./router/deleteApi")(router);

app.listen(3000, () => {
  console.log("Server has started on port 3000");
});
