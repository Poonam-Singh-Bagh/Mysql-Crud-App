const knex = require("../connection/knex_connection");

module.exports = (Router) => {
  Router.get("/", (req, res) => {
    res.send("Home Page");
  });

  Router.get("/students", (req, res) => {
    knex
      .select("*")
      .from("students")
      .then((data) => {
        res.json(data);
        res.status(200).send({
          success: true,
          message: "Data fetched successfully",
          // data: organizationPlan,
        });
      })
      .catch((err) => {
        res.json({ message: err });
        res.status(400);
        res.json({ message: "Bad Request" });
      });
  });

  Router.get("/students/:id", (req, res) => {
    let id = req.params.id;
    knex
      .select("*")
      .from("students")
      .then((data) => {
        const index = data.findIndex((student) => {
          return student.id === parseInt(id);
        });
        res.json(data[index]);
      })
      .catch((err) => {
        res.status(400);
        res.json({ message: "Bad Request" });
      });
  });
};
