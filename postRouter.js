const express = require("express");
const db = require("./data/db");

const postRouter = express.Router();

postRouter.get("/", (req, res) => {
  db.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).json(err.message));
});

postRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user.length) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: `user with id ${id} not found` });
      }
    })
    .catch(err => res.status(500).json(err.message));
});

module.exports = postRouter;
