const express = require("express");

const server = express();

const todosRouter = require("../todos/todos-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.use("/todos", todosRouter);

module.exports = server;
