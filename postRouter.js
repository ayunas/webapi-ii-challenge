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

postRouter.get("/:id/comments", (req, res) => {
  const { id } = req.params;
  console.log(id);
  db.findPostComments(id)
    .then(comments => {
      if (comments.length) {
        res.status(200).json(comments);
      }
      res.status(404).json({ error: `comments for post ${id} not found` });
    })
    .catch(err => res.status());
});

module.exports = postRouter;
