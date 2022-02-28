const knex = require("../connection/knex_connection");

module.exports = (Router) => {
  Router.post("/students", (req, res) => {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };
    knex("students")
      .insert(user)
      .then((data) => {
        res.status(201);
        res.json(user);
      })
      .catch((err) => {
        res.status(err.status || 500).send({
          success: false,
          message: err.message || "Internal Server Error",
        });
        // res.status(400);
        // res.json({ message: "Bad Request" });
      });
  });
};
