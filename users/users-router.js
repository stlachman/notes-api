const express = require("express");
const router = express.Router();

const Users = require("./users-model");
const Tasks = require("../todos/todos-model");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  Users.findUserTasks(id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
