const knex = require("../connection/knex_connection");

module.exports = (Router) => {
  Router.put("/students/:id", (req, res) => {
    let id = req.params.id;
    console.log("id", typeof parseInt(id));
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };
    knex("students")
      .where("id", parseInt(id))
      .update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      })
      .then((data) => {
        console.log("data", data);
        res.json(user);
      })
      .catch((err) => {
        res.status(400);
        res.json({ message: "Bad Requests" });
      });
  });
};
