const express = require("express");

const server = express();

const todosRouter = require("../todos/todos-router");
const usersRouter = require("../users/users-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.use("/todos", todosRouter);
server.use("/users", usersRouter);

module.exports = server;
