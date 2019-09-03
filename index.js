const express = require("express");

const server = express();

const postRouter = require("./postRouter");

const port = 8000;

server.use("/api/posts", postRouter);

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

server.get("/", (req, res) => {
  res.send("welcome to the node-api server");
});
