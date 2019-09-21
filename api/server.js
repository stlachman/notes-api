const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");
const server = express();

const todosRouter = require("../todos/todos-router");
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

server.use(bodyParser.json());
server.use(CORS());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

server.use("/api", authRouter);
server.use("/api/tasks", todosRouter);
server.use("/api/users", usersRouter);

module.exports = server;
