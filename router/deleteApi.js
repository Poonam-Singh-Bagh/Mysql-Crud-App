const knex = require("../connection/knex_connection");

module.exports = (Router) => {
  Router.delete("/students/:id", (req, res) => {
    let id = req.params.id;
    knex("students")
      .where("id", id)
      .delete()
      .then((data) => {
        if (data) {
          // res.send("Deleted...");
          res.status(200).send({
            success: true,
            message: "Successfully Deleted",
            data: organizationPlan,
          });
        } else {
          res.status(200).send({
            success: false,
            message: "No match data found",
            data: organizationPlan,
          });
          // res.status(400);
          // res.json({ message: "Bad Requests, Data has deleted" });
        }
      })
      .catch((err) => {
        res.status(400);
        res.json({ message: "Bad Requests, Data has deleted" });
      });
  });
};
